

// 뉴스 메인 
const newsData = [
    {
      title: "CJ 뮤지컬의 대표작 물랑루즈",
      category: "뮤지컬",
      description: "뉴스 설명1",
      imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/moulinrouge-musical-poster.jpg?v=1678248215",
    },
    {
      title: "뉴스 타이틀2",
      category: "뮤지컬",
      description: "뉴스 설명2",
      imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
    },
    {
      title: "뉴스 타이틀3",
      category: "영화",
      description: "뉴스 설명3",
      imageUrl: "https://img.sbs.co.kr/newimg/news/20241121/202009760_1280.jpg",
    },
    {
      title: "뉴스 타이틀4",
      category: "밴드",
      description: "뉴스 설명4",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg"
    },
    {
      title: "뉴스 타이틀5",
      category: "뮤지컬",
      description: "뉴스 설명5",
      imageUrl: "https://web-cf-image.cjenm.com/crop/204x294/public/share/metamng/programs/02_FeaturedContents_detail_poster_660x950_1663231642146.jpg?v=1676454555"
    },
    {
      title: "뉴스 타이틀6",
      category: "연극",
      description: "뉴스 설명6",
      imageUrl: "https://search.pstatic.net/common?quality=90&direct=true&src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5041%2F2024%2F11%2F29%2F0001014154_001_20241129122612985.jpg"
    },
    {
      title: "뉴스 타이틀7",
      category: "영화",
      description: "뉴스 설명7",
      imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20111222_69%2F1324540063006G6LQ4_JPEG%2Fmovie_image.jpg"
    },
    {
      title: "뉴스 타이틀8",
      category: "밴드",
      description: "뉴스 설명8",
      imageUrl: "https://ticketimage.interpark.com/Play/image/large/24/24014487_p.gif"
    },
    {
      title: "뉴스 타이틀9",
      category: "영화",
      description: "뉴스 설명9",
      imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20111222_122%2F13245071685017jMJu_JPEG%2Fmovie_image.jpg"
    },
    {
      title: "뉴스 타이틀10",
      category: "뮤지컬",
      description: "뉴스 설명10",
      imageUrl: "https://ticket7.bscc.or.kr/Down/Perf/202305/%ED%8F%AC%EC%8A%A4%ED%84%B0_4.jpg"
    },
    {
      title: "뉴스 타이틀11",
      category: "영화",
      description: "뉴스 설명11",
      imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20111222_109%2F1324542413119OftfB_JPEG%2Fmovie_image.jpg"
    },
    {
      title: "뉴스 타이틀12",
      category: "공연",
      description: "뉴스 설명12",
      imageUrl: "https://www.snart.or.kr/upload/image/20241122/929BD91AA2FA4CDF882D358A8C97F463.gif" 
    },
    {
      title: "뉴스 타이틀13",
      category: "밴드",
      description: "뉴스 설명13",
      imageUrl: "https://search.pstatic.net/common?type=a&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fab43feac-a2bf-429e-8164-ff52d70e40ee.jpg"
    },
    {
      title: "뉴스 타이틀14",
      category: "뮤지컬",
      description: "뉴스 설명14",
      imageUrl: "https://search.pstatic.net/common?quality=90&direct=true&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjFfNTQg%2FMDAxNjY5MDQxNjk3MDQx.oMs1Vhm6kztVBy_qXDtJHn1l8ZN2eGnhX4sBdSaYQ0Eg.K6LPVxEER7qvLcTfFYPwsdRj7jqgP5nNf3xONdQ1Gi8g.PNG.jixiah%2Fimage.png" 
    },
    {
      title: "뉴스 타이틀15",
      category: "뮤지컬",
      description: "뉴스 설명15",
      imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDExMjFfMTgg%2FMDAxNzMyMTQ5NDQwNjU5.lkleZf810S6M6N4aXSdPbElskjMrMIwwGfS-6w_g-Hog._A2GoufbWz_5XWcn8VJzRtb9SuJf2RGxfSaVBFdyW94g.JPEG%2FIMG_6549.jpg&type=sc960_832"
    },
    {
      title: "뉴스 타이틀16",
      category: "밴드",
      description: "뉴스 설명16",
      imageUrl: "https://storageciggallery.addons.business/12201/cig-cozy-gallery-5482tuy-Matias-Feliu-hd.jpg?c=00"
    },
    {
      title: "뉴스 타이틀17",
      category: "뮤지컬",
      description: "뉴스 설명17",
      imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMDlfMjAz%2FMDAxNzA0NzgwNTM4OTIw.OKTTgD7XqIhTaBwa7szMAZLqjmn5JGB4e_UZt_zIKskg.ggCfsRYtMM_YYzKPv3yxk00sMkc55tumqZ-MS40x3M0g.JPEG.hunimoya%2FScreenshot%25A3%25DF20240109%25A3%25AD150720%25A3%25DFSamsung_Internet.jpg&type=sc960_832"
    },
    {
      title: "뉴스 타이틀18",
      category: "뮤지컬",
      description: "뉴스 설명18",
      imageUrl: "https://www.shownote.com/Down/Perf/202401/HWG_poster_390x555_1.jpg"
    },
    {
      title: "뉴스 타이틀19",
      category: "공연",
      description: "뉴스 설명19",
      imageUrl: "https://ticketimage.interpark.com/Play/image/large/24/24010664_p.gif"
    },
    {
      title: "뉴스 타이틀20",
      category: "연극",
      description: "뉴스 설명20",
      imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMDFfOTAg%2FMDAxNzMzMDI4NTkwMjY3.oIYgOOuztRGmU8MueWjel7xyxMdEHZi7dEllZFe58EUg.cjpLGiSRFYABq-kHgJEfWRDHn1drTUeLg6IQXwzf0ugg.JPEG%2FKakaoTalk_20241201_131912153.jpg&type=sc960_832"
    },
  ];




