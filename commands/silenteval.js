const {
  Command
} = require('discord-akairo');
var bpf = require("../helpers/build_permission_function");
var util = require("../helpers/util");

function clean(text) {
  if (typeof (text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
  } else {
    return text
  };
}
class SilentEvalCommand extends Command {
  constructor() {
    super('silenteval', {
      aliases: ['silenteval'],
      ownerOnly: true,
      split: "none",
      args: [{
        id: "after"
      }]
    });
  }
  exec(message, args) {
    util.log("command." + this.id, "cmd", `Executed by ${message.author.username}#${message.author.discriminator}, with message content ${message.content}`)
    return new Promise((resolve, reject) => {
      try {
        var eval_pls = "var author = message.author; var nb = message.guild; var echo = message.channel.send; " + args.after;
        let evaled = eval(eval_pls);
        if (typeof evaled !== "string") evaled = require("util")
          .inspect(evaled);
        //message.channel.send(clean(evaled), { code: "xl" });
      } catch (err) {
        //message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
      resolve()
    })
  }
}
module.exports = SilentEvalCommand;
