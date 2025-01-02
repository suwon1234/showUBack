import Upgrade from "../../models/users/upgradeSchema.js";
import User from "../../models/users/userSchema.js";
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
      name : req.body.name
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

// 회원 정보 수정
const modify = async (req, res) => {
  // console.log("req body:", req.body);
  // console.log("req user:", req.user);
  const { password, phone } = req.body;
  const { email } = req.user;

  // 회원 정보를 수정한다.
  const foundUser = await User.findOne({ email : email }).lean();  

  if (!foundUser) {
    return res.status(400).json({
      updateSuccess: false,
      message: "회원정보를 수정할 수 없습니다",
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("hashedPassword: ", hashedPassword);

    await User.updateOne(
      { email : email },  
      { password: hashedPassword, phone: phone }
    );

    const updatedUser = await User.findOne({ email : email}).lean();

    return res.status(200).json({
      updateSuccess: true,
      message: "회원정보가 수정되었습니다",
      currentUser: updatedUser,
    });
  }
};



// 회원 탈퇴
const remove = async (req, res) => {
  const { email } = req.user;
  // console.log(req.user)
  const foundUser = await User.findOne({ email : email }).lean()
  console.log("foundUser:", foundUser)
  const deleteUser = await User.deleteOne(foundUser)
  console.log("deleteUser:", deleteUser)

  res.status(200).json({
    deleteSuccess : true,
    message : "회원탈퇴 완료",
    currentUser : deleteUser
  })
}

// 등급업 신청
const upgrade = async (req, res) => {
  // console.log("req.body", req.body)
  // console.log("req.user", req.user)
  const { exportName, intro, area, field, total, career, portfolio } = req.body;
  const foundUser = await User.findOne({ exportNameid : exportName }).lean();
  // console.log("foundUser", foundUser)

  if(foundUser){
    return res.status(400).json({
      upgradeSuccess : false,
      message : "이미 등급업 신청이 완료되었습니다"
    })
  }else{

    await Upgrade.create({
      exportName : exportName,
      intro : intro,
      area : area,
      field : field,
      total : total,
      career : career,
      portfolio : portfolio
    })

    return res.status(200).json({
      upgradeSuccess : true,
      message : "등급업 신청이 완료되었습니다"
    })
  }
}

// 등급업 수정
const modifyUpdate = async (req, res) => {
  // console.log("req.user", req.user)
  // console.log("req.body", req.body)
  const { exportName, intro, area, field, total, career, portfolio } = req.body;
  const foundUser = await Upgrade.findOne({ exportName : exportName }).lean();
  // console.log(foundUser)
  // console.log('Export Name:', exportName);

  if (!foundUser) {
    return res.status(400).json({
      modifySuccess: false,
      message: "등급업을 수정할 수 없습니다",
    });
  } else {

    await Upgrade.updateOne(
      { exportName : exportName },  
      { intro : intro, area : area, field : field, total : total, career : career, portfolio : portfolio }
    );

    const updatedUpgrade = await Upgrade.findOne({ exportName : exportName }).lean();
    console.log("updatedUpgrade", updatedUpgrade)

    return res.status(200).json({
      modifySuccess: true,
      message: "등급업 정보가 수정되었습니다",
      currentUser: updatedUpgrade,
    });
  }
}

// 등급업 정보 데이터 가져오기
const upgradeInfo = async (req, res) => {
  // console.log(req.user)
  const { id } = req.params;
  // console.log(req.params)

  try {
    const user = await Upgrade.findOne({ exportName : id });
    
    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    // 사용자 등급업 관련 정보 반환
    const userInfo = {
      intro: user.intro || '',
      area: user.area || '',
      field: user.field || '',
      total: user.total || '',
      career: user.career || '',
      portfolio: user.portfolio || ''
    };

    return res.status(200).json(userInfo);
  } catch (error) {
    console.error("사용자 정보 조회 중 오류 발생", error);
    return res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }

}

// 아이디 찾기
const findId = async (req, res) => {
  const { name, phone } = req.body
  // console.log("req.body", req.body) 

  const foundUser = await User.findOne({ name: name, phone: phone }).lean();
  // console.log("foundUser", foundUser)

  try {
    
    if(!foundUser){
      console.log("일치하는 아이디가 없습니다")
      return res.status(400).json({
        findIdSuccess : false,
        message : "일치하는 아이디가 없습니다",
      })
    }else {
      const { email } = foundUser
      console.log("일치하는 아이디 :", foundUser)

      return res.status(200).json({
        findIdSuccess : true,
        message : "일치하는 아이디를 찾았습니다",
        currentUser : email
      })
    }
  } catch (error) {
    return res.status(500).json({
      findIdSuccess : false,
      message : "아이디 찾기 서버 오류"
    })
  }

}

// 관리자 정보 insert
const adminLogin = async (req, res) => {
  try {
    const password = "test123!"
    const hashedPassword = await bcrypt.hash(password, salt);

    // 관리자 데이터
    const adminData = [
      {
        email: "admin@gmail.com",
        password: hashedPassword,
        name : "관리자",
        role: "admin"
      },
      {
        email: "test1@gmail.com",
        password: hashedPassword,
        name: "사용자1",
        phone: "010-1111-1111"
      },
      {
        email: "test2@gmail.com",
        password: hashedPassword,
        name: "사용자2",
        phone: "010-2222-2222"
      },
      {
        email: "test3@gmail.com",
        password: hashedPassword,
        name: "사용자3",
        phone: "010-3333-3333"
      },
      {
        email: "test4@gmail.com",
        password: hashedPassword,
        name: "사용자4",
        phone: "010-4444-4444"
      },
      {
        email: "test5@gmail.com",
        password: hashedPassword,
        name: "사용자5",
        phone: "010-5555-5555"
      },
      {
        email: "test6@gmail.com",
        password: hashedPassword,
        name: "사용자6",
        phone: "010-6666-6666"
      },
      {
        email: "test7@gmail.com",
        password: hashedPassword,
        name: "사용자7",
        phone: "010-7777-7777"
      },
      {
        email: "test8@gmail.com",
        password: hashedPassword,
        name: "사용자8",
        phone: "010-8888-8888"
      },
      {
        email: "test9@gmail.com",
        password: hashedPassword,
        name: "사용자9",
        phone: "010-9999-9999"
      },
      {
        email: "test10@gmail.com",
        password: hashedPassword,
        name: "사용자10",
        phone: "010-1111-1111"
      },
    ];

    // 중복된 관리자가 있는지 확인 후 삽입
    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });
    if (existingAdmin) {
      return res.status(400).json({ message: "관리자가 이미 존재합니다." });
    }

    await User.create(adminData);

    res.status(201).json({ message: "관리자 계정이 성공적으로 생성되었습니다." });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류. 다시 시도해 주세요." });
  }
}


// 등급업 신청 내역 불러오기
const UpgradeAllData = async (req, res) => {
  try {
    const upgrades = await Upgrade.find({}).sort({ createdAt : -1 });
    res.status(200).json({
      upgrades : upgrades,
      message : "성공적으로 등급업 신청 내역을 가져왔습니다."
    })
  } catch (error) {
    console.log("UpgradeAllDataError", error)
    res.status(500).json({message : "서버 오류, 데이터를 가져 올 수 없습니다."})
    
  }
  
}


//등급업 승인(관리자)
const approveRequests = () => {

}

export { register, login, modify, remove, upgrade, modifyUpdate, upgradeInfo, findId, UpgradeAllData, approveRequests, adminLogin }