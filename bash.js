process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd') {
        const pwd = require('./pwd')
        pwd()
    }
    if (cmd === 'ls') {
        const fs = require('fs')
        fs()
    }
    
        process.stdout.write('You typed: ' + cmd);
    
  
});

//pwd()