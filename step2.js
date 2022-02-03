const fs = require('fs')
const process = require('process')
const axios = require('axios')



function cat(path) {

    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            // handle possible error
            console.error(`Error reading ${path}: ${err}`);
            // kill the process and tell the shell it errored
            process.exit(1);
        } else {
            console.log(data);
        }
    });

    console.log('reading file');
    // file won't have been read yet at this point
}

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err} `)
        process.exit(1)
    }
}
let path = process.argv[2]

if (path.slice(0, 4) === 'http') {
    webCat(path)
} else {
    cat(path)
}

webCat(process.argv[2])