import express from 'express';
import bodyParser from 'body-parser';
import connect from './connect/connect.js'
import cors from 'cors';
import dotenv from 'dotenv';
import rootRouter from './routes/index.js';
import passport from 'passport';
import { initializePassport } from './auth/auth.js';

connect()
dotenv.config()

const app = express()
const port = 8000;

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Content-Type", "text/html; charset=utf-8")
  next()
})

app.use(express.urlencoded({extended : false}))
app.use(cors({
  origin : "*",
  method : ["GET", "POST", "DELETE", "PUT"]
}))

// passport 초기화 및 사용
app.use(passport.initialize())
initializePassport()

app.use("/", rootRouter)
app.listen(port)