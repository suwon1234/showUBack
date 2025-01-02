import Reservation from "../../models/reservation/reservationSchema.js";

// 초기 데이터 삽입
const seedReservationData = async (req, res) => {
  try {
    console.log("기존 데이터를 삭제 중...");
    await Reservation.deleteMany({});
    console.log("새 데이터를 삽입 중...");
    const ticketEvents = [
      // 예시 데이터 추가
    ];
    const performingShows = [
      // 예시 데이터 추가
    ];
    await Reservation.insertMany(ticketEvents);
    await Reservation.insertMany(performingShows);
    console.log("초기 데이터 삽입 완료");
    res
      .status(201)
      .json({ message: "Reservation 데이터가 성공적으로 추가되었습니다!" });
  } catch (error) {
    console.error("Reservation 데이터 추가 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "Reservation 데이터 추가 중 오류 발생",
        error: error.message,
      });
  }
};

// 전체 Reservation 데이터 조회
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate(
      "spaceId showId user"
    );
    res.status(200).json(reservations);
  } catch (error) {
    console.error("Reservation 데이터 조회 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "Reservation 데이터 조회 중 오류 발생",
        error: error.message,
      });
  }
};

export { seedReservationData, getAllReservations };
