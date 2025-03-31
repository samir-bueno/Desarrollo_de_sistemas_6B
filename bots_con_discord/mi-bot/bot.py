import discord
import os
import random
from dotenv import load_dotenv
from discord.ext import commands

# Cargar variables de entorno
load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

# Configurar el bot con permisos adecuados
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

# Variables del juego
partida = None
roles = ['Mafioso', 'Ciudadano', 'Doctor', 'Detective']

@bot.command()
async def mafia_crear(ctx, num_jugadores: int):
    """Crea una nueva partida de Mafia"""
    global partida
    if partida:
        return await ctx.send("Ya hay una partida en curso. Espera a que termine.")

    partida = {
        'jugadores': [],
        'max_jugadores': num_jugadores, 
        'estado': 'creada'
    }
    await ctx.send(f"Partida creada para {num_jugadores} jugadores. Usa `!mafia_unirme` para entrar.")

@bot.command()
async def mafia_unirme(ctx):
    """Permite unirse a la partida"""
    if not partida or partida['estado'] != 'creada':
        return await ctx.send("No hay partida disponible.")

    if ctx.author in partida['jugadores']:
        return await ctx.send("Ya estás en la partida.")

    if len(partida['jugadores']) >= partida['max_jugadores']:
        return await ctx.send("La partida ya está llena.")

    partida['jugadores'].append(ctx.author)
    await ctx.send(f"{ctx.author.name} se ha unido. ({len(partida['jugadores'])}/{partida['max_jugadores']})")

    if len(partida['jugadores']) == partida['max_jugadores']:
        await asignar_roles(ctx)

async def asignar_roles(ctx):
    """Asigna roles y empieza la partida"""
    global partida
    random.shuffle(roles)
    jugadores_con_roles = {}

    for i, jugador in enumerate(partida['jugadores']):
        rol = roles[i % len(roles)]
        jugadores_con_roles[jugador] = rol  # Guardamos el rol asignado

        mensaje = f"Tu rol es **{rol}**."
        if rol == "Mafioso":
            mensaje += " Durante la noche, usa `!matar <nombre>` para eliminar a alguien en secreto."

        try:
            await jugador.send(mensaje)
        except discord.Forbidden:
            pass  # Si el usuario tiene los DMs bloqueados, lo ignoramos

    partida['jugadores_con_roles'] = jugadores_con_roles  # Guardamos los roles asignados
    partida['estado'] = 'en curso'
    await ctx.send("¡La partida ha comenzado! Los roles han sido asignados.")

@bot.command()
async def iniciar_noche(ctx):
    """Inicia la fase de noche donde los mafiosos eligen a alguien para eliminar"""
    if not partida or partida['estado'] != 'en curso':
        return await ctx.send("La partida no ha comenzado aún.")

    # Cambiar el estado de la partida para reflejar la fase de noche
    partida['estado'] = 'noche'

    # Anunciar en el canal general el inicio de la fase de noche
    await ctx.send("La fase de noche ha comenzado. Los mafiosos pueden elegir a quién eliminar usando `!matar <nombre>`.")

@bot.command()
async def matar(ctx, miembro: discord.Member):
    """Comando para que los mafiosos elijan a la víctima usando una mención"""
    if not partida or partida['estado'] != 'noche':
        return await ctx.send("No es la fase de noche o la partida no ha comenzado aún.")

    # Verificar si el miembro está en la lista de jugadores
    if miembro not in partida['jugadores']:
        return await ctx.send(f"{miembro.name} no está en la partida.")

    # Eliminar al jugador (lo marcamos como eliminado)
    partida['jugadores'].remove(miembro)
    await ctx.send(f"{miembro.name} ha sido eliminado durante la noche.")

    # Enviar mensaje privado al mafioso que realizó la eliminación
    await ctx.author.send(f"Has eliminado a {miembro.name} durante la noche.")

    # Anunciar la eliminación en el canal general
    await ctx.send(f"¡Atención! {miembro.name} ha sido eliminado durante la noche.")

    # Terminar la fase de noche
    partida['estado'] = 'noche_terminada'

bot.run(TOKEN)
