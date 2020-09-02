const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();

var mensaje = "BIEN BRO!"

client.once('ready', () => {
	console.log("Listos.")
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	switch(command) {
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '10':
		case '11':
		case '12':
		case '13':
		case '14':
		case '15':
		case '16':
		case '17':
		case '18':
		case '19':
		case '20':
		case '21':
		case '22':
		case '23':
		case '24':
		case '25':
		case '26':
		case '27':
		case '28':
		case '29':
		case '30':
			message.channel.send(mensaje)
			break;
		case 'no':
			message.channel.send("AWANTAAAA!")
			break;
		case 'gracias':
		case 'Gracias':
			message.channel.send("De nada, somos panas")
			break;
		case 'hola':
			message.channel.send("Hola, ¿como vas con la paja?")
			break;
		case 'noaguanto':
			message.channel.send("¡ERES UN PANA TU PUEDES!")
			break;
	}
})


client.login(token);

/* 
 * Espero de corazón que este código sea de tu agrado.
 * Espero también que puedas aprender a usar los switches
 * gracias a este código. Como ves, puedes llegar a compactar
 * muchísimo el código. Pasamos de +240 líneas a solo 68 líneas.
 * Puedes seguir añadiendo comandos, editar cosas, no sé, este 
 * bot es tuyo, en esencia.
 * 
 * ¡Disfrutalo, amigo mío!
 *
 * twitch.tv/b0ssat192
 */
