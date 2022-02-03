const fs = require('fs')
const process = require('process')

function cat(path) {

    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            // handle possible error
            console.error(`Error reading ${path}: ${err}`);
            // kill the process and tell the shell it errored
            process.exit(1);
        } else {
            console.log(`file contents: ${data}`);
        }
    });

    console.log('reading file');
    // file won't have been read yet at this point
}

cat(process.argv[2])