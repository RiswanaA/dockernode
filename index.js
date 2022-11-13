
const express = require("express");
// const cors = require("cors");
const app = express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/',(req,res)=> res.send('Hello World!'));
app.listen(3001, () => { console.log("server started to listen at port http://localhost:3001 "); });
