import Upgrade from "../../models/users/upgradeSchema.js";

// 등급업 신청 내역 불러오기
const UpgradeAllData = async (req, res) => {

  try {
    // const upgrades = await Upgrade.find({}).sort({ createdAt : -1 });

    const foundUser = await Upgrade.find({}).populate('exportName').lean();    
    console.log("foundUser", foundUser)

    res.status(200).json({
      message : "성공적으로 등급업 신청 내역을 가져왔습니다.",
      upgrades : foundUser
    })
    
  } catch (error) {
    console.log("UpgradeAllDataError", error)
    res.status(500).json({message : "서버 오류, 데이터를 가져 올 수 없습니다."})
    
  }
}

export { UpgradeAllData }