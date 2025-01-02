
import vodShowuVideo from '../../models/vod/vodShowuVideo.js';

const getAllVideo = async (req, res) => {
    try {
        const vods = await vodShowuVideo.find(); 
        console.log(vods)
    res.status(200).json(vods);
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};




export {getAllVideo} ;