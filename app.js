const express = require("express");
const app = express();
const port = 3002;


//invocamos las rutas
const mainRouters =require("./routers/mainRouter");

// aqui van los modulos
app.use(express.static("public"));
app.use("/",mainRouters);




app.listen(port, ()=>{
    console.log("servidor corriendo en el puerto ", port);

});
    