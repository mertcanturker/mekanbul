var mongoose = require('mongoose');
//var dbURI='mongodb+srv://mertcan:1234@mekanbul.kaejpdz.mongodb.net/?retryWrites=true&w=majority'
var dbURI='mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });

}
process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı", function(){
        process.exit(0);
    });
});
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı!\n");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" Bağlantı koptu");
});
mongoose.connection.on("error",function(){
    console.log(dbURI+" Bağlantı hatası");
});

require("./mekansema");

