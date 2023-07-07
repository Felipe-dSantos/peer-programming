const http = require('http')
const fs = require('fs')
const path = require('path')

// createServer é um metodo do http
http.createServer((req,res)=>{ //res = resposta do servido, req = requisiçoes 
    const file = req.url === '/' ? 'index.html' : req.url
    console.log(file) 
    const pathFile = path.join(__dirname, 'public', file)// path significa caminho e join juntar

    const extname = path.extname(pathFile)//captura a extenção do documento requizitado

    const allowedFileTypes = ['.html','.css','.js', '.png']// lista de extenção permitida

    const allowed = allowedFileTypes.find(item => item == extname)
    if(!allowed) return// testa se o item da lista de permitido é igual ao item requisitado

    fs.readFile(pathFile, 
        (err, content)=>{ // content nesse caso retorna o conteudo index.html
            if(err) throw err
            
            res.end(content)
        })

    
}).listen(5000, ()=>{
    console.log('servidor rodando........')
})