import LessonResevation from "../../models/showu/lessonReservationSchema.js";
import Lesson from "../../models/showu/lessonSchema.js";
import Team from "../../models/showu/teamSchema.js";

const getMyTeamMatching = async (req, res) => {
  const userId = req.user._id;
  // console.log("로그인한 사용자 id : ", userId)
  // const { status } = req.params;
  // console.log("req.query", res.params)

  try {
    // 로그인한 사용자와 일치하는 팀 매칭 정보 리스트
    const teamList = await Team.find({ userId : userId })
    // console.log("팀 매칭 리스트 : ", teamList)

    // 마이페이지에 필요한 팀매칭 완료 정보
    const myCompletedTeamsList = await teamList.map((team) => ({
      teamName : team.teamName,
      teamThumbnail : team.teamThumbnail,
      status : team.status,
      teamNotice : team.teamNotice
    }))
      .filter((item) => item.status === "매칭 완료")

    // 마이페이지에 필요한 팀매칭 완료 정보
    const myWaitingTeamsTeamList = await teamList.map((team) => ({
      teamName : team.teamName,
      teamThumbnail : team.teamThumbnail,
      status : team.status,
      teamNotice : team.teamNotice
    }))
      .filter((item) => item.status === "매칭 대기")

    // console.log("마이페이지에 필요한 팀 매칭 완료 정보 리스트 :", myCompletedTeamsList)
    // console.log("마이페이지에 필요한 팀 매칭 대기 정보 리스트 :", myWaitingTeamsTeamList)
    
    return res.status(200).json({
      teamMatchingSuccess : true,
      message : "팀 매칭 정보를 성공적으로 가져왔습니다.",
      completedTeams : myCompletedTeamsList,
      waitingTeams : myWaitingTeamsTeamList
    })

  } catch (error) {

    return res.status(500).json({
      teamMatchingSuccess : false,
      message : "팀 매칭 정보를 가져오는데 실패했습니다",
    })
    
  }
}

// 개설한 레슨 목록 가져오기
const getMyLesson = async (req, res) => {
  const userId = req.user;
  // console.log("로그인한 사용자 : ", userId)

  try {
    const lessonList = await Lesson.find({ userId : userId })
    // console.log("로그인한 사용자와 일치하는 레슨 개설 리스트 : ", lessonList)

    const myLesson = await lessonList.map((lesson) => ({
      lessonThumbnail : lesson.lessonThumbnail,
      lessonName : lesson.lessonName
    }))
    // console.log("마이페이지에 필요한 개설한 레슨 목록 : ", myLesson)

    return res.status(200).json({
      lessonSuccess : true,
      message : "개설한 레슨 목록을 성공적으로 가져왔습니다.",
      myLesson : myLesson
    })
  } catch (error) {
    return res.status(500).json({
      lessonSuccess : false,
      message : "개설한 레슨 목록을 가져오는데 실패했습니다."
    })
  }

}


// 레슨 상담내역 불러오기
const getlessonreservation = async (req, res) => {
  const userId = req.user;
  console.log("로그인한 사용자 id : ", userId)

  try {
    const reservationList = await LessonResevation.find({ userId : userId })
    console.log("로그인한 사용자와 일치하는 상담 내역 리스트 : ", reservationList)

    const myLessonReservationList = await reservationList.map((lesson) => ({
      id : lesson.id,
      phoneNumber : lesson.phoneNumber,
      email : lesson.email
    }))
      .sort(function(a, b){
        return a.id - b.id; //id값 오름차순 정렬
      })

    console.log("마이페이지에 필요한 레슨 상담 내역 정보 리스트: ", myLessonReservationList)

    return res.status(200).json({
      LessonResevationSuccess : true,
      message : "상담 내역을 성공적으로 가져왔습니다",
      myLessonReservationList : myLessonReservationList
    })
    
  } catch (error) {

    return res.status(200).json({
      LessonResevationSuccess : false,
      message : "상담내역을 가져오는데 실패했습니다",
    })

  }
}

export { getMyTeamMatching, getMyLesson, getlessonreservation }




