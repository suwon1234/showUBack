import TicketEvent from "../../models/reservation/ticketEventSchema.js";

// 초기 데이터
const ticketEventData = [
  {
    id: 1,
    name: "LOVE IN SEOUL",
    date: "오늘 12:00",
    type: "일반예매",
    img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
  },
  {
    id: 2,
    name: "찰리푸스 내한공연",
    date: "오늘 12:00",
    type: "추가 좌석 티켓오픈",
    img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
  },
];

// 초기 데이터 삽입
const seedTicketEventData = async (req, res) => {
  try {
    console.log("기존 데이터를 삭제 중...");
    await TicketEvent.deleteMany({});
    console.log("새 데이터를 삽입 중...");
    const inserted = await TicketEvent.insertMany(ticketEventData);
    console.log("삽입된 데이터:", inserted);
    res
      .status(201)
      .json({
        message: "TicketEvent 데이터가 성공적으로 추가되었습니다!",
        inserted,
      });
  } catch (error) {
    console.error("TicketEvent 데이터 추가 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "TicketEvent 데이터 추가 중 오류 발생",
        error: error.message,
      });
  }
};

// 전체 TicketEvent 데이터 조회
const getAllTicketEvents = async (req, res) => {
  try {
    const ticketEvents = await TicketEvent.find();
    res.status(200).json(ticketEvents);
  } catch (error) {
    console.error("TicketEvent 데이터 조회 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "TicketEvent 데이터 조회 중 오류 발생",
        error: error.message,
      });
  }
};

export { seedTicketEventData, getAllTicketEvents };
