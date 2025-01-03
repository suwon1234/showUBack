import connect from '../connect/connect.js'; 
import Option from './shop/optionSchema.js'
import Md from './shop/mdSchema.js';
import Auction from './shop/auctionSchema.js'
import Community from "./community/communitySchema.js"

connect()

// await Md.deleteMany()

const communityData = await Community.create(
  {
    UserId: "677630ae686ab95419a5a1dc",  // 더미 데이터용 아이디 회원 가입된 아이디로 강제 부여
    Writefile: "-",
    title: "타이틀1",
    category: "뮤지컬",
    description: "설명1",
    content: "내용1",
    imageUrl: "/images/community/musical-1.jpg",
  },
  {
    UserId: "677630ae686ab95419a5a1dc",
    Writefile: "-",
    title: "타이틀2",
    description: "설명2",
    category: "공연",
    content: "내용2",
    imageUrl: "/images/community/show-1.jpg",
  },
  {
    UserId: "677630ae686ab95419a5a1dc",
    Writefile: "-",
    title: "타이틀3",
    description: "설명3",
    content: "내용3",
    category: "밴드",
    imageUrl: "/images/community/band-1.jpg",
  },
  {
    UserId: "677630ae686ab95419a5a1dc",
    Writefile: "-",
    title: "타이틀4",
    description: "설명4",
    content: "내용4",
    category: "영화",
    imageUrl: "/images/community/movie-1.jpg",
  },
  {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀5",
      description: "설명5",
      content: "내용5",
      category: "뮤지컬",
      imageUrl: "/images/community/musical-2.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀6",
      description: "설명6",
      content: "내용6",
      category: "연극",
      imageUrl: "/images/community/theater-1.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀7",
      description: "설명7",
      content: "내용7",
      category: "뮤지컬",
      imageUrl: "/images/community/musical-3.jpg"
    },
    {
      UserId:"677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀8",
      description: "설명8",
      content: "내용8",
      category: "뮤지컬",
      imageUrl: "/images/community/musical-4.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀9",
      description: "설명9",
      content: "내용9",
      category: "뮤지컬",
      imageUrl: "/images/community/musical-5.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀10",
      description: "설명",
      content: "내용",
      category: "연극",
      imageUrl: "/images/community/theater-2.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀11",
      description: "설명",
      content: "내용",
      category: "연극",
      imageUrl: "/images/community/theater-3.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀12",
      description: "설명",
      content: "내용",
      category: "영화",
      imageUrl: "/images/community/movie-2.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀13",
      description: "설명",
      content : "내용",
      category: "공연",
      imageUrl: "/images/community/show-2.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀14",
      description: "설명",
      content: "내용",
      category: "공연",
      imageUrl: "/images/community/show-3.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀15",
      description: "설명",
      content: "내용",
      category: "뮤지컬",
      imageUrl: "/images/community/musical-6.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀16",
      description: "설명",
      content: "내용",
      category: "영화",
      imageUrl: "/images/community/movie-3.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀17",
      description: "설명",
      content: "내용",
      category: "밴드",
      imageUrl: "/images/community/band-2.jpg"
    },
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀18",
      description: "설명",
      content: "내용",
      category: "공연",
      imageUrl: "/images/community/show-4.jpg"
    },
    
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀19",
      description: "설명",
      content: "내용",
      category: "뮤지컬",
      imageUrl: "/images/community/musical-7.jpg"
    },    
    {
      UserId: "677630ae686ab95419a5a1dc",
      Writefile: "-",
      title: "타이틀20",
      description: "설명",
      content: "내용",
      category: "뮤지컬",
      imageUrl: "/images/community/musical-8.jpg"
    },  
  )


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
const basicOption = await Option.create(
  {
    optionName: "기본 옵션",
    additionalPrice: 0 
  });

const specialOption = await Option.create(
  { 
    optionName: "기본 옵션 + 증정",
    additionalPrice: 3000 
  });


