import passport from 'passport';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import User from '../models/users/userSchema.js'
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';

dotenv.config()

// 일반 로그인
// 화면에서 보낸 데이터의 key값과 일치시켜 검증
const passportConfig = {
  usernameField : 'email', passwordField : 'password'
}

const passportVerify = async (email, password, done) => {
  try {
    // 유저 아이디로 일치하는 유저 데이터 검색
    const foundUser = await User.findOne({ email : email }).lean()
    
    if(!foundUser){
      //error, value, info(메세지)
      return done(null, false, { message : "존재하지 않은 이메일입니다"})
    }

    //비밀번호 검사
    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if(!passwordMatch){
      return done(null, false, { message : "올바르지 않은 비밀번호입니다"})
    }

    // 비밀번호, 아이디가 일치하는 사용자
    return done(null, foundUser)

  } catch (error) {
    console.error("passportVerifyError", error)
  }
}

// jwt 검증 로직
const SECRET_KEY = process.env.SECRET_KEY;

const JWTConfig = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : SECRET_KEY
}

const JWTVerify = async (jwtPayload, done) => {
  try {
    console.log(jwtPayload)

    const foundUser = await User.findOne({email : jwtPayload.email }).lean()
    if(!foundUser){
      done(null, false, { reason : "올바르지 않은 인증정보 입니다."})
    }
    // 만약 유저가 있다면, 유저 정보를 다음 컨트롤러로 보낸다.
    return done(null, foundUser)
    
  } catch (error) {
    console.error("JWTVerify", error)
    done(error)
  }
}

// passport로 전략들을 실행
const initializePassport = () => {
  passport.use('local', new LocalStrategy(passportConfig, passportVerify))
  passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify))
}

export { initializePassport }