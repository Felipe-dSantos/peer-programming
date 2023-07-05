const http = require('http')
const fs = require('fs')
const path = require('path')

// createServer é um metodo do http
http.createServer((req,res)=>{ //res = resposta do servido, req = requisiçoes 
    const file = req.url === '/' ? 'index.html' : req.url
    console.log(file) 
    const pathFile = path.join(__dirname, 'public', file)// path significa caminho e join juntar

    const extname = path.extname(pathFile)//caputra a extenção do documento requizitado

    const allowedFileTypes = ['.html','.css','.js', '.png']// lista de extenção permitida 

    const allowed = allowedFileTypes.find(item => item == extname)// testa se o item da lista de permitido é igual ao item requisitado

    fs.readFile(pathFile, 
        (err, content)=>{ // content nesse caso retorna o conteudo index.html
            if(err) throw err
            
            res.end(content)
        })

    //     return res.end('<h1>Pagina inicial</h1>')
    // if(req.url === '/contato')
    //     return res.end('<h1>contato</h1>')
}).listen(5000, ()=>{
    console.log('servidor rodando........')
})