const http = require('http')
const fs = require('fs')
const path = require('path')

// createServer é um metodo do http
http.createServer((req,res)=>{ //res = resposta do servido, req = requisiçoes 
    // res.write('olá, mundo!') 
    // res.end('olá, mundo!')
    if(req.url === '/')
        fs.readFile(path.join(__dirname, 'public', 'index.html'), // path significa caminho e join juntar
        (err, content)=>{ // content nesse caso retorna o conteudo index.html
            if(err) throw err
            
            res.end(content)
        }) 
    //     return res.end('<h1>Pagina inicial</h1>')
    // if(req.url === '/contato')
    //     return res.end('<h1>contato</h1>')
}).listen(3000, ()=>{
    console.log('servidor rodando........')
})