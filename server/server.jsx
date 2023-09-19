import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import path from "path";
import fs from "fs";
import { App } from "./appClient.jsx";

const app = express();
const indexHtml = path.resolve("server","index.html");

app.get("/",(req,res)=>{
    fs.readFile(indexHtml,"utf8",(err,data)=>{
        if(err){
            return res.status(500).send("error response " + err);
        }
        res.setHeader('content-type', 'text/html');
        console.log(data);
        data = data.replace('<h1>from server</h1>',renderToString(<App />));
         console.log(renderToString(<App />));
        return res.send(data);        
    })
    
})

app.use(express.static('build'))

app.listen(3000,()=>{
    console.log("3000 listening");
})
