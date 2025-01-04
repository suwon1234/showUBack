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







  