// 뉴스 인포
const newsInfoData = [

    {
      title: "CJ 뮤지컬의 대표작 물랑루즈",
      description: "CJ 뮤지컬의 대표작 물랑루즈",
      imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/moulinrouge-musical-poster.jpg?v=1678248215",
      content: `막이 오르는 순간, 위대한 사랑이 시작된다! 1899년 파리, 
                ‘물랑루즈’에서 벌어지는 거부할 수 없는 운명과 위대한 사랑 이야기.`
    },
    {
      title: "뮤지컬 '킹키부츠",
      description: "뮤지컬 킹키부츠",
      imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
      content: "뮤지컬 '킹키부츠'가 공연을 시작합니다",
    },
    {
      title: "영화 위키드 PART1.",
      imageUrl: "https://img.sbs.co.kr/newimg/news/20241121/202009760_1280.jpg",
      content: "영화 위키드 PART1.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
    {
      title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
      imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg",
      content: "데이식스가 아이돌 밴드 최초로 고척돔에서 콘서트를 엽니다.",
    },
  ];




  // 오디션
  const auditionData = [
    {
      category: "뮤지컬",
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832',
      title: 'EMK MUSIAL COMPANY',
      description: '뮤지컬 <팬텀> 오디션',
    },
    {
      category: "뮤지컬",
      image: 'https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg',
      title: '문화감각',
      description: '뮤지컬 <루카스> 오디션',
    },
    {
      image: '뮤지컬',
      image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg',
      title: 'EMK MUSIAL COMPANY',
      description: '뮤지컬 <베르사유의 장미> 오디션',
    },
    {
      category: "뮤지컬",
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfODQg%2FMDAxNzA4MDg4OTY2NjA1.SZc_0aS5hlTWev8bbGlKHyhpQbdzAu7RXevt3nhShmwg.eYho59UUJ3dycnwzQSvF5f4Odcws5F7Lf0QrOOPoujMg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220756%25A3%25DFInstagram.jpg&type=sc960_832',
      title: 'EMK MUSIAL COMPANY',
      description: '뮤지컬 <웃는남자> 오디션',
    },
    {
      category: "뮤지컬",
      image: 'https://www.contestkorea.com/admincenter/files/meet/202411282051038432751.jpg',
      title: '도깨비이엔티',
      description: '뮤지컬 <로보카 폴리> 오디션',
    },
    {
      category: "연극",
      image: 'https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg',
      title: '바다컴퍼니',
      description: '연극 <너에게로 가는 길> 오디션',
    },
    {
      category: "뮤지컬",
      image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/8/29/202408292237379944eaee5b7a0ebbfe828efe88f8eaed8e.jpg',
      title: '신시컴퍼니',
      description: '뮤지컬 <빌리엘리어트> 오디션',
    },
    {
      category: "뮤지컬",
      image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg',
      title: 'EMK MUSIAL COMPANY',
      description: '뮤지컬 <한복 입은 남자> 오디션',
    },
    {
      category: "뮤지컬",
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832',
      title: 'EMK MUSIAL COMPANY',
      description: '뮤지컬 <마타하리> 오디션',
    },
    {
      category: "연극",
      image: 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png',
      title: '서울문화재단',
      description: '연극 <베를리너> 오디션',
    },
    {
      category: "뮤지컬",
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340',
      title: 'CJ MUSICAL',
      description: '뮤지컬 브로드웨이 42번가 오디션',
    },
    {
      id: 12,
      category: "연극",
      image: 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e',
      title: '예술의 전당',
      description: '연극 <햄릿> 오디션',
    },
    {
      category: "뮤지컬",
      image: 'https://image.newdaily.co.kr/site/data/img/2024/02/15/2024021500021_0.jpg?u=20240215085801',
      title: '에이콤',
      description: '뮤지컬 <명성황후> 오디션',
    },
    {
      category: "연극",
      image: 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg',
      title: 'comporama',
      description: '연극<THE CELL> 오디션',
    },
    {
      category: "뮤지컬",
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340',
      title: 'CJ MUSICAL',
      description: '뮤지컬 <물랑루즈> 오디션',
    },
    {
      category: "연극",
      image: 'https://otr.co.kr/wp-content/uploads/mangboard/2024/06/21/F201233_lost_odi.jpg',
      title: '(주)나인진엔터테인먼트',
      description: '연극 <로스트> 오디션',
    },
    {
      category: "연극",
      image: 'https://www.iseensee.com/event/letmein/241010_audition1.jpg',
      title: '신시컴퍼니',
      description: '연극 <렛미인> 오디션',
    },
    {
      category: "연극",
      image: 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg',
      title: '(주)문컴퍼니',
      description: '연극 <분홍립스틱> 오디션',
    },
  ];


  
  // 오디션 인포
  const auditionInfoData = [
    {
      id: 1,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e528de81bf69222228.jpg',
      title: "뮤지컬 팬텀 오디션 공고",
      description: ""
    },
    {
      id: 2,
      image: 'https://www.contestkorea.com/admincenter/files/meet/202402221229383763310.jpg',
      title: "뮤지컬 루카스 오디션 공고",
      description: ""
    },
    {
      id: 3,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202402/65c09cb78117d8301721.jpg',
      title: "뮤지컬 베르사유의 장미 오디션 공고",
      description: ""
    },
    {
      id: 4,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e528802bf6a4836843.jpg',
      title: "뮤지컬 웃는남자 오디션",
      description: ""
    },
    {
      id: 5,
      image: 'https://www.contestkorea.com/admincenter/files/meet/202411282051036809763.jpg',
      title: "뮤지컬 로보카 폴리 오디션 공고",
      description: ""
    },
    {
      id: 6,
      image: 'https://www.contestkorea.com/admincenter/files/meet/202412042146563150340.jpg',
      title: "연극 너에게로 가는 길 오디션 공고",
      description: ""
    },
    {
      id: 7,
      image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/8/29/202408292237379944eaee5b7a0ebbfe828efe88f8eaed8e.jpg',
      title: "뮤지컬 빌리엘리어트 오디션 공고",
      description: ""
    },
    {
      id: 8,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202411/6732e54aaeb154611022.jpeg',
      title: "뮤지컬 한복 입은 남자 오디션 공고",
      description: ""
    },
    {
      id: 9,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e56cac780461780827.jpg',
      title: "뮤지컬 마타하리 오디션 공고",
      description: ""
    },
    {
      id: 10,
      image: 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png',
      title: "연극 베를리너 오디션 공고",
      description: ""
    },
    {
      id: 11,
      image: '',
      title: "브로드웨이 42번가 오디션 공고",
      description: ""
    },
    {
      id: 12,
      image: 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e',
      title: "연극 햄릿 오디션 공고",
      description: ""
    },
    {
      id: 13,
      image: 'https://postfiles.pstatic.net/MjAyNDAyMTVfMTgz/MDAxNzA3OTgzNTI0MTAz.ftWF9f8NdmxzvKSL3I6h2LlOwSvS7mjIDpR2YPUC0RIg.sagHjKFR5HpI8qPu6KxwUgXtoRG01-OiMnIvki9wWvEg.PNG.immcompany/8.png?type=w3840',
      title: "뮤지컬 명성황후 아역 오디션 공고",
      description: ""
    },
    {
      id: 14,
      image: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MjFfMTk4/MDAxNzI2ODc4ODQ1MjYy._jAEpW3QyRYVENYsAZDs0a15uQ1S7M5rwr7nEgBboOMg.5-X7T-D5GLR4NN0argXe_KueBnJbeVIoD44PTWTprWMg.JPEG/F209750_2025_%EC%97%B0%EA%B7%B9_%EB%8D%94%EC%85%80_%EC%98%A4%EB%94%94%EC%85%98_%EA%B3%B5%EA%B3%A0%EB%AC%B8.jpg?type=w1600',
      title: "연극 the cell 오디션 공고",
      description: ""
    },
    {
      id: 15,
      image: '',
      title: "물랑루즈 오디션 공고",
      description: ""
    },
    {
      id: 16,
      image: 'https://otr.co.kr/wp-content/uploads/mangboard/2024/06/21/F201233_lost_odi.jpg',
      title: "",
      description: ""
    },
    {
      id: 17,
      image: 'https://www.iseensee.com/event/letmein/241010_audition1.jpg',
      title: "연극 렛미인 오디션 공고",
      description: ""
    },
    {
      id: 18,
      image: 'https://www.contestkorea.com/admincenter/files/meet/202411211101245257434.jpg',
      title: "연극 분홍립스틱 오디션 공고",
      description: ""
    },

  ];