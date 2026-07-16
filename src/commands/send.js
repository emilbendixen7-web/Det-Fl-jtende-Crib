const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hej')
        .setDescription('Sender en hilsen'),
    async execute(interaction) {
        // Svarer på en slash-kommando
        await interaction.reply('Hej! Jeg modtog din kommando. 🚀');
    },
};
