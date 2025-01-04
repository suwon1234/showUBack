import Reservation from "../../models/reservation/reservationSchema.js";

const getTickets = async (req, res) => {
  const userId = req.user._id;
  console.log("로그인한 사용자 id : ", userId)

  try {
    const resesrvationList = await Reservation.find({ user : userId })
    // console.log("로그인한 사용자의 예약 정보 리스트 : ", resesrvationList)

    const ticketList = await resesrvationList.map((ticket) => ({
      showId : ticket.showId
    }))
      .filter(item => item.showId !== null)
    // console.log("예약 정보 중 티켓 정보 리스트 : ", ticketList)

    const ticketId = await ticketList.map((item) => item.showId)
    console.log("ticketId만 가져오기 : ", ticketId)

    return res.status(200).json({
      ticketsuccess : true,
      message : "티켓 예매 내역을 성공적으로 가져왔습니다"
    })

  } catch (error) {
    
    return res.status(500).json({
      ticketsuccess : false,
      message : "티켓 예매 내역을 가져오는데 실패했습니다"
    })
    
  }
}

export { getTickets }