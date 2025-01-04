import Team from "../../models/showu/teamSchema.js";

const getMyTeamMatching = async (req, res) => {
  const userId = req.user._id;
  console.log("로그인한 사용자 id : ", userId)
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

    console.log("마이페이지에 필요한 팀 매칭 완료 정보 리스트 :", myCompletedTeamsList)
    console.log("마이페이지에 필요한 팀 매칭 대기 정보 리스트 :", myWaitingTeamsTeamList)
    
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

export { getMyTeamMatching }




