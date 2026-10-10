var fs = require('fs');
fs.writeFile('file_op.txt', 'Hello Node.js', (err) => {
    if (err) console.log(err);
    else console.log('File written');
    
    fs.readFile('file_op.txt', 'utf8', (err, data) => {
        if (err) console.log(err);
        else console.log('Content: ',data);
    });

    fs.open('file_op.txt', 'r', (err, fd) => {
        if (err) console.log(err);
        else {
            console.log('File opened');
            fs.close(fd, () => {});
        }
    });

    fs.rename('file_op.txt', 'new_file_op.txt', (err) => {
        if (err) console.log(err);
        else console.log('File renamed');
    });

    fs.stat('file_op.txt', (err, stats) => {
        if (err) console.log(err);
        else console.log('File stats: ', stats.size);
    });
});