const http = require('http');
const fs = require('fs').promises

const host = http.createServer(async(req, res) => {
    try{
    const data = await fs.readFile('./server2.html')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h2>나의서버</h2>')
    res.end(data);
    }catch(error){
        console.error(error)
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(error.message);
    }
});
const host1 = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h2>2번째</h2>')
    res.end('<p>반가워요</p>');
});

host.listen(8080)

host.on('listening',()=>{
    console.log('8080번 포트에서 서버 대기 중입니다.');
});

host.on('error',(error)=>{
    console.error(error);
});
host1.listen(8081)

host.on('listening',()=>{
    console.log('8081번 포트에서 서버 대기 중입니다.');
});

host.on('error',(error)=>{
    console.error(error);
});