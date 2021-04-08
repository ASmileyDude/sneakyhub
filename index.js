const discord = require('discord.js')
const client = new discord.Client
const prefix = '.'
const ytdl = require('ytdl-core')

client.on('ready', () => {
    console.log(`${client.user.username} enabled!`)
    client.user.setActivity('.help', {type: 'WATCHING'}).catch(console.error);
})

client.on('message', message => {
    if (message.content === '.ip') {
        const ip = new discord.MessageEmbed()
        .setColor('#007200')
        .addFields(
            { name: `IP:`, value: `sneakyhub.hopto.org:25565`}
        )
        .setTimestamp()
        .setFooter(`Executed by ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(ip)
    }
})

client.on('message', message => {
    if (message.channel.id === '829657187084402699') {
        message.react('👍')
        message.react('👎')
    }
    if (message.channel.id === '829658585122340884') {
        message.react('👍')
        message.react('👎')
    }
})

client.on('message', message => {
    if (message.content === '.help'){
        const help = new discord.MessageEmbed()
        .setColor('#007200')
        .setTitle(`<=-=> HELP <=-=>`)
        .addFields(
            { name: `.help`, value: `Shows this message!`, inline: true},
            { name: `.invite/.inv`, value: `Gives you an invite link!`, inline: true},
            { name: `.ip`, value: `Shows the ip to the server!`}
        )
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
        message.channel.send(help)
    }
})

client.on('message', message =>{
    if (message.content === '.invite'){
        const Invite = new discord.MessageEmbed()
        .setColor('#007200')
        .addFields(
            { name: `Invite:`, value: `https://discord.gg/KANCWwgahZ`}
        )
        message.channel.send(Invite)
    }
})

client.on('message', message =>{
    if (message.content === '.inv'){
        const Invite = new discord.MessageEmbed()
        .setColor('#007200')
        .addFields(
            { name: `Invite:`, value: `https://discord.gg/KANCWwgahZ`}
        )
        message.channel.send(Invite)
    }
})

client.login(process.env.token)