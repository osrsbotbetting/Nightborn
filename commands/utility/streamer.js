const {
  Command
} = require('discord-akairo');
var bpf = require("../../helpers/build_permission_function");
var economy = require("../../helpers/economy");
var Discord = require("discord.js");
var util = require("../../helpers/util");
class StreamerCommand extends Command {
  constructor() {
    super('streamer', {
      aliases: ['streamer'],
      userPermissions: (msg) => (msg.author.id === "101493361067704320") || (msg.author.id === "173378944375062528") || bpf(["owner", "dons", "techies"])(msg),
      category: "utility",
      args: [{
        id: "action",
        type: "string"
      }, {
        id: "person",
        type: "memberMention"
      }]
    });
  }
  async exec(message, args) {
    util.log("command." + this.id, "cmd", `Executed by ${message.author.username}#${message.author.discriminator}, with message content ${message.content}`);
    var streamerRole = "361591270759596043";
    if (args.action === "add") {
      args.person.addRole(streamerRole);
      message.channel.send(new Discord.RichEmbed()
        .setColor(0x4286f4)
        .setDescription("**:white_check_mark: Successfully added Streamer role to <@" + args.person.id + ">**"));
    } else {
      args.person.removeRole(streamerRole);
      message.channel.send(new Discord.RichEmbed()
        .setColor(0x4286f4)
        .setDescription("**:white_check_mark: Successfully removed Streamer role from <@" + args.person.id + ">**"));
    }
  }
}
module.exports = StreamerCommand;
