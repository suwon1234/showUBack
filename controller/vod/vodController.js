import VodVideo from '../../models/vod/vodSchema.js'

const getAllVideo = async (req, res) => {
    try {
        const vods = await VodVideo.find(); 
        console.log(vods)
    res.status(200).json(vods);
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};




export {getAllVideo} ;