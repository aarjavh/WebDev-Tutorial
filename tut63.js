// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo Selectors and more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(155, 238, 155);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color:rgb(85, 5, 5);
              background-color: rgb(255, 236, 154);
              border: 2px solid black;
          }
          a:visited{
              background-color: cyan;
          }
          a:active{
              background-color: darkblue;
          }
          .btn{
              font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: rgb(255, 137, 160);
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 10px;
              border-radius: 4px;
          }
          .btn:hover{
              color: gold;
              background-color: seashell;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores blanditiis ex molestias perspiciatis atque alias laboriosam quae nesciunt doloremque? Ut eligendi voluptatibus, et mollitia at, id excepturi quod voluptatem quo iste autem rerum!</p>
          <a href="https://google.com" class="btn">Read More</a>
          <button class="btn">Contact Us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});