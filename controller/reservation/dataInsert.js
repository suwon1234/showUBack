


// import Like from "../../models/reservation/likeSchema.js";

// const likeData = [
//   {
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     spaceId: mongoose.Types.ObjectId("6777b14b45bae57603a94a02"), // 삽입된 Space ObjectId-1
//     showId: null,
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: mongoose.Types.ObjectId("6777b14b45bae57603a94a03"), // 삽입된 Space ObjectId-2
//     showId: null,
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: null,
//     showId: mongoose.Types.ObjectId("66777b14b45bae57603a94a08"), // 삽입된 Show ObjectId-1
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: null,
//     showId: mongoose.Types.ObjectId("6777b14b45bae57603a94a0f"), // 삽입된 Show ObjectId-2
//     createdAt: new Date().toISOString(),
//   },
// ];

// import Reservation from "../../models/reservation/reservationSchema.js";
// import { format, addDays } from "date-fns";

// const now = new Date();
// const reservationData = [
//   {
//     id: 1,
//     spaceId: mongoose.Types.ObjectId("6777b14b45bae57603a94a02"), // 삽입된 Space ObjectId-1
//     showId: null,
//     user: mongoose.Types.ObjectId("677630ae686ab95419a5a1dc"), // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 1), "yyyy-MM-dd"), // 1일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(10, 0)), "HH:mm:ss"), // 10:00 AM
//     totalAmount: 300000, // 예시 총 금액
//     discountsApplied: ["Early Bird Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
//   {
//     id: 2,
//     spaceId: mongoose.Types.ObjectId("6777b14b45bae57603a94a03"), // 삽입된 Space ObjectId-2
//     showId: null,
//     user: mongoose.Types.ObjectId("677630ae686ab95419a5a1dc"), // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 2), "yyyy-MM-dd"), // 2일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(14, 0)), "HH:mm:ss"), // 2:00 PM
//     totalAmount: 450000, // 예시 총 금액
//     discountsApplied: ["Member Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
//   {
//     id: 3,
//     spaceId: null,
//     showId: mongoose.Types.ObjectId("66777b14b45bae57603a94a08"), // 삽입된 Show ObjectId-1
//     user: mongoose.Types.ObjectId("677630ae686ab95419a5a1dc"), // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 3), "yyyy-MM-dd"), // 3일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(18, 0)), "HH:mm:ss"), // 6:00 PM
//     totalAmount: 80000, // 예시 총 금액
//     discountsApplied: ["Holiday Special"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
//   {
//     id: 4,
//     spaceId: null,
//     showId: mongoose.Types.ObjectId("6777b14b45bae57603a94a0f"), // 삽입된 Show ObjectId-2
//     user: mongoose.Types.ObjectId("677630ae686ab95419a5a1dc"), // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 4), "yyyy-MM-dd"), // 4일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(17, 0)), "HH:mm:ss"), // 5:00 PM
//     totalAmount: 95000, // 예시 총 금액
//     discountsApplied: ["Student Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
// ];



