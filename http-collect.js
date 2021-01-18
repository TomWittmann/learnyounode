const http = require('http');
const bl = require('bl');

http.get(process.argv[2], response => {
    // Once the stream has ended, a callback will be fired with the data.
    // Pipe takes a readable stream and connects it to a writeable stream.
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});