// MD 상품
const mdData = await Md.create(
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "연극", 
    mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 15000, 
    image: "/images/shop/md/md1.jpg", 
    imageDetail: "/images/shop/md/md1-1.jpg", 
    isHearted : "677630ae686ab95419a5a1dc" 
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "연극", 
    mdName: "베르사유의 장미 금속 마그넷",
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],  
    price: 13000, 
    image: "/images/shop/md/md2.jpg", 
    imageDetail: "/images/shop/md/md2-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "연극", 
    mdName: "베르사유의 장미 고블렛", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 18000, 
    image: "/images/shop/md/md3.jpg", 
    imageDetail: "/images/shop/md/md3-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "연극", 
    mdName: "베르사유의 장미 키링", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 17000, 
    image: "/images/shop/md/md4.jpg", 
    imageDetail: "/images/shop/md/md4-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "연극", 
    mdName: "베르사유의 장미 배지1", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 11000, 
    image: "/images/shop/md/md5.jpg", 
    imageDetail: "/images/shop/md/md5-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "연극", 
    mdName: "베르사유의 장미 배지2", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 11000, 
    image: "/images/shop/md/md6.jpg", 
    imageDetail: "/images/shop/md/md6-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "연극", 
    mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],
    price: 11000, 
    image: "/images/shop/md/md7.jpg", 
    imageDetail: "/images/shop/md/md7-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "연극", 
    mdName: "베르사유의 장미 스트랩 파우치", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 18000, 
    image: "/images/shop/md/md8.jpg", 
    imageDetail: "/images/shop/md/md8-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "연극", 
    mdName: "2025 캘린더", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 12000,  
    image: "/images/shop/md/md9.jpg", 
    imageDetail: "/images/shop/md/md9-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "영화", 
    mdName: "4월은 너의 거짓말 금속 마그넷", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 14000, 
    image: "/images/shop/md/md10.jpg", 
    imageDetail: "/images/shop/md/md10-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "영화", 
    mdName: "4월은 너의 거짓말 배지1", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 12000, 
    image: "/images/shop/md/md11.jpg", 
    imageDetail: "/images/shop/md/md11-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "영화", 
    mdName: "4월은 너의 거짓말 배지2", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],
    price: 12000,  
    image: "/images/shop/md/md12.jpg", 
    imageDetail: "/images/shop/md/md12-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "영화", 
    mdName: "4월은 너의 거짓말 배지3", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 12000,  
    image: "/images/shop/md/md13.jpg", 
    imageDetail: "/images/shop/md/md13-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "영화", 
    mdName: "4월은 너의 거짓말 에코백", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 13000, 
    image: "/images/shop/md/md14.jpg", 
    imageDetail: "/images/shop/md/md14-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "영화", 
    mdName: "4월은 너의 거짓말 메시지 엽서", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 10000, 
    image: "/images/shop/md/md15.jpg", 
    imageDetail: "/images/shop/md/md15-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "영화", 
    mdName: "4월은 너의 거짓말 유리컵", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 19000,  
    image: "/images/shop/md/md16.jpg", 
    imageDetail: "/images/shop/md/md16-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "영화", 
    mdName: "4월은 너의 거짓말 대본집", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 13000,  
    image: "/images/shop/md/md17.jpg", 
    imageDetail: "/images/shop/md/md17-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "영화", 
    mdName: "4월은 너의 거짓말 프로그램북", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 12000, 
    image: "/images/shop/md/md18.jpg", 
    imageDetail: "/images/shop/md/md18-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 거울 그립톡", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 13000, 
    image: "/images/shop/md/md19.jpg", 
    imageDetail: "/images/shop/md/md19-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 마스킹 테이프", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 6000,  
    image: "/images/shop/md/md20.jpg", 
    imageDetail: "/images/shop/md/md20-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 글리터 코스터", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 17000,  
    image: "/images/shop/md/md21.jpg", 
    imageDetail: "/images/shop/md/md21-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 미니 티켓북", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 18000,  
    image: "/images/shop/md/md22.jpg", 
    imageDetail: "/images/shop/md/md22-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 금속 북마크", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 9000, 
    image: "/images/shop/md/md23.jpg", 
    imageDetail: "/images/shop/md/md23-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 접이식 우산", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 27000, 
    image: "/images/shop/md/md24.jpg", 
    imageDetail: "/images/shop/md/md24-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 앙리 엽서 (고은성VER.)", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 5000,  
    image: "/images/shop/md/md25.jpg", 
    imageDetail: "/images/shop/md/md25-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 앙리 엽서 (이해준VER.)", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 5000,  
    image: "/images/shop/md/md26.jpg", 
    imageDetail: "/images/shop/md/md26-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 앙리 엽서 (카이VER.)", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 5000,  
    image: "/images/shop/md/md27.jpg", 
    imageDetail: "/images/shop/md/md27-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (고은성VER.)", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 19000,  
    image: "/images/shop/md/md28.jpg", 
    imageDetail: "/images/shop/md/md28-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (이해준VER.)", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 19000, 
    image: "/images/shop/md/md29.jpg", 
    imageDetail: "/images/shop/md/md29-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
  { 
    UserId: "677630ae686ab95419a5a1dc",
    category: "뮤지컬", 
    mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (카이VER.)", 
    options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
    price: 19000, 
    image: "/images/shop/md/md30.jpg", 
    imageDetail: "/images/shop/md/md30-1.jpg", 
    isHearted: "677630ae686ab95419a5a1dc"  
  },
)


