var mongoose = require("mongoose");
var dbURI='mongodb+srv://mertcan:1234@mekanbul.3djyl4r.mongodb.net/?retryWrites=true&w=majority'
// var dbURI = 'mongodb://localhost/mekanbul';

mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
}

);

}
process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı!",function(){
            process.exit(0);
    }
    );
}
);
mongoose.connection.on("connected",function(){
console.log(dbURI+" adresindeki veritabanına bağlanıldı!");
}




);
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" adresindeki veritabanı bağlantısı koptu");
}

);
mongoose.connection.on("error",function(){
    console.log("Bağlantı hatası");
}
);
require("./mekansema");