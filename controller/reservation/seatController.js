import Seat from "../../models/reservation/seatSchema.js";
import { parseISO, format } from "date-fns";

// 잔여 좌석 조회
export const getAvailableSeats = async (req, res) => {
  try {
    const { showId, date, time } = req.query;
    const parsedDate = parseISO(date); // 날짜 형식 변환
    const formattedDate = format(parsedDate, "yyyy-MM-dd"); // 원하는 형식으로 포맷팅

    console.log("Parsed Date:", parsedDate); // 파싱된 날짜 확인
    console.log("Formatted Date:", formattedDate); // 포맷된 날짜 확인

    const reservedSeats = await Seat.find({
      showId,
      date: new Date(formattedDate), // ISODate 형식으로 변환된 날짜 사용
      time,
    });
    console.log("Reserved Seats:", reservedSeats); // 콘솔 로그 추가
    const reservedSeatNumbers = reservedSeats.flatMap(
      (seat) => seat.seatNumbers
    ); // 배열 평탄화
    console.log("Reserved Seat Numbers:", reservedSeatNumbers); // 콘솔 로그 추가

    // 모든 가능한 좌석 번호를 생성합니다
    const seats = [];
    for (let i = 0; i < 100; i++) {
      const row = Math.floor(i / 10) + 1;
      const col = (i % 10) + 1;
      seats.push(`${row}-${col}`);
    }

    const availableSeats = seats.filter(
      (seat) => !reservedSeatNumbers.includes(seat)
    );
    console.log("Available Seats:", availableSeats); // 콘솔 로그 추가

    res.status(200).json(availableSeats);
  } catch (error) {
    console.error("잔여 좌석 조회 중 오류 발생:", error);
    res
      .status(500)
      .json({ message: "잔여 좌석 조회 중 오류 발생", error: error.message });
  }
};

// 예약된 좌석 조회
export const getReservedSeats = async (req, res) => {
  try {
    const { showId, date, time } = req.query;
    const parsedDate = parseISO(date); // 날짜 형식 변환
    const formattedDate = format(parsedDate, "yyyy-MM-dd"); // 원하는 형식으로 포맷팅

    console.log("Parsed Date:", parsedDate); // 파싱된 날짜 확인
    console.log("Formatted Date:", formattedDate); // 포맷된 날짜 확인

    const reservedSeats = await Seat.find({
      showId,
      date: new Date(formattedDate), // ISODate 형식으로 변환된 날짜 사용
      time,
    });
    console.log("Reserved Seats:", reservedSeats); // 예약된 좌석 로그 추가
    res.status(200).json(reservedSeats);
  } catch (error) {
    console.error("예약된 좌석 조회 중 오류 발생:", error);
    res
      .status(500)
      .json({ message: "예약된 좌석 조회 중 오류 발생", error: error.message });
  }
};
