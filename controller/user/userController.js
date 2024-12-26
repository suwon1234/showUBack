import User from "../../models/userSchema.js"
import bcrypt from 'bcrypt';

const salt = await bcrypt.genSalt(10)

// 회원가입
const register = async (req, res) => {
  console.log(req.body)
  // 1) 기존 회원이 있는 지 검사
  const foundUser = await User.findOne({ email : req.body.email }).lean();
  if(foundUser){
    //있으면
    return res.status(409).json({
      registerSuccess : false,
      message : "이미 존재하는 이메일입니다"
    })
  }else {
    
    // 2) 비밀번호를 암호화 한다
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    // console.log("hashedPassword", hashedPassword)

    // 3) 회원의 정보를 DB에 insert한다 
    await User.create({
      email : req.body.email,
      password : hashedPassword,
      phone : req.body.phone,
      // name : req.body.name
    })

    return res.status(201).json({
      registerSuccess : true,
      message : "회원가입이 완료되었습니다"
    })
  } 
}

// 로그인
const login = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ email : email }).lean()
  const validPassword = await bcrypt.compare(password, foundUser.password)

  if(!foundUser){
    return res.status(409).json("회원이 아닙니다")
  }else{
    if(!validPassword){
      return res.status(409).json({
        loginSuccess : false,
        message : "이메일 또는 비밀번호를 확인해 주세요"
      })
    }
    // 아이디와 비밀번호가 일치하는 유저
    // 1) 회원 정보를 보낸다
    const { password, ...foundUser } = foundUser

    res.status(200).json({
      loginSuccess : true,
      message : "로그인 성공하였습니다",
      currentUser : foundUser
    })

  }

}

// 회원정보 수정
const modify = async (req, res) => {
  const { email } = req.body
  const foundUser = await User.foundUser({email : email}).lean()
  if(!foundUser){
    res.status(400).json({
      updateSuccess : false,
      message : "회원정보를 수정할 수 없습니다"
    })
  }else {
    await User.updateOne(foundUser, req.body);
    const updatedUser = await User.findOne({email : email}).lean()
    res.status(200).json({
      updateSuccess : true,
      message : "회원수정이 완료되었습니다",
      currentUser : updatedUser
    })
  }
}

// 회원 탈퇴
const remove = async (req, res) => {
  const {email} = req.body;
  const foundUser = await User.findOne({email:email}).lean()
  await User.deleteOne(foundUser)

  res.status(200).json({
    deleteSuccess : true,
    message : "회원탈퇴 완료",
    currentUser : updatedUser
  })
}

export { register, login, modify, remove }