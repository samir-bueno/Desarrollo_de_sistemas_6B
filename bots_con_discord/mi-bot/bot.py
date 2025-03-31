import discord
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

# Obtener el token de Discord
TOKEN = os.getenv('DISCORD_TOKEN')

# Crear cliente e intents
intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)

# Evento cuando el bot está conectado
@client.event
async def on_ready():
    print(f'✅ Bot conectado como {client.user}')

# Evento cuando el bot recibe un mensaje
@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.lower() == 'hola':
        await message.channel.send('¡Hola! Soy un bot hecho en Python. 🤖')

# Ejecutar el bot
client.run(TOKEN)
