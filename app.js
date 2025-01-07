import express from 'express';
import bodyParser from 'body-parser';
import connect from './connect/connect.js'
import cors from 'cors';
import dotenv from 'dotenv';
import rootRouter from './routes/index.js';
import passport from 'passport';
import { initializePassport } from './auth/auth.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url' 

// ES Modules에서 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

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

// 파일 이름 중복 처리
const uploadFolder = "uploads/profiles"
const getUniqueFileName = (originalName, uploadFolder) => {
  const ext = path.extname(originalName); //확장자를 추출
  const baseName = path.basename(originalName, ext) //확장자를 제외한 파일 이름
  let uniqueName = originalName; //기본적으로 원본 이미지 저장
  let counter = 1;

  while(fs.existsSync(path.join(uploadFolder, uniqueName))){
    uniqueName = `${baseName}(${counter})${ext}`
    counter++;
  }
  return uniqueName;
}

// Multer 이미지 업로드
const upload = multer({
  storage : multer.diskStorage({
    destination(req, file, done){
      console.log(req.path)
      done(null, path.join(__dirname, "./uploads/profiles")) // 이미지 저장 경로 설정
    },
    filename(req, file, done){
      const uniqueFileName = getUniqueFileName(file.originalname, uploadFolder)
      done(null, uniqueFileName) //파일 이름을 설정
    }
  })
})

const uploadMiddleWare = upload.single('picture');

// 폴더의 접근 권한 제공(정적 파일 제공)
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use(uploadMiddleWare)
  
app.use("/", rootRouter)
app.listen(port)