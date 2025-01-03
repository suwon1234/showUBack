import connect from '../connect/connect.js'; 
import Option from './shop/optionSchema.js'
import Md from './shop/mdSchema.js';
import Auction from './shop/auctionSchema.js'
import Community from "./community/communitySchema.js"
import VodShowuVideo from "./vod/vodShowuVideo.js"
import ShowuVideo from './vod/showuVideoSchema.js';
import Space from './reservation/spaceSchema.js'
import Show from './reservation/showSchema.js'
import Lesson from './showu/lessonSchema.js'
import Team from './showu/teamSchema.js'
import Like from './reservation/likeSchema.js';
import Reservation from './reservation/reservationSchema.js';
import { format, addDays } from "date-fns";
import mongoose from 'mongoose';
import lessonSchema from './showu/lessonSchema.js';

connect()

// await .deleteMany()

// const communityData = await Community.create(
//   {
//     UserId: "677630ae686ab95419a5a1dc",  // 더미 데이터용 아이디 회원 가입된 아이디로 강제 부여
//     Writefile: "-",
//     title: "타이틀1",
//     category: "뮤지컬",
//     description: "설명1",
//     content: "내용1",
//     imageUrl: "/images/community/musical-1.jpg",
//   },
//   {
//     UserId: "677630ae686ab95419a5a1dc",
//     Writefile: "-",
//     title: "타이틀2",
//     description: "설명2",
//     category: "공연",
//     content: "내용2",
//     imageUrl: "/images/community/show-1.jpg",
//   },
//   {
//     UserId: "677630ae686ab95419a5a1dc",
//     Writefile: "-",
//     title: "타이틀3",
//     description: "설명3",
//     content: "내용3",
//     category: "밴드",
//     imageUrl: "/images/community/band-1.jpg",
//   },
//   {
//     UserId: "677630ae686ab95419a5a1dc",
//     Writefile: "-",
//     title: "타이틀4",
//     description: "설명4",
//     content: "내용4",
//     category: "영화",
//     imageUrl: "/images/community/movie-1.jpg",
//   },
//   {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀5",
//       description: "설명5",
//       content: "내용5",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀6",
//       description: "설명6",
//       content: "내용6",
//       category: "연극",
//       imageUrl: "/images/community/theater-1.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀7",
//       description: "설명7",
//       content: "내용7",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-3.jpg"
//     },
//     {
//       UserId:"677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀8",
//       description: "설명8",
//       content: "내용8",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-4.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀9",
//       description: "설명9",
//       content: "내용9",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-5.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀10",
//       description: "설명",
//       content: "내용",
//       category: "연극",
//       imageUrl: "/images/community/theater-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀11",
//       description: "설명",
//       content: "내용",
//       category: "연극",
//       imageUrl: "/images/community/theater-3.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀12",
//       description: "설명",
//       content: "내용",
//       category: "영화",
//       imageUrl: "/images/community/movie-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀13",
//       description: "설명",
//       content : "내용",
//       category: "공연",
//       imageUrl: "/images/community/show-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀14",
//       description: "설명",
//       content: "내용",
//       category: "공연",
//       imageUrl: "/images/community/show-3.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀15",
//       description: "설명",
//       content: "내용",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-6.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀16",
//       description: "설명",
//       content: "내용",
//       category: "영화",
//       imageUrl: "/images/community/movie-3.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀17",
//       description: "설명",
//       content: "내용",
//       category: "밴드",
//       imageUrl: "/images/community/band-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀18",
//       description: "설명",
//       content: "내용",
//       category: "공연",
//       imageUrl: "/images/community/show-4.jpg"
//     },
    
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀19",
//       description: "설명",
//       content: "내용",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-7.jpg"
//     },    
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀20",
//       description: "설명",
//       content: "내용",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-8.jpg"
//     },  
//   )


// // 뉴스 메인
// const newsData = [
//   {
//     title: "뉴스 타이틀1",
//     category: "뮤지컬",
//     description: "뉴스 설명1",
//     imageUrl: "/images/news/musical-1.jpg",
//   },
//   {
//     title: "뉴스 타이틀2",
//     category: "뮤지컬",
//     description: "뉴스 설명2",
//     imageUrl: "/images/news/musical-2.jpg",
//   },
//   {
//     title: "뉴스 타이틀3",
//     category: "영화",
//     description: "뉴스 설명3",
//     imageUrl: "/images/news/movie-1.jpg",
//   },
//   {
//     title: "뉴스 타이틀4",
//     category: "밴드",
//     description: "뉴스 설명4",
//     imageUrl: "/images/news/band-1.jpg"
//   },
//   {
//     title: "뉴스 타이틀5",
//     category: "뮤지컬",
//     description: "뉴스 설명5",
//     imageUrl: "/images/news/musical-3.jpg"
//   },
//   {
//     title: "뉴스 타이틀6",
//     category: "연극",
//     description: "뉴스 설명6",
//     imageUrl: "/images/news/theater-1.jpg"
//   },
//   {
//     title: "뉴스 타이틀7",
//     category: "영화",
//     description: "뉴스 설명7",
//     imageUrl: "/images/news/movie-2.jpg"
//   },
//   {
//     title: "뉴스 타이틀8",
//     category: "밴드",
//     description: "뉴스 설명8",
//     imageUrl: "/images/news/band-2.jpg"
//   },
//   {
//     title: "뉴스 타이틀9",
//     category: "영화",
//     description: "뉴스 설명9",
//     imageUrl: "/images/news/movie-3.jpg"
//   },
//   {
//     title: "뉴스 타이틀10",
//     category: "뮤지컬",
//     description: "뉴스 설명10",
//     imageUrl: "/images/news/musical-4.jpg"
//   },
//   {
//     title: "뉴스 타이틀11",
//     category: "공연",
//     description: "뉴스 설명11",
//     imageUrl: "/images/news/show-1.jpg"
//   },
//   {
//     title: "뉴스 타이틀12",
//     category: "공연",
//     description: "뉴스 설명12",
//     imageUrl: "/images/news/show-2.jpg" 
//   },
//   {
//     title: "뉴스 타이틀13",
//     category: "밴드",
//     description: "뉴스 설명13",
//     imageUrl: "/images/news/band-3.jpg"
//   },
//   {
//     title: "뉴스 타이틀14",
//     category: "뮤지컬",
//     description: "뉴스 설명14",
//     imageUrl: "/images/news/musical-5.jpg" 
//   },
//   {
//     title: "뉴스 타이틀15",
//     category: "뮤지컬",
//     description: "뉴스 설명15",
//     imageUrl: "/images/news/musical-7.jpg"
//   },
//   {
//     title: "뉴스 타이틀16",
//     category: "공연",
//     description: "뉴스 설명16",
//     imageUrl: "/images/news/show-3.jpg"
//   },
//   {
//     title: "뉴스 타이틀17",
//     category: "공연",
//     description: "뉴스 설명17",
//     imageUrl: "/images/news/show-4.jpg"
//   },
//   {
//     title: "뉴스 타이틀18",
//     category: "뮤지컬",
//     description: "뉴스 설명18",
//     imageUrl: "/images/news/musical-8.jpg"
//   },
//   {
//     title: "뉴스 타이틀19",
//     category: "뮤지컬",
//     description: "뉴스 설명19",
//     imageUrl: "/images/news/musical-9.jpg"
//   },
//   {
//     title: "뉴스 타이틀20",
//     category: "연극",
//     description: "뉴스 설명20",
//     imageUrl: "/images/news/theater-2.jpg"
//   },
// ];


