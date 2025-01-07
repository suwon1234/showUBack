// 뉴스 메인
const newsData = await News.create(
{
  title: "CJ 뮤지컬의 대표작 물랑루즈",
  category: "뮤지컬",
  description: "주크박스 뮤지컬의 대명사 물랑루즈의 세계로!",
  imageUrl: "/images/news/musical-10.jpg",
},
{
  title: "뮤지컬 베르테르",
  category: "뮤지컬",
  description: "뮤지컬 베르테르",
  imageUrl: "/images/news/musical-1.jpg",
},
{ 
  title: "영화 위키드 PART1.",
  category: "영화",
  description: "위키드가 영화로!",
  imageUrl: "/images/news/movie-1.jpg",
},
{
  title: "데이식스 고척콘",
  category: "밴드",
  description: "데!이!식!스!웰!컴!투더!쇼!",
  imageUrl: "/images/news/band-1.jpg",
},
{
  title: "뮤지컬 시라노",
  category: "뮤지컬",
  description: "로맨티스트 시라노 아아,,",
  imageUrl: "/images/news/musical-2.jpg",
},
{
  title: "우리 별",
  category: "연극",
  description: "연극 우리 별",
  imageUrl: "/images/news/theater-1.jpg",
},
{
  title: "시네마 천국",
  category: "영화",
  description: "울고 싶을 땐 시네마 천국",
  imageUrl: "/images/news/movie-2.jpg",
},
{
  title: "딥 퍼플 역시 레전드 밴드",
  category: "밴드",
  description: "burn!!!!!",
  imageUrl: "/images/news/band-2.jpg",
},
{
  title: "해리포터와 마법사의 돌",
  category: "영화",
  description: "해리포터 시리즈의 시작",
  imageUrl: "/images/news/movie-3.jpg",
},
{
  title: "뮤지컬 킹키 부츠",
  category: "뮤지컬",
  description: "킹키하라!",
  imageUrl: "/images/news/musical-3.jpg",
},
{
  title: "하울의 움직이는 성",
  category: "영화",
  description: "지브리 하면 떠오르는 영화!",
  imageUrl: "/images/news/movie-4.jpg",

},
{
  title: "스미노 하야토 피아노 리사이틀",
  category: "공연",
  description: "피아노 연주회",
  imageUrl: "/images/news/show-1.jpg" ,
},
{
  title: "밴드 데이식스",
  category: "밴드",
  description: "걷잡을 수 없이 스르륵 녹아내려요",
  imageUrl: "/images/news/band-3.jpg",
},
{
  title: "뮤지컬 데스노트",
  category: "뮤지컬",
  description: "DEATH NOTE",
  imageUrl: "/images/news/musical-4.jpg" ,
},
{
  title: "뮤지컬 웨스트 사이드 스토리",
  category: "뮤지컬",
  description: "싸워라!(짝) 싸워라!(짝)",
  imageUrl: "/images/news/musical-5.jpg",
},
{
  title: "뮤지컬 종의 기원",
  category: "뮤지컬",
  description: "그 종의 기원 말고 재밌는 종의 기원",
  imageUrl: "/images/news/musical-8.jpg",
},
{
  title: "최고의 헤드윅은?",
  category: "뮤지컬",
  description: "셋 다 잘생겼는데 어떡하라고, 오또카라고, 어뜨카라고...",
  imageUrl: "/images/news/musical-6.jpg",
},
{
  title: "지크수가 또!",
  category: "뮤지컬",
  description: "Jesus..!",
  imageUrl: "/images/news/musical-7.jpg",
},
{
  title: "빛과 소리",
  category: "공연",
  description: "빛과 소리",
  imageUrl: "/images/news/show-3.jpg",
},
{
  title: "연극 곰스크로 가는 기차",
  category: "연극",
  description: "곰스크로 가는 기차",
  imageUrl: "/images/news/theater-2.jpg",
},)




//======================================================================================
//======================================================================================
//======================================================================================


// 오디션
const auditionData = await Audition.create(
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-7.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <팬텀> 오디션',
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-11.jpg',
    title: '문화감각',
    description: '뮤지컬 <루카스> 오디션',
  },
  {
    image: '뮤지컬',
    imageUrl: '/images/auditionInfo/audition-info-musical-4.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <베르사유의 장미> 오디션',
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-8.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <웃는남자> 오디션',
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-12.jpg',
    title: '도깨비이엔티',
    description: '뮤지컬 <로보카 폴리> 오디션',
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-4.jpg',
    title: '바다컴퍼니',
    description: '연극 <너에게로 가는 길> 오디션',
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-9.jpg',
    title: '신시컴퍼니',
    description: '뮤지컬 <빌리엘리어트> 오디션',
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-5.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <한복 입은 남자> 오디션',
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-6.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <마타하리> 오디션',
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-6.jpg',
    title: '서울문화재단',
    description: '연극 <베를리너> 오디션',
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-1.jpg',
    title: 'CJ MUSICAL',
    description: '뮤지컬 브로드웨이 42번가 오디션',
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-1.jpg',
    title: '예술의 전당',
    description: '연극 <햄릿> 오디션',
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-10.jpg',
    title: '에이콤',
    description: '뮤지컬 <명성황후> 오디션',
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-3.jpg',
    title: 'comporama',
    description: '연극<THE CELL> 오디션',
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-2.jpg',
    title: 'CJ MUSICAL',
    description: '뮤지컬 <물랑루즈> 오디션',
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-2.jpg',
    title: '(주)나인진엔터테인먼트',
    description: '연극 <로스트> 오디션',
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-7.jpg',
    title: '신시컴퍼니',
    description: '연극 <렛미인> 오디션',
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-5.jpg',
    title: '(주)문컴퍼니',
    description: '연극 <분홍립스틱> 오디션',
  },
)



// 오디션 인포
const auditionInfoData = [
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-7.jpg',
    title: "뮤지컬 팬텀 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-11.jpg',
    title: "뮤지컬 루카스 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-4.jpg',
    title: "뮤지컬 베르사유의 장미 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-8.jpg',
    title: "뮤지컬 웃는남자 오디션",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-12.jpg',
    title: "뮤지컬 로보카 폴리 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-4.jpg',
    title: "연극 너에게로 가는 길 오디션 공고",
  },
  {
    imageUrl: '/images/audition/audition-musical-9.jpg',
    title: "뮤지컬 빌리엘리어트 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-5.jpg',
    title: "뮤지컬 한복 입은 남자 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-6.jpg',
    title: "뮤지컬 마타하리 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-6.jpg',
    title: "연극 베를리너 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-1.jpg',
    title: "브로드웨이 42번가 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-1.jpg',
    title: "연극 햄릿 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-10.jpg',
    title: "뮤지컬 명성황후 아역 오디션 공고",
  },
  {
    imageUrl: '/images/audition/audition-musical-3.jpg',
    title: "연극 the cell 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-2.jpg',
    title: "물랑루즈 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-2.jpg',
    title: "연극 로스트 오디션 공고",
  },
  {
    imageUrl: '/images/audition/audition-theater-7.jpg',
    title: "연극 렛미인 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-5.jpg',
    title: "연극 분홍립스틱 오디션 공고",
  },

];