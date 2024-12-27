import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import passport from 'passport'

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY;

const localStrategy = async (req, res, next) => {
  try {
    console.log(req)
    //done(error, value, info)
    const error = req.error;
    const authenticatedUser = req.user; //인증된 유저 정보
    const info = req.info;

    if(error || !authenticatedUser){
      res.status(400).json(
        {
          loginSuccess : false,
          message : info.message
        }
      )
    }

    // 로그인 처리
    req.login(authenticatedUser, { session : false }, async (loginError) => {
      //오류가 있다면
      if(loginError){
        return res.send(loginError)
      }
      
      // 정상 로그인, JWT 생성 후 반환
      // jwt.sign(config, secretkey, expireTime)
      const jwtToken = jwt.sign(
        {
          email : authenticatedUser.email,
          name : authenticatedUser.name,
          issuer : "minkyoung"
        },
        SECRET_KEY,
        {
          expiresIn : "24h"
        }
      )

      // console.log("jwt token", jwtToken)
      // console.log("authenticatedUser", authenticatedUser)
      // 화면에 토큰만 보내줌
      res.status(200).json({
        message : "로그인 성공하였습니다",
        loginSuccess : true,
        jwtToken : jwtToken
      })

    })

  } catch (error) {
    console.log("localStrategyError", error)
  }
}

const jwtStrategy = async (req, res, next) => {
  try {
    //인가된 유저의 정보를 req.user에 담겨서 온다.
    const jwtAuthenticateUser = req.user;
    const {password, ...foundUser } = jwtAuthenticateUser;

    res.json({
      message : "자동 로그인 성공",
      user : foundUser
    })

    
    // console.log("foundUser", foundUser)

  } catch (error) {
    console.error("jwtStrategyError", error)
    next(error)
  }
}

export { localStrategy, jwtStrategy }