// 경매 상품
const auctionData = await Auction.create(
  { 
    category: "연극",
    auctionName: "베르사유의 장미 프로그램북 스페셜 에디션",
    auctionId: "111ABC",
    time: 0,
    count: 60,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명1",
    image: "/images/shop/auction/auction1.jpg",
    imageDetail: "/images/shop/auction/auction1-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "연극",
    auctionName: "베르사유의 장미 금속 마그넷",
    auctionId: "112ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명2",
    image: "/images/shop/auction/auction2.jpg",
    imageDetail: "/images/shop/auction/auction2-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  {
    category: "연극",
    auctionName: "베르사유의 장미 고블렛",
    auctionId: "113ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명3",
    image: "/images/shop/auction/auction3.jpg",
    imageDetail: "/images/shop/auction/auction3-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "연극",
    auctionName: "베르사유의 장미 키링",
    auctionId: "114ABC",
    time: 0,
    count: 10,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명4",
    image: "/images/shop/auction/auction4.jpg",
    imageDetail: "/images/shop/auction/auction4-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "연극",
    auctionName: "베르사유의 장미 배지1",
    auctionId: "115ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명5",
    image: "/images/shop/auction/auction5.jpg",
    imageDetail: "/images/shop/auction/auction5-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "연극",
    auctionName: "베르사유의 장미 배지2",
    auctionId: "116ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명6",
    image: "/images/shop/auction/auction6.jpg",
    imageDetail: "/images/shop/auction/auction6-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "연극",
    auctionName: "베르사유의 장미 배지3",
    auctionId: "117ABC",
    time: 0,
    count: 60,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명7",
    image: "/images/shop/auction/auction7.jpg",
    imageDetail: "/images/shop/auction/auction7-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "연극",
    auctionName: "베르사유의 장미 스트랩 파우치",
    auctionId: "118ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명8",
    image: "/images/shop/auction/auction8.jpg",
    imageDetail: "/images/shop/auction/auction8-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "연극",
    auctionName: "2025 캘린더",
    auctionId: "119ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명9",
    image: "/images/shop/auction/auction9.jpg",
    imageDetail: "/images/shop/auction/auction9-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "영화",
    auctionName: "4월은 너의 거짓말 금속 마그넷",
    auctionId: "120ABC",
    time: 0,
    count: 60,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명10",
    image: "/images/shop/auction/auction10.jpg",
    imageDetail: "/images/shop/auction/auction10-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "영화",
    auctionName: "4월은 너의 거짓말 배지1",
    auctionId: "121ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명11",
    image: "/images/shop/auction/auction11.jpg",
    imageDetail: "/images/shop/auction/auction11-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "영화",
    auctionName: "4월은 너의 거짓말 배지2",
    auctionId: "123ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명12",
    image: "/images/shop/auction/auction12.jpg",
    imageDetail: "/images/shop/auction/auction12-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "영화",
    auctionName: "4월은 너의 거짓말 배지3",
    auctionId: "124ABC",
    time: 0,
    count: 60,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명13",
    image: "/images/shop/auction/auction13.jpg",
    imageDetail: "/images/shop/auction/auction13-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "영화",
    auctionName: "4월은 너의 거짓말 에코백",
    auctionId: "125ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명14",
    image: "/images/shop/auction/auction14.jpg",
    imageDetail: "/images/shop/auction/auction14-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "영화",
    auctionName: "4월은 너의 거짓말 메시지 엽서",
    auctionId: "126ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명15",
    image: "/images/shop/auction/auction15.jpg",
    imageDetail: "/images/shop/auction/auction15-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "영화",
    auctionName: "4월은 너의 거짓말 유리컵",
    auctionId: "127ABC",
    time: 0,
    count: 60,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명16",
    image: "/images/shop/auction/auction16.jpg",
    imageDetail: "/images/shop/auction/auction16-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "영화",
    auctionName: "4월은 너의 거짓말 대본집",
    auctionId: "128ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명17",
    image: "/images/shop/auction/auction17.jpg",
    imageDetail: "/images/shop/auction/auction17-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "영화",
    auctionName: "4월은 너의 거짓말 프로그램북",
    auctionId: "129ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명18",
    image: "/images/shop/auction/auction18.jpg",
    imageDetail: "/images/shop/auction/auction18-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 거울 그립톡",
    auctionId: "130ABC",
    time: 0,
    count: 60,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명19",
    image: "/images/shop/auction/auction19.jpg",
    imageDetail: "/images/shop/auction/auction19-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 마스킹 테이프",
    auctionId: "131ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명20",
    image: "/images/shop/auction/auction20.jpg",
    imageDetail: "/images/shop/auction/auction20-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 글리터 코스터",
    auctionId: "132ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명21",
    image: "/images/shop/auction/auction21.jpg",
    imageDetail: "/images/shop/auction/auction21-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 미니 티켓북",
    auctionId: "133ABC",
    time: 0,
    count: 60,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명22",
    image: "/images/shop/auction/auction22.jpg",
    imageDetail: "/images/shop/auction/auction22-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 금속 북마크",
    auctionId: "134ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명23",
    image: "/images/shop/auction/auction23.jpg",
    imageDetail: "/images/shop/auction/auction23-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 접이식 우산",
    auctionId: "135ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명24",
    image: "/images/shop/auction/auction24.jpg",
    imageDetail: "/images/shop/auction/auction24-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 앙리 엽서 (고은성VER.)",
    auctionId: "136ABC",
    time: 0,
    count: 60,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명25",
    image: "/images/shop/auction/auction25.jpg",
    imageDetail: "/images/shop/auction/auction25-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 앙리 엽서 (이해준VER.)",
    auctionId: "137ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명26",
    image: "/images/shop/auction/auction26.jpg",
    imageDetail: "/images/shop/auction/auction26-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 앙리 엽서 (카이VER.)",
    auctionId: "138ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명27",
    image: "/images/shop/auction/auction27.jpg",
    imageDetail: "/images/shop/auction/auction27-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (고은성VER.)",
    auctionId: "139ABC",
    time: 0,
    count: 60,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명28",
    image: "/images/shop/auction/auction28.jpg",
    imageDetail: "/images/shop/auction/auction28-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (이해준VER.)",
    auctionId: "140ABC",
    time: 0,
    count: 88,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명29",
    image: "/images/shop/auction/auction29.jpg",
    imageDetail: "/images/shop/auction/auction29-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
  { 
    category: "뮤지컬",
    auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (카이VER.)",
    auctionId: "218ABC",
    time: 0,
    count: 23,
    unit: 1000,
    bid: 0,
    finalPrice: 0,
    description: "상세 설명30",
    image: "/images/shop/auction/auction30.jpg",
    imageDetail: "/images/shop/auction/auction30-1.jpg",
    isHearted: "677630ae686ab95419a5a1dc"
  },
)

console.log(communityData)
console.log(mdData)
console.log(auctionData)

// const spaceData = [
//   {
//     id: 1,
//     name: "Conference Room A",
//     location: "Building 1, Floor 3",
//     price: "100,000원",
//     pricePerHour: 100000,
//     pricePerDay: 800000,
//     img: "https://img.shareit.kr/prod/img/2022-10-12/c46f4d5e-874d-4a74-9129-dcb24b8d4411.jpg",
//     description: "고민중...",
//     amenities: ["Wi-Fi", "Projector", "Whiteboard"],
//     additionalImages: [
//       "https://img.shareit.kr/prod/img/2022-09-30/312dc9ca-b0aa-4c0b-8411-f3d6a190fb74.jpg",
//       "https://img.shareit.kr/prod/img/2022-09-30/4edcc5e0-51b8-4c9f-8363-4aa641cd5184.jpg",
//       "https://img.shareit.kr/prod/img/2022-09-30/9f11d616-d0d5-4d23-8201-9fa82de51ab1.jpg",
//       "https://img.shareit.kr/prod/img/2022-09-30/8cc7d4a7-7245-4991-a1d1-1eaf449b6b06.jpg",
//     ],
//   },
//   {

//     id: 2,
//     name: "Event Hall B",
//     location: "Building 2, Floor 1",
//     price: "200,000원",
//     pricePerHour: 200000,
//     pricePerDay: 1600000,
//     img: "https://img.shareit.kr/prod/img/2023-07-26/73d285ea-1464-4b79-87c6-de8f71f4a5be.jpg",
//     description: "고민중...",
//     amenities: ["Wi-Fi", "Sound System", "Stage"],
//     additionalImages: [
//       "https://img.shareit.kr/tempspaceauth/img/2023-07-12/2f047fa3-73ce-4d2b-a10d-b54fb42388f3.jpg",
//       "https://img.shareit.kr/prod/img/2023-07-26/637ef551-76e8-4bee-87b7-d82db4be9ec9.jpg",
//       "https://img.shareit.kr/prod/img/2023-07-26/8209971f-cb49-4f2f-b28e-101ede0853d1.jpg",
//       "https://img.shareit.kr/prod/img/2023-07-26/261ed796-9d48-4333-a3c9-da09843b53bf.jpg",
//     ],
//   },
// ];

// const showData = [
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
//     discounts: [
//       "PAYCO VIP 회원 할인 10% 할인",
//       "5차 조기예매 할인 25% 할인",
//       "마티네 공연 할인 30% 할인",
//       "재관람(1인1매, 본인 기준으로 티켓소지시) 25% 할인",
//       "S석 청소년할인(본인, 생년월일 증명서류 지참) 30% 할인",
//     ],
//     img: "https://ticketimage.interpark.com/Play/image/large/24/24014885_p.gif",
//     cast: [
//       { name: "박정원", img: "path/to/image1.jpg" },
//       { name: "손유동", img: "path/to/image2.jpg" },
//       { name: "박준희", img: "path/to/image3.jpg" },
//       { name: "김리현", img: "path/to/image4.jpg" },
//       { name: "김재범", img: "path/to/image5.jpg" },
//       { name: "김종구", img: "path/to/image6.jpg" },
//       { name: "김경수", img: "path/to/image7.jpg" },
//       { name: "김지철", img: "path/to/image8.jpg" },
//     ],
//   },
//   {
//     id: 2,
//     name: "뮤지컬 <광화문 연가>",
//     venue: "세종문화회관 대극장",
//     dates: "2024.12.1 - 2025.2.28",
//     duration: "150분",
//     grade: "15세 이상",
//     price: {
//       R: "110,000원",
//       S: "170,000원",
//     },
//     discounts: [
//       "showU 회원 할인 15% 할인",
//       "조기예매 할인 20% 할인",
//       "학생 할인 30% 할인",
//     ],
//     img: "https://ticketimage.interpark.com/Play/image/large/24/24016737_p.gif",
//     cast: [
//       { name: "김준수", img: "path/to/image1.jpg" },
//       { name: "정성화", img: "path/to/image2.jpg" },
//       { name: "신영숙", img: "path/to/image3.jpg" },
//     ],
//   },
// ];