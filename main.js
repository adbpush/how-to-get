var url = 'https://discord.com';
var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url);