// // 오디션 메인
// const auditionData = await Audition.create(
//   {
//     category: "뮤지컬",
//     image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <팬텀> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     image: 'https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg',
//     title: '문화감각',
//     description: '뮤지컬 <루카스> 오디션',
//   },
//   {
//     image: '뮤지컬',
//     image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <베르사유의 장미> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfODQg%2FMDAxNzA4MDg4OTY2NjA1.SZc_0aS5hlTWev8bbGlKHyhpQbdzAu7RXevt3nhShmwg.eYho59UUJ3dycnwzQSvF5f4Odcws5F7Lf0QrOOPoujMg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220756%25A3%25DFInstagram.jpg&type=sc960_832',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <웃는남자> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     image: 'https://www.contestkorea.com/admincenter/files/meet/202411282051038432751.jpg',
//     title: '도깨비이엔티',
//     description: '뮤지컬 <로보카 폴리> 오디션',
//   },
//   {
//     category: "연극",
//     image: 'https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg',
//     title: '바다컴퍼니',
//     description: '연극 <너에게로 가는 길> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/8/29/202408292237379944eaee5b7a0ebbfe828efe88f8eaed8e.jpg',
//     title: '신시컴퍼니',
//     description: '뮤지컬 <빌리엘리어트> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <한복 입은 남자> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <마타하리> 오디션',
//   },
//   {
//     category: "연극",
//     image: 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png',
//     title: '서울문화재단',
//     description: '연극 <베를리너> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340',
//     title: 'CJ MUSICAL',
//     description: '뮤지컬 브로드웨이 42번가 오디션',
//   },
//   {
//     id: 12,
//     category: "연극",
//     image: 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e',
//     title: '예술의 전당',
//     description: '연극 <햄릿> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     image: 'https://image.newdaily.co.kr/site/data/img/2024/02/15/2024021500021_0.jpg?u=20240215085801',
//     title: '에이콤',
//     description: '뮤지컬 <명성황후> 오디션',
//   },
//   {
//     category: "연극",
//     image: 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg',
//     title: 'comporama',
//     description: '연극<THE CELL> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340',
//     title: 'CJ MUSICAL',
//     description: '뮤지컬 <물랑루즈> 오디션',
//   },
//   {
//     category: "연극",
//     image: 'https://otr.co.kr/wp-content/uploads/mangboard/2024/06/21/F201233_lost_odi.jpg',
//     title: '(주)나인진엔터테인먼트',
//     description: '연극 <로스트> 오디션',
//   },
//   {
//     category: "연극",
//     image: 'https://www.iseensee.com/event/letmein/241010_audition1.jpg',
//     title: '신시컴퍼니',
//     description: '연극 <렛미인> 오디션',
//   },
//   {
//     category: "연극",
//     image: 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg',
//     title: '(주)문컴퍼니',
//     description: '연극 <분홍립스틱> 오디션',
//   },
// )


// // 오디션 인포
// const auditionInfoData = await AuditionInfo.create(
//   {
//     id: 1,
//     image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e528de81bf69222228.jpg',
//     title: "뮤지컬 팬텀 오디션 공고"
//   },
//   {
//     id: 2,
//     image: 'https://www.contestkorea.com/admincenter/files/meet/202402221229383763310.jpg',
//     title: "뮤지컬 루카스 오디션 공고"
//   },
//   {
//     id: 3,
//     image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202402/65c09cb78117d8301721.jpg',
//     title: "뮤지컬 베르사유의 장미 오디션 공고"
//   },
//   {
//     id: 4,
//     image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e528802bf6a4836843.jpg',
//     title: "뮤지컬 웃는남자 오디션"
//   },
//   {
//     id: 5,
//     image: 'https://www.contestkorea.com/admincenter/files/meet/202411282051036809763.jpg',
//     title: "뮤지컬 로보카 폴리 오디션 공고"
//   },
//   {
//     id: 6,
//     image: 'https://www.contestkorea.com/admincenter/files/meet/202412042146563150340.jpg',
//     title: "연극 너에게로 가는 길 오디션 공고"
//   },
//   {
//     id: 7,
//     image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/8/29/202408292237379944eaee5b7a0ebbfe828efe88f8eaed8e.jpg',
//     title: "뮤지컬 빌리엘리어트 오디션 공고"
//   },
//   {
//     id: 8,
//     image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202411/6732e54aaeb154611022.jpeg',
//     title: "뮤지컬 한복 입은 남자 오디션 공고"
//   },
//   {
//     id: 9,
//     image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e56cac780461780827.jpg',
//     title: "뮤지컬 마타하리 오디션 공고"
//   },
//   {
//     id: 10,
//     image: 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png',
//     title: "연극 베를리너 오디션 공고"
//   },
//   {
//     id: 11,
//     image: '',
//     title: "브로드웨이 42번가 오디션 공고"
//   },
//   {
//     id: 12,
//     image: 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e',
//     title: "연극 햄릿 오디션 공고"
//   },
//   {
//     id: 13,
//     image: 'https://postfiles.pstatic.net/MjAyNDAyMTVfMTgz/MDAxNzA3OTgzNTI0MTAz.ftWF9f8NdmxzvKSL3I6h2LlOwSvS7mjIDpR2YPUC0RIg.sagHjKFR5HpI8qPu6KxwUgXtoRG01-OiMnIvki9wWvEg.PNG.immcompany/8.png?type=w3840',
//     title: "뮤지컬 명성황후 아역 오디션 공고"
//   },
//   {
//     id: 14,
//     image: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MjFfMTk4/MDAxNzI2ODc4ODQ1MjYy._jAEpW3QyRYVENYsAZDs0a15uQ1S7M5rwr7nEgBboOMg.5-X7T-D5GLR4NN0argXe_KueBnJbeVIoD44PTWTprWMg.JPEG/F209750_2025_%EC%97%B0%EA%B7%B9_%EB%8D%94%EC%85%80_%EC%98%A4%EB%94%94%EC%85%98_%EA%B3%B5%EA%B3%A0%EB%AC%B8.jpg?type=w1600',
//     title: "연극 the cell 오디션 공고"
//   },
//   {
//     id: 15,
//     image: '',
//     title: "물랑루즈 오디션 공고"
//   },
//   {
//     id: 16,
//     image: 'https://otr.co.kr/wp-content/uploads/mangboard/2024/06/21/F201233_lost_odi.jpg',
//     title: ""
//   },
//   {
//     id: 17,
//     image: 'https://www.iseensee.com/event/letmein/241010_audition1.jpg',
//     title: "연극 렛미인 오디션 공고"
//   },
//   {
//     id: 18,
//     image: 'https://www.contestkorea.com/admincenter/files/meet/202411211101245257434.jpg',
//     title: "연극 분홍립스틱 오디션 공고"
//   },
// )

