const {
    Command
} = require('discord-akairo');
var Discord = require("discord.js");
var bpf = require("../../helpers/build_permission_function");
var util = require("../../helpers/util");

class TagsCommand extends Command {
    constructor() {
        super('most_tags', {
            aliases: ['most_tags'],
            category: "fun",
            userPermissions: bpf(["owner", "techies", "dons", "mods", "intern", "event_orgs"])
        });
    }

    exec(message) {
        return new Promise(function (resolve, reject) {
            util.log("command." + this.id, "cmd", `Executed by ${message.author.username}#${message.author.discriminator}, with message content ${message.content}`)
            var most = [null, 0];
            message.guild.members.map((m) => {
                if (m.roles.array().length > most[1]) {
                    most[0] = m;
                    most[1] = m.roles.array().length
                };
            })

            message.channel.send(new Discord.RichEmbed()
                .setTitle("Member with the most roles")
                .setDescription(most[0].user.tag + " has " + most[1].toString() + " tags, the most on the server!")
                .setColor(4359924)
                .setFooter("Bot by @VoidCrafted#2483", "https://lh5.googleusercontent.com/-Z4wuSKQT0oI/AAAAAAAAAAI/AAAAAAAAAA8/oLWR08rF3WM/photo.jpg")
            )

            resolve();
        })
    }
}

module.exports = TagsCommand;