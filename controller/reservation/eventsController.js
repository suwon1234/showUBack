import TicketEvent from "../../models/reservation/ticketEventSchema.js";
import Show from "../../models/reservation/showSchema.js";
import Space from "../../models/reservation/spaceSchema.js";

// 특정 티켓 이벤트 가져오기
export const getTicketEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await TicketEvent.findById(id);
    if (!event) {
      return res.status(404).json({ message: "이벤트를 찾을 수 없습니다." });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("티켓 이벤트를 가져오는 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "티켓 이벤트를 가져오는 중 오류 발생",
        error: error.message,
      });
  }
};

// 모든 티켓 이벤트 가져오기
export const getAllTicketEvents = async (req, res) => {
  try {
    const ticketEvents = await TicketEvent.find();
    res.status(200).json(ticketEvents);
  } catch (error) {
    console.error("티켓 이벤트를 가져오는 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "티켓 이벤트를 가져오는 중 오류 발생",
        error: error.message,
      });
  }
};

// 모든 공연 가져오기
export const getAllShows = async (req, res) => {
  try {
    const shows = await Show.find();
    res.status(200).json(shows);
  } catch (error) {
    console.error("공연 데이터를 가져오는 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "공연 데이터를 가져오는 중 오류 발생",
        error: error.message,
      });
  }
};

// 모든 공간 데이터 가져오기
export const getAllSpaces = async (req, res) => {
  try {
    const spaces = await Space.find();
    res.status(200).json(spaces);
  } catch (error) {
    console.error("공간 데이터를 가져오는 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "공간 데이터를 가져오는 중 오류 발생",
        error: error.message,
      });
  }
};