// MD 옵션
// const basicOption = await Option.create(
//   {
//     optionName: "기본 옵션",
//     additionalPrice: 0 
//   });

// const specialOption = await Option.create(
//   { 
//     optionName: "기본 옵션 + 증정",
//     additionalPrice: 3000 
//   });


// MD 상품
// const mdData = await Md.create(
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 15000, 
//     image: "/images/shop/md/md1.jpg", 
//     imageDetail: "/images/shop/md/md1-1.jpg", 
//     isHearted : "677630ae686ab95419a5a1dc" 
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 금속 마그넷",
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],  
//     price: 13000, 
//     image: "/images/shop/md/md2.jpg", 
//     imageDetail: "/images/shop/md/md2-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 고블렛", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 18000, 
//     image: "/images/shop/md/md3.jpg", 
//     imageDetail: "/images/shop/md/md3-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 키링", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 17000, 
//     image: "/images/shop/md/md4.jpg", 
//     imageDetail: "/images/shop/md/md4-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 배지1", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 11000, 
//     image: "/images/shop/md/md5.jpg", 
//     imageDetail: "/images/shop/md/md5-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 배지2", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 11000, 
//     image: "/images/shop/md/md6.jpg", 
//     imageDetail: "/images/shop/md/md6-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],
//     price: 11000, 
//     image: "/images/shop/md/md7.jpg", 
//     imageDetail: "/images/shop/md/md7-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 스트랩 파우치", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 18000, 
//     image: "/images/shop/md/md8.jpg", 
//     imageDetail: "/images/shop/md/md8-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "2025 캘린더", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000,  
//     image: "/images/shop/md/md9.jpg", 
//     imageDetail: "/images/shop/md/md9-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 금속 마그넷", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 14000, 
//     image: "/images/shop/md/md10.jpg", 
//     imageDetail: "/images/shop/md/md10-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 배지1", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000, 
//     image: "/images/shop/md/md11.jpg", 
//     imageDetail: "/images/shop/md/md11-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 배지2", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],
//     price: 12000,  
//     image: "/images/shop/md/md12.jpg", 
//     imageDetail: "/images/shop/md/md12-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 배지3", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000,  
//     image: "/images/shop/md/md13.jpg", 
//     imageDetail: "/images/shop/md/md13-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 에코백", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 13000, 
//     image: "/images/shop/md/md14.jpg", 
//     imageDetail: "/images/shop/md/md14-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 메시지 엽서", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 10000, 
//     image: "/images/shop/md/md15.jpg", 
//     imageDetail: "/images/shop/md/md15-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 유리컵", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000,  
//     image: "/images/shop/md/md16.jpg", 
//     imageDetail: "/images/shop/md/md16-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 대본집", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 13000,  
//     image: "/images/shop/md/md17.jpg", 
//     imageDetail: "/images/shop/md/md17-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 프로그램북", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000, 
//     image: "/images/shop/md/md18.jpg", 
//     imageDetail: "/images/shop/md/md18-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 거울 그립톡", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 13000, 
//     image: "/images/shop/md/md19.jpg", 
//     imageDetail: "/images/shop/md/md19-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 마스킹 테이프", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 6000,  
//     image: "/images/shop/md/md20.jpg", 
//     imageDetail: "/images/shop/md/md20-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 글리터 코스터", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 17000,  
//     image: "/images/shop/md/md21.jpg", 
//     imageDetail: "/images/shop/md/md21-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 미니 티켓북", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 18000,  
//     image: "/images/shop/md/md22.jpg", 
//     imageDetail: "/images/shop/md/md22-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 금속 북마크", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 9000, 
//     image: "/images/shop/md/md23.jpg", 
//     imageDetail: "/images/shop/md/md23-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 접이식 우산", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 27000, 
//     image: "/images/shop/md/md24.jpg", 
//     imageDetail: "/images/shop/md/md24-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 엽서 (고은성VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 5000,  
//     image: "/images/shop/md/md25.jpg", 
//     imageDetail: "/images/shop/md/md25-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 엽서 (이해준VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 5000,  
//     image: "/images/shop/md/md26.jpg", 
//     imageDetail: "/images/shop/md/md26-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 엽서 (카이VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 5000,  
//     image: "/images/shop/md/md27.jpg", 
//     imageDetail: "/images/shop/md/md27-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (고은성VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000,  
//     image: "/images/shop/md/md28.jpg", 
//     imageDetail: "/images/shop/md/md28-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (이해준VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000, 
//     image: "/images/shop/md/md29.jpg", 
//     imageDetail: "/images/shop/md/md29-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (카이VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000, 
//     image: "/images/shop/md/md30.jpg", 
//     imageDetail: "/images/shop/md/md30-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
// )


