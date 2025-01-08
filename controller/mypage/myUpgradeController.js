const uploadFiles = async (req, res) => {

  const { email } = req.user;

  const uploadFolder = "uploads/upGradeFiles";
  console.log("req.files", req)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/")

  const foundUser = await User.findOne({ email : email }).lean();
  // console.log("foundUser", foundUser)

  const updatedPicture = await User.updateOne(
    { email : email },
    { files : relativePath }
  )

  console.log("updatedPicture", updatedPicture)

  res.status(200).json({
    message : "업로드 완료",
    filePath : `/${relativePath}`
  })

}

export { uploadFiles }