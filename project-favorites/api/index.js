const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')



http.createServer((req, res) => {

    // res.end(JSON.stringify(data))
    // console.log(URL.parse(req.url, true).query) 
    const { name, url, del } = URL.parse(req.url, true).query
    data.urls = data.urls.filter(item => item.url != url)
    // if (!name || !url)
    // return res.end('show')
    
    // if (del){
    //     return res.end('delete')
    // }

    // fs.writeFile(
    //         path.join(__dirname, 'urls.json'),
    //         JSON.stringify(data,null, 2),
    //         err => {
    //             if (err) throw err
    //             res.end('operação realizada com sucesso!')
    //         })
    // return res.end('cretate')


    if (!name || !url)
        return res.end(JSON.stringify(data))
        
    if (del){
        return writefile(message => res.end(message))
    }
    data.urls.push({name, url})

    return writefile(message => res.end(message))
    
    function writefile() {
        fs.writeFile(
        path.join(__dirname, 'urls.json'),
        JSON.stringify(data,null, 2),
        err => {
            if (err) throw err
            res.end('operação realizada com sucesso!')
        })
    }


}).listen(3000, () => console.log('API rodando'));