// 경매 상품
// const auctionData = await Auction.create(
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 프로그램북 스페셜 에디션",
//     auctionId: "111ABC",
//     time: 0,
//     count: 60,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명1",
//     image: "/images/shop/auction/auction1.jpg",
//     imageDetail: "/images/shop/auction/auction1-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 금속 마그넷",
//     auctionId: "112ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명2",
//     image: "/images/shop/auction/auction2.jpg",
//     imageDetail: "/images/shop/auction/auction2-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   {
//     category: "연극",
//     auctionName: "베르사유의 장미 고블렛",
//     auctionId: "113ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명3",
//     image: "/images/shop/auction/auction3.jpg",
//     imageDetail: "/images/shop/auction/auction3-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 키링",
//     auctionId: "114ABC",
//     time: 0,
//     count: 10,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명4",
//     image: "/images/shop/auction/auction4.jpg",
//     imageDetail: "/images/shop/auction/auction4-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 배지1",
//     auctionId: "115ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명5",
//     image: "/images/shop/auction/auction5.jpg",
//     imageDetail: "/images/shop/auction/auction5-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 배지2",
//     auctionId: "116ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명6",
//     image: "/images/shop/auction/auction6.jpg",
//     imageDetail: "/images/shop/auction/auction6-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 배지3",
//     auctionId: "117ABC",
//     time: 0,
//     count: 60,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명7",
//     image: "/images/shop/auction/auction7.jpg",
//     imageDetail: "/images/shop/auction/auction7-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 스트랩 파우치",
//     auctionId: "118ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명8",
//     image: "/images/shop/auction/auction8.jpg",
//     imageDetail: "/images/shop/auction/auction8-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "2025 캘린더",
//     auctionId: "119ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명9",
//     image: "/images/shop/auction/auction9.jpg",
//     imageDetail: "/images/shop/auction/auction9-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 금속 마그넷",
//     auctionId: "120ABC",
//     time: 0,
//     count: 60,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명10",
//     image: "/images/shop/auction/auction10.jpg",
//     imageDetail: "/images/shop/auction/auction10-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 배지1",
//     auctionId: "121ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명11",
//     image: "/images/shop/auction/auction11.jpg",
//     imageDetail: "/images/shop/auction/auction11-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 배지2",
//     auctionId: "123ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명12",
//     image: "/images/shop/auction/auction12.jpg",
//     imageDetail: "/images/shop/auction/auction12-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 배지3",
//     auctionId: "124ABC",
//     time: 0,
//     count: 60,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명13",
//     image: "/images/shop/auction/auction13.jpg",
//     imageDetail: "/images/shop/auction/auction13-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 에코백",
//     auctionId: "125ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명14",
//     image: "/images/shop/auction/auction14.jpg",
//     imageDetail: "/images/shop/auction/auction14-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 메시지 엽서",
//     auctionId: "126ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명15",
//     image: "/images/shop/auction/auction15.jpg",
//     imageDetail: "/images/shop/auction/auction15-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 유리컵",
//     auctionId: "127ABC",
//     time: 0,
//     count: 60,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명16",
//     image: "/images/shop/auction/auction16.jpg",
//     imageDetail: "/images/shop/auction/auction16-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 대본집",
//     auctionId: "128ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명17",
//     image: "/images/shop/auction/auction17.jpg",
//     imageDetail: "/images/shop/auction/auction17-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 프로그램북",
//     auctionId: "129ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명18",
//     image: "/images/shop/auction/auction18.jpg",
//     imageDetail: "/images/shop/auction/auction18-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 거울 그립톡",
//     auctionId: "130ABC",
//     time: 0,
//     count: 60,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명19",
//     image: "/images/shop/auction/auction19.jpg",
//     imageDetail: "/images/shop/auction/auction19-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 마스킹 테이프",
//     auctionId: "131ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명20",
//     image: "/images/shop/auction/auction20.jpg",
//     imageDetail: "/images/shop/auction/auction20-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 글리터 코스터",
//     auctionId: "132ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명21",
//     image: "/images/shop/auction/auction21.jpg",
//     imageDetail: "/images/shop/auction/auction21-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 미니 티켓북",
//     auctionId: "133ABC",
//     time: 0,
//     count: 60,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명22",
//     image: "/images/shop/auction/auction22.jpg",
//     imageDetail: "/images/shop/auction/auction22-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 금속 북마크",
//     auctionId: "134ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명23",
//     image: "/images/shop/auction/auction23.jpg",
//     imageDetail: "/images/shop/auction/auction23-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 접이식 우산",
//     auctionId: "135ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명24",
//     image: "/images/shop/auction/auction24.jpg",
//     imageDetail: "/images/shop/auction/auction24-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 엽서 (고은성VER.)",
//     auctionId: "136ABC",
//     time: 0,
//     count: 60,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명25",
//     image: "/images/shop/auction/auction25.jpg",
//     imageDetail: "/images/shop/auction/auction25-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 엽서 (이해준VER.)",
//     auctionId: "137ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명26",
//     image: "/images/shop/auction/auction26.jpg",
//     imageDetail: "/images/shop/auction/auction26-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 엽서 (카이VER.)",
//     auctionId: "138ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명27",
//     image: "/images/shop/auction/auction27.jpg",
//     imageDetail: "/images/shop/auction/auction27-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (고은성VER.)",
//     auctionId: "139ABC",
//     time: 0,
//     count: 60,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명28",
//     image: "/images/shop/auction/auction28.jpg",
//     imageDetail: "/images/shop/auction/auction28-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (이해준VER.)",
//     auctionId: "140ABC",
//     time: 0,
//     count: 88,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명29",
//     image: "/images/shop/auction/auction29.jpg",
//     imageDetail: "/images/shop/auction/auction29-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (카이VER.)",
//     auctionId: "218ABC",
//     time: 0,
//     count: 23,
//     unit: 1000,
//     bid: 0,
//     finalPrice: 0,
//     description: "상세 설명30",
//     image: "/images/shop/auction/auction30.jpg",
//     imageDetail: "/images/shop/auction/auction30-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
// )



// const spaceData = await Space.create(
//   {
//     id: 1,
//     name: "Conference Room A",
//     location: "Building 1, Floor 3",
//     price: "100,000원",
//     pricePerHour: 100000,
//     pricePerDay: 800000,
//     img: "/images/reservation/space1.jpg",
//     descriptions: [
//       "면적 : 399.00 ㎡ ≒ 120.7 평",
//       "가로 : 21.00 m",
//       "세로 : 19.00 m",
//       "천정높이 : 5.50m",
//       "최대인원 : 172명",
//     ],
//     amenities: ["WiFi", "주차 공간", "프로젝터", "음향 시스템"],
//     icons: [
//       {
//         name: "냉방기",
//         icon: "/images/reservation/space1-6.svg",
//       },
//       {
//         name: "난방기",
//         icon: "/images/reservation/space1-7.svg",
//       },
//       {
//         name: "음향 시스템",
//         icon: "/images/reservation/space1-8.svg",
//       },
//       {
//         name: "프로젝터",
//         icon: "/images/reservation/space1-9.svg",
//       },
//     ],
//     additionalImages: [
//       "/images/reservation/space1-2.jpg",
//       "/images/reservation/space1-3.jpg",
//       "/images/reservation/space1-4.jpg",
//       "/images/reservation/space1-5.jpg",
//     ],
//   },
//   {
//     id: 2,
//     name: "Event Hall B",
//     location: "Building 2, Floor 1",
//     price: "200,000원",
//     pricePerHour: 200000,
//     pricePerDay: 1600000,
//     img: "/images/reservation/space2.jpg",
//     descriptions: [
//       "면적 : 399.00 ㎡ ≒ 120.7 평",
//       "가로 : 18.00 m",
//       "세로 : 16.00 m",
//       "천정높이 : 5.80m",
//       "최대인원 : 150명",
//     ],
//     amenities: ["Wi-Fi", "Sound System", "Stage"],
//     icons: [
//       {
//         name: "냉방기",
//         icon: "/images/reservation/space1-6.svg",
//       },
//       {
//         name: "난방기",
//         icon: "/images/reservation/space1-7.svg",
//       },
//       {
//         name: "음향 시스템",
//         icon: "/images/reservation/space1-8.svg",
//       },
//       {
//         name: "프로젝터",
//         icon: "/images/reservation/space1-9.svg",
//       },
//     ],
//     additionalImages: [
//       "/images/reservation/space2-2.jpg",
//       "/images/reservation/space2-3.jpg",
//       "/images/reservation/space2-4.jpg",
//       "/images/reservation/space2-5.jpg",
//     ],
//   },
// )


