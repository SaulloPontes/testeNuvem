const express = require("express")
const app = express()





app.listen(5555,function(erro){
    if(erro){
        console.log('erro ao iniciar o servidor')
    }else{
        console.log('servidor iniciado')
    }
})

app.get("/primo/:numPrimo",function(req,res){
    var n = req.params.numPrimo
    var cont = 0
    for(var i = 1;i<=n;i++){
        if(n%i==0){
            cont++
        }
    }
    if(cont==2){
        res.send("<h1>o número "+n+" é primo</h1>")
    }else{
        res.send("<h1>o número "+ n+ ' não é primo </h1>')
    }
})


app.get("/numero/:num?",function(req,res){

    var n = req.params.num
    if(n){
        if(n%2==0){
            res.send(" <h1>o número é par</h1> ")
        }else{
            res.send(" <h1>o número é impar</h1> ")
        }
    }else{
        res.send('numero recebido')
    }
})


app.get("/celcius/:temp",function(req,res){
    var t = req.params.temp
    var c = ((t*1.8)+32).toFixed(2)
    res.send("<h1>"+t+" Celsius em Fahrenheit é "+c+"</h1>")
})