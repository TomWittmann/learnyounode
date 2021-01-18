const http = require('http');

let data1 = "";
let data2 = "";
let data3 = "";

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

http.get(url1, response => {
    response.setEncoding('utf-8');
    response.on('data', data => {
        data1 += data;
    });
    response.on('end', () => {
        console.log(data1);
        http.get(url2, response => {
            response.on('data', data => {
                data2 += data;
            });
            response.on('end', () => {
                console.log(data2);
                http.get(url3, response => {
                    response.on('data', data => {
                        data3 += data;
                    });
                    response.on('end', () => {
                        console.log(data3);
                    });
                });
            });
        });
    });
});