// const showData = await Show.create(
//   {
//     id: 1,
//     name: "뮤지컬 <시라노>",
//     venue: "디큐브 링크 아트센터",
//     dates: "2024.10.15 - 2025.1.5",
//     duration: "120분",
//     grade: "13세 이상",
//     price: {
//       R: "77,000원",
//       S: "130,000원",
//     },
//     type: "일반예매",
//     discounts: [
//       "PAYCO VIP 회원 할인 10% 할인",
//       "5차 조기예매 할인 25% 할인",
//       "마티네 공연 할인 30% 할인",
//       "재관람(1인1매, 본인 기준으로 티켓소지시) 25% 할인",
//       "S석 청소년할인(본인, 생년월일 증명서류 지참) 30% 할인",
//     ],
//     img: "/images/reservation/show1.gif",
//     detailImage: "/images/reservation/show1-1.jpg",
//     cast: [
//       {
//         name: "조형균",
//         img: "/images/reservation/show1-2.gif",
//       },
//       {
//         name: "최재림",
//         img: "/images/reservation/show1-3.gif",
//       },
//       {
//         name: "고은성",
//         img: "/images/reservation/show1-4.gif",
//       },
//       {
//         name: "나하나",
//         img: "/images/reservation/show1-5.gif",
//       },
//       {
//         name: "김수연",
//         img: "/images/reservation/show1-6.gif",
//       },
//       {
//         name: "이지수",
//         img: "/images/reservation/show1-7.gif",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "뮤지컬 <웃는남자>",
//     venue: "세종문화회관 대극장",
//     dates: "2024.12.1 - 2025.2.28",
//     duration: "150분",
//     grade: "15세 이상",
//     price: {
//       R: "110,000원",
//       S: "170,000원",
//     },
//     type: "일반예매",
//     discounts: [
//       "showU 회원 할인 15% 할인",
//       "조기예매 할인 20% 할인",
//       "학생 할인 30% 할인",
//     ],
//     img: "/images/reservation/show2.gif",
//     detailImage: "/images/reservation/show2-1.jpg",
//     cast: [
//       {
//         name: "박은태",
//         img: "/images/reservation/show2-2.gif",
//       },
//       {
//         name: "이석훈",
//         img: "/images/reservation/show2-3.gif",
//       },
//       {
//         name: "규현",
//         img: "/images/reservation/show2-4.gif",
//       },
//       {
//         name: "도영",
//         img: "/images/reservation/show2-5.gif",
//       },
//       {
//         name: "서범석",
//         img: "/images/reservation/show2-6.jpg",
//       },
//       {
//         name: "민영기",
//         img: "/images/reservation/show2-7.jpg",
//       },
//     ],
//   },
// )

// 찜 - likeSchema.js
// const likeData = await Like.create(
//   {
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     spaceId: "6777b14b45bae57603a94a02", // 삽입된 Space ObjectId-1
//     showId: null,
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: "6777b14b45bae57603a94a03", // 삽입된 Space ObjectId-2
//     showId: null,
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: null,
//     showId: "6777b14b45bae57603a94a08", // 삽입된 Show ObjectId-1
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: null,
//     showId: "6777b14b45bae57603a94a0f", // 삽입된 Show ObjectId-2
//     createdAt: new Date().toISOString(),
//   },
// );

// 예약 - reservationSchema.js
// const now = new Date();
// const reservationData = await Reservation.create(
//   {
//     id: 1,
//     spaceId: "6777b14b45bae57603a94a02", // 삽입된 Space ObjectId-1
//     showId: null,
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 1), "yyyy-MM-dd"), // 1일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(10, 0)), "HH:mm:ss"), // 10:00 AM
//     totalAmount: 300000, // 예시 총 금액
//     discountsApplied: ["Early Bird Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
//   {
//     id: 2,
//     spaceId: "6777b14b45bae57603a94a03", // 삽입된 Space ObjectId-2
//     showId: null,
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
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
//     showId: "6777b14b45bae57603a94a08", // 삽입된 Show ObjectId-1
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
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
//     showId: "6777b14b45bae57603a94a0f", // 삽입된 Show ObjectId-2
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 4), "yyyy-MM-dd"), // 4일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(17, 0)), "HH:mm:ss"), // 5:00 PM
//     totalAmount: 95000, // 예시 총 금액
//     discountsApplied: ["Student Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
// )




