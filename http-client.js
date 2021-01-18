const http = require('http');

http.get(process.argv[2], response => {
    // You could also do this instead of toString.
    // response.setEncoding('utf-8');
    // The response is a Node Stream object.
    // You can treat Node Streams as objects that emit events.
    // The three important events are data, error, and end.
    response.on('data', data => {
        console.log(data.toString());
    });
});