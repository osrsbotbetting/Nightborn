const {
  Inhibitor
} = require('discord-akairo');
class GeneralInhibitor extends Inhibitor {
  constructor() {
    super('blockingeneral', {
      reason: 'commandInGeneral'
    })
  }
  exec(message) {
    if (message.content.startsWith("kms") || message.content.startsWith("goodnight")) return false;
    return message.channel.name === "general" && !message.member.roles.has("378906283727781888");
  }
}
module.exports = GeneralInhibitor;