//vodShowuVideo
// const vodData = await vodShowuVideo.create(
//   {
//     title : "범죄도시",
//     videoUrl : "/video/testplay.mp4",
//     description : "엄청난 괴력을 자랑하는 형사 마석도와 반장 전일만은 도시를 휘어잡은 신흥범죄조직의 보스 장첸을 비롯한 도시의 범죄조직을 일망타진할 작전을 세우기 시작한다. 형사들과 주민들의 합동작전과 더불어 마석도와 장첸의 일대일 격돌이 펼쳐진다.",
//     time : "121",
//     genre :"범죄",
//     year : "2017",
//     mainImage : "/images/movie/moive3.jpg",
//     likes : 1,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "부산행",
//     videoUrl : "/video/testplay.mp4",
//     description : "치명적인 바이러스로 인해 긴급재난대피령이 선포된 한국, 현재 유일하게 안전한 도시 부산까지 가는 열차 안에서 각자 사연을 가진 이들이 사랑하는 사람을 좀비와 바이러스로부터 지키기 위한 싸움을 시작하고, 예기치 못한 위험을 마주하게 된다.",
//     time : "118",
//     genre :"액션",
//     year : "2016",
//     mainImage : "/images/movie/moive4.jpg",
//     likes : 1,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "수리남",
//     videoUrl : "/video/testplay.mp4",
//     description : "남미 국가 수리남을 장악한 무소불위의 마약 대부로 인해 누명을 쓴 한 민간인이 국정원의 비밀 임무를 수락하며 벌어지는 이야기를 그린 영화",
//     time : "120",
//     genre :"범죄",
//     year : "2017",
//     mainImage : "/images/movie/moive5.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "스마일",
//     videoUrl : "/video/testplay.mp4",
//     description : "정신과 의사 로즈는 연이어 자살하는 환자들에게서 공통점을 발견한다. 공포에 질려가는 로즈는 이 비슷한 현상을 비껴간 생존자로부터 저주를 풀기 위한 끔찍한 방법을 듣게 된다.",
//     time : "115",
//     genre :"공포",
//     year : "2022",
//     mainImage : "/images/movie/moive6.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "엑시트",
//     videoUrl : "/video/testplay.mp4",
//     description : "산악 동아리 에이스였지만 대학 졸업 후 계속 백수인 용남은 어머니의 칠순 잔치에서 연회장 직원으로 일하는 산악 동아리 후배 의주를 마주친다. 흥겨운 잔치가 한창일 때, 건물에서 연기가 피어오르고 재난상황이 시작된다. 용남과 의주는 함께 산악 동아리에서 익힌 지식과 기술을 총동원해 모든 사람들을 대피시키며 탈출에 도전한다.",
//     time : "103",
//     genre :"코미디",
//     year : "2019",
//     mainImage : "/images/movie/moive7.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "영웅",
//     videoUrl : "/video/testplay.mp4",
//     description : "대한 제국의 의병 대장 안중근은 하얼빈역에서 조선 침략의 원흉인 이토 히로부미를 향해 주저 없이 방아쇠를 당기지만, 현장에서 체포되어 일본 법정에 서고 만다.",
//     time : "121",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/movie/moive8.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "오디션",
//     videoUrl : "/video/testplay.mp4",
//     description : "아내를 잃고 실의에 빠진 아오야마는 신붓감을 찾는 오디션을 열게 되고 신비한 여인 아사미를 만나게 된다.",
//     time : "115",
//     genre :"공포",
//     year : "1999",
//     mainImage : "/images/movie/moive9.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "웡카",
//     videoUrl : "/video/testplay.mp4",
//     description : "화려한 업적을 이루기 전의 어린 시절, 모험을 떠난 윌리 웡카가 움파룸파 가족을 만나게 된 이야기가 펼쳐진다.",
//     time : "121",
//     genre :"뮤지컬",
//     year : "2023",
//     mainImage : "/images/movie/moive10.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "10센치",
//     videoUrl : "/video/testplay.mp4",
//     description : "10센치 노래",
//     time : "3",
//     genre :"음악",
//     year : "2023",
//     mainImage : "/images/music/music.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
  
//   {
//     title : "BTS 다이너마이트",
//     videoUrl : "/video/testplay.mp4",
//     description : "<Dynamite>는 밝고 경쾌한 분위기의 디스코 팝(Disco Pop) 장르로, 팬들을 위한 희망의 메시지를 담았다. 코로나19 사태가 야기한 무력감과 허탈감을 이겨낼 '돌파구'로서 방탄소년단은 데뷔 이래 처음으로 영어로 곡을 소화하는 새로운 도전에 나섰다.",
//     time : "3",
//     genre :"음악",
//     year : "2020",
//     mainImage : "/images/music/music2.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
  
//   {
//     title : "아이브 일레븐",
//     videoUrl : "/video/testplay.mp4",
//     description : "'I HAVE = IVE'라는 의미처럼 주체적인 소녀들의 당당한 매력을 담았다. 이는 성장형 그룹의 스토리가 아닌 완성형 그룹의 자신감을 뜻한다.",
//     time : "3",
//     genre :"음악",
//     year : "2021",
//     mainImage : "/images/music/music3.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
  
//   {
//     title : "에이티즈",
//     videoUrl : "/video/testplay.mp4",
//     description : "화려한 업적을 이루기 전의 어린 시절, 모험을 떠난 윌리 웡카가 움파룸파 가족을 만나게 된 이야기가 펼쳐진다.",
//     time : "3",
//     genre :"음악",
//     year : "2024",
//     mainImage : "/images/music/music4.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
  
//   {
//     title : "ITZY Boys like you",
//     videoUrl : "/video/testplay.mp4",
//     description : "Boys Like You'는 그룹 특유의 당찬 에너지를 가득 실은 노래다. 솔직하고 거침없는 가사에는 배신감을 줬던 성숙하지 못한 상대방에게 다시는 너 같은 Boy에게는 빠지지 않겠다는 경고의 메시지를 담았다.",
//     time : "3",
//     genre :"음악",
//     year : "2022",
//     mainImage : "/images/music/music5.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "다비치",
//     videoUrl : "/video/testplay.mp4",
//     description : "화려한 업적을 이루기 전의 어린 시절, 모험을 떠난 윌리 웡카가 움파룸파 가족을 만나게 된 이야기가 펼쳐진다.",
//     time : "3",
//     genre :"음악",
//     year : "2022",
//     mainImage : "/images/music/music6.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀1",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명1",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-1.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀2",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명2",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-2.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀3",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명3",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-3.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀4",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명4",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-4.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀5",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명5",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-5.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀6",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명6",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-6.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀7",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명7",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-7.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀8",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명8",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-8.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   }
  
// )
// console.log(vodData)

// const showuvodData = await ShowuVideo.create(
//   {
//     uploaduser : "677630ae686ab95419a5a1dc",
//     title : "바이올린의 신",
//     detail : "신들린 바이올린 연주",
//     category : "음악",
//     themnail : "/images/themnail/themnail1.jpg",
//     videoUrl : "/video/video1",
//     videoelement : 0,
//     videoelement2 : 0,
//     review : "없음",
//     openclose : 0
//   },
//   {
//     uploaduser : "677630ae686ab95419a5a1dc",
//     title : "바이올린의 신2",
//     detail : "신들린 바이올린 연주2",
//     category : "음악",
//     themnail : "/images/themnail/themnail2.jpg",
//     videoUrl : "/video/video2",
//     videoelement : 0,
//     videoelement2 : 0,
//     review : "없음",
//     openclose : 0
//   },
// )

