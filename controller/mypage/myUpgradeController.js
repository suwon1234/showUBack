import Upgrade from "../../models/users/upgradeSchema.js";

const uploadFiles = async (req, res) => {

  const { exportName, file } = req.body;
  
  const uploadFolder = "uploads/upGradeFiles";
  console.log("req.files", req)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/")
  
  const foundUser = await Upgrade.findOne({ exportName : exportName }).lean();
  // console.log("foundUser", foundUser)

  const updatedPicture = await Upgrade.create({ file : relativePath })

  console.log("updatedPicture", updatedPicture)

  res.status(200).json({
    message : "업로드 완료",
    filePath : `/${relativePath}`
  })

}

export { uploadFiles }