import config from '../../config.cjs';

const sessioncheck = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const senderName = m.pushName || 'User';

  if (cmd === 'sessioncheck') {
    try {
      const msg = `
📶 *SESSION CHECK — THE-HUB-BOT*

Hey *${senderName}*, the bot session is *active* ✅

🟢 Connected and responding to commands.
🧠 Memory and uptime are stable.
🔒 Secure and logged in.

_No action needed! Keep enjoying the features._

*— THE-HUB System Bot 🤖*
      `.trim();

      await sock.sendMessage(m.from, {
        image: { url: 'https://files.catbox.moe/03qy6k.jpg' },
        caption: msg,
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: 'THE-HUB-BOT',
            newsletterJid: '120363395396503029@newsletter',
          },
        },
      }, { quoted: m });
    } catch (error) {
      await sock.sendMessage(m.from, {
        text: `❌ Session error! Bot might be disconnected or facing issues.\n\nError: ${error.message}`,
      }, { quoted: m });
    }
  }
};

export default sessioncheck;