const lessonListData = await Lesson.create(
  {
      id : 1,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
      lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
      callTime : "오전12시 - 오전12시", 
      category : "연기", 
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "서초구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 서초구", 
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 14년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },    
              }, 
          education : {
              educationTitle : "중앙대학교 첨단영상대학원",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "영화 제작"
          } //학력
      },

  portfolios : {
      portfolio1 : {
              index : 1,
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio2 :{
              index : 2, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
              },
      portfolio3 :{
              index : 3, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio4 :{
              index : 4, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
          },

  medias : {
media1 :  {
          index : 1,
          mediaURL : 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg'
        },
media2 :  {
          index : 2,
          mediaURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg"
        },
media3 :  {
          index : 3,
          mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
        },
       },
        

      etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
      },
      count : 1000, //조회수
      likeCount : 200, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",

  },
  {
      id : 2,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg'// 포트폴리오 
                  },
          portfolio2 :{
                  index : 2, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg' // 포트폴리오 
                  },
          portfolio3 :{
                  index : 3, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg' // 포트폴리오 
                  },
          portfolio4 :{
                  index : 4, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340' // 포트폴리오 
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
                  },
          media2 :  {
                  index : 2,
                  mediaURL :'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg'
          },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
                  },
      },

       etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
},

      count : 7777, 
      likeCount : 157, 
      likeUser : "677630ae686ab95419a5a1dc", 
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",
  },
  {
      id : 3,
      userId :"677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "광진구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 광진구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg' // 포트폴리오 
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg' // 포트폴리오 
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg'// 포트폴리오 
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          media2 :  {
                  index : 2,
                  mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg'
                  },
      },

       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
      },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",

  },
  {
      id : 4,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 

                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg',
                  index : 3, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg' // 포트폴리오 
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
                  },
              },

      medias : 
      {media1 :  {
              index : 1,
              mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
              },
      media2 :  {
              index : 2,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
              },
      media3 :  {
              index : 3,
              mediaURL : 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg'
     },
  },
       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
      },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",

  },
  {
      id : 5,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg',
      lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
      callTime : "오전12시 - 오전12시", 
      category : "연기", 
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "서초구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 서초구", 
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 14년", //이력
          recode : 

                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },    
              },
          education : {
              educationTitle : "중앙대학교 첨단영상대학원",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "영화 제작"
          } //학력
      },

  portfolios : {
      portfolio1 : {
              index : 1,
              portfolioTitle : "매채 연기레슨",
              portfolioURL : 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg'
              },
      portfolio2 :{
              index : 2, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio3 :{
              index : 3, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio4 :{
              index : 4, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
          },

  medias : {
media1 :  {
          index : 1,
          mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
        },
media2 :  {
          index : 2,
          mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
           },
media3 :  {
          index : 3,
          mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
        },
       },
        

      etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
      },
      count : 1000, //조회수
      likeCount : 200, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",

  },
  {
      id : 6,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
                  },
          portfolio2 :{
                  index : 2, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832' // 포트폴리오 
                  },
          portfolio3 :{
                  index : 3, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
                  },
          portfolio4 :{
                  index : 4, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832' // 포트폴리오 
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
                  },
          media2 :  {
                  index : 2,
                  mediaURL :'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
                  },
      },

       etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
},

      count : 7777, 
      likeCount : 157, 
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",

  },
  {
      id : 7,
      userId :"677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "광진구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 광진구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg'// 포트폴리오 
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL :'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg'
                  },
          media2 :  {
                  index : 2,
                  mediaURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg"
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
      },

       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
  },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",

  },
  {
      id : 8,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg'
          },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
              },

      medias : 
      {media1 :  {
              index : 1,
              mediaURL : 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg'
              },
      media2 :  {
              index : 2,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
              },
      media3 :  {
              index : 3,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
              },
     },
       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
      },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",

  },
  {
      id : 9,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg",
      lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
      callTime : "오전12시 - 오전12시", 
      category : "연기", 
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "서초구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 서초구", 
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 14년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },    
              },
          education : {
              educationTitle : "중앙대학교 첨단영상대학원",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "영화 제작"
          } //학력
      },

  portfolios : {
      portfolio1 : {
              index : 1,
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio2 :{
              index : 2, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio3 :{
              index : 3, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio4 :{
              index : 4, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
          },

  medias : {
media1 :  {
          index : 1,
          mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
        },
media2 :  {
          index : 2,
          mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
        },
media3 :  {
          index : 3,
          mediaURL :'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg'
        },
       },
        

      etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
      },
      count : 1000, //조회수
      likeCount : 200, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",

  },
  {
      id : 10,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
                  },
          portfolio2 :{
                  index : 2, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          portfolio3 :{
                  index : 3, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          portfolio4 :{
                  index : 4, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
                  },
          media2 :  {
                  index : 2,
                  mediaURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg"
                  },
          media3 :  {
                  index : 3,
                  mediaURL :'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
      },

       etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
},

      count : 7777, 
      likeCount : 157, 
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-01-03 17:44:48",
      updateAt : "2025-01-03 17:44:48",

  },
  {
      id : 11,
      userId :"677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "광진구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 광진구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832' 
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg'
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          media2 :  {
                  index : 2,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
      },

       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
  },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 12,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg'
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg'
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
                  },
              },

      medias : 
      {media1 :  {
              index : 1,
              mediaURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg"
              },
      media2 :  {
              index : 2,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
              },
      media3 :  {
              index : 3,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
              },
     },
       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
      },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 13,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail :'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e',
      lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
      callTime : "오전12시 - 오전12시", 
      category : "연기", 
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "서초구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 서초구", 
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 14년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },    
              },
          education : {
              educationTitle : "중앙대학교 첨단영상대학원",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "영화 제작"
          } //학력
      },

  portfolios : {
      portfolio1 : {
              index : 1,
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio2 :{
              index : 2, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio3 :{
              index : 3, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio4 :{
              index : 4, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
          },

  medias : {
media1 :  {
          index : 1,
          mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
        },
media2 :  {
          index : 2,
          mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
        },
media3 :  {
          index : 3,
          mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
        },
       },
        

      etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
      },
      count : 1000, //조회수
      likeCount : 200, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 14,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
                  },
          portfolio2 :{
                  index : 2, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          portfolio3 :{
                  index : 3, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
                  },
          portfolio4 :{
                  index : 4, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL :'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          media2 :  {
                  index : 2,
                  mediaURL : 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png'
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
      },

       etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
},

      count : 7777, 
      likeCount : 157, 
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 15,
      userId :"677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "광진구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 광진구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "음악 레슨",
                  portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg" // 포트폴리오 
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png'
                  },
          media2 :  {
                  index : 2,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
                  },
      },

       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
  },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 16,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL :'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png' // 포트폴리오 
                  },
              },

      medias : 
      {media1 :  {
              index : 1,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
              },
      media2 :  {
              index : 2,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
              },
      media3 :  {
              index : 3,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
              },
     },
       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
      },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 17,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg",
      lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
      callTime : "오전12시 - 오전12시", 
      category : "연기", 
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "서초구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 서초구", 
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 14년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },    
              },
          education : {
              educationTitle : "중앙대학교 첨단영상대학원",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "영화 제작"
          } //학력
      },

  portfolios : {
      portfolio1 : {
              index : 1,
              portfolioTitle : "매채 연기레슨",
              portfolioURL : 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png' // 포트폴리오 
              },
      portfolio2 :{
              index : 2, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio3 :{
              index : 3, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio4 :{
              index : 4, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
          },

  medias : {
media1 :  {
          index : 1,
          mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
        },
media2 :  {
          index : 2,
          mediaURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
        },
media3 :  {
          index : 3,
          mediaURL : 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png'
        },
       },
        

      etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
      },
      count : 1000, //조회수
      likeCount : 200, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",
  },
  {
      id : 18,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          portfolio2 :{
                  index : 2, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
          },
          portfolio3 :{
                  index : 3, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png' // 포트폴리오 
                  },
          portfolio4 :{
                  index : 4, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          media2 :  {
                  index : 2,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png'
                  },
      },

       etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
},

      count : 7777, 
      likeCount : 157, 
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 19,
      userId :"677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "광진구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 광진구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          media2 :  {
                  index : 2,
                  mediaURL :'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
                  },
      },

       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
  },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 20,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'  
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340' 
                  },
              },

      medias : 
      {media1 :  {
              index : 1,
              mediaURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
              },
      media2 :  {
              index : 2,
              mediaURL :'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832'
              },
      media3 :  {
              index : 3,
              mediaURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
              },
     },
       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
      },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 21,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
      lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
      callTime : "오전12시 - 오전12시", 
      category : "연기", 
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "서초구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 서초구", 
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 14년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                          },    
              },
          education : {
              educationTitle : "중앙대학교 첨단영상대학원",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "영화 제작"
          } //학력
      },

  portfolios : {
      portfolio1 : {
              index : 1,
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio2 :{
              index : 2, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio3 :{
              index : 3, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
      portfolio4 :{
              index : 4, //고유번호
              portfolioTitle : "매채 연기레슨",
              portfolioURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832" // 포트폴리오 
              },
          },

  medias : {
media1 :  {
          index : 1,
          mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
        },
media2 :  {
          index : 2,
          mediaURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
        },
media3 :  {
          index : 3,
          mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
        },
       },
        

      etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
      },
      count : 1000, //조회수
      likeCount : 200, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-30 12:44:48",
      updateAt : "2025-12-30 12:44:48",

  },
  {
      id : 22,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832' // 포트폴리오 
                  },
          portfolio2 :{
                  index : 2, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          portfolio3 :{
                  index : 3, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340'
          },
          portfolio4 :{
                  index : 4, 
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL :'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832' // 포트폴리오 
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
                  },
          media2 :  {
                  index : 2,
                  mediaURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
                  },
      },

       etcAnnouncement :{
       qna1 : {
          index : 1,
          question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
          answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
          },
       qna2 : {
          index : 2,
          question : "어떤 서비스를 전문적으로 제공하나요?",
          answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
          }
},

      count : 7777, 
      likeCount : 157, 
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-25 16:44:48",
      updateAt : "2025-12-25 16:44:48",
  },
  {
      id : 23,
      userId :"677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "광진구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 광진구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832' // 포트폴리오 
                  },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "음악 레슨",
                  portfolioURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832' // 포트폴리오 
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "음악 강좌",
                  portfolioURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
                  },
      },

      medias : {
          media1 :  {
                  index : 1,
                  mediaURL :'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832'
                  },
          media2 :  {
                  index : 2,
                  mediaURL : 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e'
                  },
          media3 :  {
                  index : 3,
                  mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
                  },
      },

       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
  },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-25 16:44:48",
      updateAt : "2025-12-25 16:44:48",

  },
  {
      id : 24,
      userId : "677630ae686ab95419a5a1dc",
      name : "홍길동",
      lessonThumbnail : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      lessonName : "쇼팽피아노", //레슨 이름 
      callTime : "오전12시 - 오전12시", // 응대 가능시간
      category : "음악", // 레슨 카테고리
      lessonAddress : {
          addressSi : "서울시",
          addressGuGun : "강남구",
          addressDongLi : "",
      },
      lessonAddressDetail : "서울시 강남구", // 상세 주소
      lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
      history : { //경력
          personal : "총 경력 15년", //이력
          recode : 
                  {
                      record1 :
                          {
                              recordIndex : 1,
                              recordHistoryTitle : "前) SM 음악학원" ,
                              periodDetails : "2017년 7월 ~ 2017년 12월",
                              periodMonth : "6개월",
                              recordedSummary : "前) SM 음악학원 : 매체 음악강사"
                          },
                      record2 :
                          {
                              recordIndex : 2,
                              recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
                              periodDetails : "2018년 1월 - 2018년 1월",
                              periodMonth : "1개월",
                              recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
                          },
                      record3 :
                          {
                              recordIndex : 3,
                              recordHistoryTitle : "前) jyp 엔터테인먼트" ,
                              periodDetails : "2015년 1월 - 2015년 12월",
                              periodMonth : "1년년",
                              recordedSummary : "前) jyp 보컬 트레이너"
                          },    
              },
          education : {
              educationTitle : "한국예술종합학교",
              educationPeriod : "2022년 3월 ~ 현재",
              educationSubject : "엔지니어"
          } //학력
      },

      portfolios : { 
          portfolio1 :{
                  index : 1,
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
          },
          portfolio2 :{
                  index : 2, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
                  },
          portfolio3 :{
                  index : 3, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
                  },
          portfolio4 :{
                  index : 4, //고유번호
                  portfolioTitle : "매채 연기레슨",
                  portfolioURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832' // 포트폴리오 
                  },
              },

      medias : 
      {media1 :  {
              index : 1,
              mediaURL : 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg'
              },
      media2 :  {
              index : 2,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340'
              },
      media3 :  {
              index : 3,
              mediaURL : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832'
              },
     },
       etcAnnouncement :{
          qna1 : {
              index : 1,
              question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
              answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
              },
          qna2 : {
              index : 2,
              question : "어떤 서비스를 전문적으로 제공하나요?",
              answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
              }
      },
      count : 7777, //조회수
      likeCount : 157, //좋아요 수
      likeUser : "677630ae686ab95419a5a1dc",
      createAt : "2025-12-25 16:44:48",
      updateAt : "2025-12-25 16:44:48",
  },)




// console.log(communityData)
// console.log(mdData)
// console.log(auctionData)
// console.log(showuvodData)
// console.log(spaceData)
// console.log(showData)
console.log(lessonListData)
// console.log(teamListData)
// console.log(likeData)
// console.log(reservationData)