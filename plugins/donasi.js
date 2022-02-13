let handler = async m => m.reply(`
╭─「 Donasi • touch and go ewallet 」
│ • three
│ • 1161739141
╰────

╭─「 Donasi • touch and go ewallet  」
│ No tng 
│ 1161739141
╰────

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
