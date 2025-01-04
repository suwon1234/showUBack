// 레슨 데이터


const lessonListData = [
    {
        id : 1,
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : "/images/showu/acting/acting1.jpg",
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
                portfolioURL : "/images/showu/acting/portfolio1.jpg" // 포트폴리오 
                },
        portfolio2 :{
                index : 2, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : "/images/showu/music/portfolio2.jpg" // 포트폴리오 
                },
        portfolio3 :{
                index : 3, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : "/images/showu/magic/portfolio3.jpg" // 포트폴리오 
                },
        portfolio4 :{
                index : 4, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : "/images/showu/music/portfolio2.jpg" // 포트폴리오 
                },
            },

    medias : {
	media1 :  {
            index : 1,
            mediaURL : '/images/showu/acting/acting4.jpg'
        	},
	media2 :  {
            index : 2,
            mediaURL : "/images/showu/acting/acting5.jpg"
        	},
	media3 :  {
            index : 3,
            mediaURL : '/images/showu/acting/acting2.jpg'
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
        name : "677630ae686ab95419a5a1dc",
        lessonThumbnail : "/images/showu/music/music1.jpg",
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
                    portfolioTitle : "매채 음악레슨",
                    portfolioURL : '/images/showu/music/music6.jpg'// 포트폴리오 
                    },
            portfolio2 :{
                    index : 2, 
                    portfolioTitle : "매채 음악레슨",
                    portfolioURL : '/images/showu/music/music8.jpg' // 포트폴리오 
                    },
            portfolio3 :{
                    index : 3, 
                    portfolioTitle : "매채 음악레슨",
                    portfolioURL : '/images/showu/music/music10.jpg' // 포트폴리오 
                    },
            portfolio4 :{
                    index : 4, 
                    portfolioTitle : "매채 음악레슨",
                    portfolioURL : '/images/showu/music/portfolio2.jpg' // 포트폴리오 
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL : '/images/showu/music/portfolio7.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL :'/images/showu/music/music4.jpg'
            },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/music/portfolio5.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/magic/magic1.jpg',
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
                    portfolioURL : '/images/showu/magic/magic1.jpg'
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "음악 레슨",
                    portfolioURL : '/images/showu/magic/portfolio6.jpg' // 포트폴리오 
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL :'/images/showu/music/music10.jpg' // 포트폴리오 
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL : '/images/showu/music/portfolio5.jpg'// 포트폴리오 
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL : '/images/showu/music/music2.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL :'/images/showu/music/music9.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/music/portfolio2.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/magic/portfolio1.jpg',
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
                    portfolioURL : '/images/showu/music/music4.jpg' // 포트폴리오 
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music8.jpg',
                    index : 3, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/portfolio3.jpg' // 포트폴리오 
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music1.jpg' // 포트폴리오 
                    },
                },

        medias : 
        {media1 :  {
                index : 1,
                mediaURL : '/images/showu/music/portfolio3.jpg'
                },
        media2 :  {
                index : 2,
                mediaURL : '/images/showu/music/music10.jpg'
                },
        media3 :  {
                index : 3,
                mediaURL : '/images/showu/music/portfolio8.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/acting/portfolio4.jpg',
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
                portfolioURL : '/images/showu/acting/acting5.jpg'
                },
        portfolio2 :{
                index : 2, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/magic/magic4.jpg' // 포트폴리오 
                },
        portfolio3 :{
                index : 3, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/music/music9.jpg' // 포트폴리오 
                },
        portfolio4 :{
                index : 4, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/music/portfolio3.jpg' // 포트폴리오 
                },
            },

    medias : {
	media1 :  {
            index : 1,
            mediaURL : '/images/showu/magic/portfolio4.jpg'
        	},
	media2 :  {
            index : 2,
            mediaURL : '/images/showu/music/music5.jpg'
             },
	media3 :  {
            index : 3,
            mediaURL : '/images/showu/music/music9.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/magic/portfolio3.jpg',
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
                    portfolioURL : '/images/showu/magic/portfolio6.jpg' // 포트폴리오 
                    },
            portfolio2 :{
                    index : 2, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/portfolio2.jpg' // 포트폴리오 
                    },
            portfolio3 :{
                    index : 3, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/portfolio5.jpg' // 포트폴리오 
                    },
            portfolio4 :{
                    index : 4, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/portfolio1.jpg' // 포트폴리오 
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL : '/images/showu/acting/portfolio2.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL :'/images/showu/magic/portfolio4.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/music/portfolio5.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail :'/images/showu/music/music1.jpg',
        lessonName : "쇼팽피아노", //레슨 이름 
        callTime : "오전12시 - 오전12시", // 응대 가능시간
        category : "마술", // 레슨 카테고리
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
                    portfolioURL : '/images/showu/magic/magic1.jpg'// 포트폴리오 
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "음악 레슨",
                    portfolioURL : '/images/showu/magic/magic6.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL : '/images/showu/magic/magic4.jpg'
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL :'/images/showu/magic/magic2.jpg'
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL : '/images/showu/magic/portfolio6.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL :'/images/showu/magic/portfolio3.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/magic/portfolio5.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail :'/images/showu/music/music1.jpg',
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
                    portfolioURL : '/images/showu/music/music2.jpg'
            },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music3.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music4.jpg'
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music5.jpg'
                    },
                },

        medias : 
        {media1 :  {
                index : 1,
                mediaURL : '/images/showu/music/music6.jpg'
                },
        media2 :  {
                index : 2,
                mediaURL : '/images/showu/music/music7.jpg'
                },
        media3 :  {
                index : 3,
                mediaURL : '/images/showu/music/music8.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/acting/acting1.jpg',
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
                portfolioURL : '/images/showu/acting/acting2.jpg' // 포트폴리오 
                },
        portfolio2 :{
                index : 2, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/acting/acting4.jpg' // 포트폴리오 
                },
        portfolio3 :{
                index : 3, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/acting/portfolio4.jpg' // 포트폴리오 
                },
        portfolio4 :{
                index : 4, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL :'/images/showu/acting/acting3.jpg' // 포트폴리오 
                },
            },

    medias : {
	media1 :  {
            index : 1,
            mediaURL : '/images/showu/acting/portfolio3.jpg'
        	},
	media2 :  {
            index : 2,
            mediaURL : '/images/showu/acting/portfolio2.jpg'
        	},
	media3 :  {
            index : 3,
            mediaURL :'/images/showu/acting/portfolio1.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/magic/magic1.jpg'
,
        lessonName : "쇼팽피아노", //레슨 이름 
        callTime : "오전12시 - 오전12시", // 응대 가능시간
        category : "마술", // 레슨 카테고리
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
                    portfolioURL : '/images/showu/magic/magic2.jpg'
 // 포트폴리오 
                    },
            portfolio2 :{
                    index : 2, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/magic3.jpg'

                    },
            portfolio3 :{
                    index : 3, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/magic6.jpg'

                    },
            portfolio4 :{
                    index : 4, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/magic5.jpg'
// 포트폴리오 
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL : '/images/showu/magic/magic4.jpg'

                    },
            media2 :  {
                    index : 2,
                    mediaURL : '/images/showu/magic/portfolio1.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL :'/images/showu/magic/portfolio6.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/music/music1.jpg',
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
                    portfolioURL : '/images/showu/music/music10.jpg' 
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "음악 레슨",
                    portfolioURL : '/images/showu/music/music9.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL : '/images/showu/music/music2.jpg'
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL : '/images/showu/music/music5.jpg'
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL : '/images/showu/music/music7.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL : '/images/showu/music/music3.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL :'/images/showu/music/music6.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/music/music10.jpg',
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
                    portfolioURL : '/images/showu/music/music9.jpg'
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music8.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music7.jpg'
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music6.jpg' // 포트폴리오 
                    },
                },

        medias : 
        {media1 :  {
                index : 1,
                mediaURL : '/images/showu/music/music5.jpg'
                },
        media2 :  {
                index : 2,
                mediaURL : '/images/showu/music/music4.jpg'
                },
        media3 :  {
                index : 3,
                mediaURL : '/images/showu/music/music3.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail :'/images/showu/music/music2.jpg',
        lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
        callTime : "오전12시 - 오전12시", 
        category : "마술", 
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
                portfolioURL : '/images/showu/magic/portfolio1.jpg' // 포트폴리오 
                },
        portfolio2 :{
                index : 2, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/magic/portfolio3.jpg' // 포트폴리오 
                },
        portfolio3 :{
                index : 3, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/magic/portfolio4.jpg' // 포트폴리오 
                },
        portfolio4 :{
                index : 4, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/magic/portfolio2.jpg' // 포트폴리오 
                },
            },

    medias : {
	media1 :  {
            index : 1,
            mediaURL : '/images/showu/magic/portfolio5.jpg'
        	},
	media2 :  {
            index : 2,
            mediaURL : '/images/showu/magic/portfolio6.jpg'
        	},
	media3 :  {
            index : 3,
            mediaURL : '/images/showu/magic/magic1.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/acting/acting1.jpg',
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
                    portfolioURL :'/images/showu/music/portfolio1.jpg'
                    },
            portfolio2 :{
                    index : 2, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/portfolio3.jpg'
                    },
            portfolio3 :{
                    index : 3, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/portfolio5.jpg'
                    },
            portfolio4 :{
                    index : 4, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/portfolio7.jpg'
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL :'/images/showu/music/portfolio9.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL : '/images/showu/music/portfolio8.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/music/portfolio7.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/magic/portfolio6.jpg',
        lessonName : "마술을 꿈꾸는 사람들", //레슨 이름 
        callTime : "오전12시 - 오전12시", // 응대 가능시간
        category : "마술", // 레슨 카테고리
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
                    portfolioURL : '/images/showu/magic/portfolio4.jpg' // 포트폴리오 
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "음악 레슨",
                    portfolioURL : '/images/showu/magic/portfolio2.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL :'/images/showu/magic/portfolio1.jpg' // 포트폴리오 
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL : '/images/showu/magic/portfolio3.jpg'
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL : '/images/showu/magic/portfolio5.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL : '/images/showu/magic/magic6.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/magic/magic2.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail :'/images/showu/music/music1.jpg',
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
                    portfolioURL : '/images/showu/music/music3.jpg'
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL :'/images/showu/music/music10.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music5.jpg'
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music7.jpg' // 포트폴리오 
                    },
                },

        medias : 
        {media1 :  {
                index : 1,
                mediaURL : '/images/showu/music/music9.jpg'
                },
        media2 :  {
                index : 2,
                mediaURL : '/images/showu/music/music8.jpg'
                },
        media3 :  {
                index : 3,
                mediaURL : '/images/showu/music/music2.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail :'/images/showu/magic/portfolio6.jpg',
        lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
        callTime : "오전12시 - 오전12시", 
        category : "마술", 
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
                portfolioURL : '/images/showu/magic/portfolio4.jpg' // 포트폴리오 
                },
        portfolio2 :{
                index : 2, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/magic/magic6.jpg' // 포트폴리오 
                },
        portfolio3 :{
                index : 3, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/magic/magic5.jpg' // 포트폴리오 
                },
        portfolio4 :{
                index : 4, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/magic/magic4.jpg' // 포트폴리오 
                },
            },

    medias : {
	media1 :  {
            index : 1,
            mediaURL : '/images/showu/magic/magic3.jpg'
        	},
	media2 :  {
            index : 2,
            mediaURL : '/images/showu/magic/magic2.jpg'
        	},
	media3 :  {
            index : 3,
            mediaURL : '/images/showu/magic/magic1.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/magic/magic6.jpg',
        lessonName : "마술배우기", //레슨 이름 
        callTime : "오전12시 - 오전12시", // 응대 가능시간
        category : "마술", // 레슨 카테고리
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
                    portfolioURL : '/images/showu/magic/magic2.jpg'
                    },
            portfolio2 :{
                    index : 2, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL :'/images/showu/magic/magic1.jpg'
            },
            portfolio3 :{
                    index : 3, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/magic5.jpg' // 포트폴리오 
                    },
            portfolio4 :{
                    index : 4, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/magic4.jpg'
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL : '/images/showu/magic/magic3.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL : '/images/showu/magic/magic2.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/magic/portfolio6.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/acting/portfolio1.jpg',
        lessonName : "마술 당신도 할 수 있습니다.", //레슨 이름 
        callTime : "오전12시 - 오전12시", // 응대 가능시간
        category : "마술", // 레슨 카테고리
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
                    portfolioURL : '/images/showu/acting/portfolio4.jpg'
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "음악 레슨",
                    portfolioURL : '/images/showu/acting/portfolio3.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL : '/images/showu/acting/portfolio2.jpg'
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL : '/images/showu/magic/portfolio1.jpg'
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL :'/images/showu/magic/portfolio4.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL :'/images/showu/magic/portfolio3.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/magic/portfolio2.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail :'/images/showu/music/music8.jpg',
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
                    portfolioURL : '/images/showu/music/music4.jpg' 
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music2.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music1.jpg'
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/portfolio2.jpg'
                    },
                },

        medias : 
        {media1 :  {
                index : 1,
                mediaURL : '/images/showu/music/portfolio4.jpg'
                },
        media2 :  {
                index : 2,
                mediaURL :'/images/showu/music/portfolio8.jpg'
                },
        media3 :  {
                index : 3,
                mediaURL : '/images/showu/music/portfolio10.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/acting/acting1.jpg',
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
                portfolioURL : '/images/showu/acting/acting2.jpg' // 포트폴리오 
                },
        portfolio2 :{
                index : 2, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL :'/images/showu/acting/acting3.jpg' // 포트폴리오 
                },
        portfolio3 :{
                index : 3, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL : '/images/showu/acting/acting4.jpg' // 포트폴리오 
                },
        portfolio4 :{
                index : 4, //고유번호
                portfolioTitle : "매채 연기레슨",
                portfolioURL :'/images/showu/acting/portfolio1.jpg' // 포트폴리오 
                },
            },

    medias : {
	media1 :  {
            index : 1,
            mediaURL : '/images/showu/acting/portfolio2.jpg'
        	},
	media2 :  {
            index : 2,
            mediaURL : '/images/showu/acting/portfolio4.jpg'
        	},
	media3 :  {
            index : 3,
            mediaURL : '/images/showu/acting/acting5.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/music/music1.jpg',
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
                    portfolioURL : '/images/showu/music/music2.jpg' // 포트폴리오 
                    },
            portfolio2 :{
                    index : 2, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music3.jpg'
                    },
            portfolio3 :{
                    index : 3, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/music/music4.jpg'
            },
            portfolio4 :{
                    index : 4, 
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL :'/images/showu/music/portfolio10.jpg' // 포트폴리오 
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL : '/images/showu/music/portfolio9.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL : '/images/showu/music/portfolio8.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/music/portfolio7.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/music/portfolio1.jpg',
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
                    portfolioURL : '/images/showu/music/portfolio10.jpg' // 포트폴리오 
                    },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "음악 레슨",
                    portfolioURL : '/images/showu/music/portfolio9.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL : '/images/showu/music/portfolio8.jpg' // 포트폴리오 
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "음악 강좌",
                    portfolioURL : '/images/showu/music/portfolio7.jpg'
                    },
        },

        medias : {
            media1 :  {
                    index : 1,
                    mediaURL :'/images/showu/music/portfolio6.jpg'
                    },
            media2 :  {
                    index : 2,
                    mediaURL : '/images/showu/music/portfolio5.jpg'
                    },
            media3 :  {
                    index : 3,
                    mediaURL : '/images/showu/music/portfolio4.jpg'
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
        name :  "677630ae686ab95419a5a1dc",
        lessonThumbnail : '/images/showu/magic/magic1.jpg',
        lessonName : "재밌는 마술교실", //레슨 이름 
        callTime : "오전12시 - 오전12시", // 응대 가능시간
        category : "마술", // 레슨 카테고리
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
                    portfolioURL : '/images/showu/magic/magic3.jpg'
            },
            portfolio2 :{
                    index : 2, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/magic5.jpg'
                    },
            portfolio3 :{
                    index : 3, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/magic6.jpg'
                    },
            portfolio4 :{
                    index : 4, //고유번호
                    portfolioTitle : "매채 연기레슨",
                    portfolioURL : '/images/showu/magic/portfolio6.jpg' // 포트폴리오 
                    },
                },

        medias : 
        {media1 :  {
                index : 1,
                mediaURL : '/images/showu/magic/portfolio4.jpg'
                },
        media2 :  {
                index : 2,
                mediaURL : '/images/showu/magic/portfolio3.jpg'
                },
        media3 :  {
                index : 3,
                mediaURL : '/images/showu/magic/portfolio1.jpg'
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
    },


]








//  teamData

const teamListData = [
    {
        id : 1,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(분당)",
        teamThumbnail :'/images/showu/acting/portfolio3.jpg',
        category : "연기",
        meetDay : "월",
        meetPeriod : {
            time :"낮",
            timeDetail : "12시-15시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"아마추어",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-11-10", //팀 활동 시작일
            end : "25-11-10"
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2025-01-03 16:44:48",
        updateAt : "2025-03-03 16:44:48",
    },
    {
        id : 2,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "보컬 연습",
        teamThumbnail : '/images/showu/music/music5.jpg',
        category : "음악",
        meetDay : "화",
        meetPeriod : {
            time :"오후",
            timeDetail : "15시-20시"
        }, 
        ages : "10대",
        gender : "여자",
        averageSkill :"비기너",
        teamNotice : "안녕하십니까, 입시 노래 연습 파트너 구합니다.",
        activityPeriod : {
            start : "24-11-05", //팀 활동 시작일
            end : "25-11-10"
        },
        status: "매칭 완료", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2025-01-03 16:44:48",
        updateAt : "2025-03-03 16:44:48",
    },
    {
        id : 3,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "마술 연습",
        teamThumbnail : '/images/showu/magic/portfolio6.jpg',
        category : "마술",
        meetDay : "목",
        meetPeriod : {
            time :"저녘",
            timeDetail : "20시 이후"
        }, 
        ages : "20대",
        gender : "남자",
        averageSkill :"프로 준비생",
        teamNotice : "안녕하십니까, 같이 마술  연습할  파트너 구합니다.",
        activityPeriod : {
            start : "24-11-09", //팀 활동 시작일
            end : "25-11-10"//팀 활동 종료일
        },
        status: "매칭 완료", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2025-01-03 16:44:48",
        updateAt : "2025-03-03 16:44:48",
    },
    {
        id : 4,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail :'/images/showu/acting/portfolio3.jpg',
        category : "연기",
        meetDay : "토",
        meetPeriod : {
            time :"낮",
            timeDetail : "12시-15시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"프로",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-11-10", //팀 활동 시작일
            end : "25-11-10" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2025-01-03 16:44:48",
        updateAt : "2025-03-03 16:44:48",
    },
    {
        id : 5,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : '/images/showu/acting/portfolio3.jpg',
        category : "연기",
        meetDay : "토",
        meetPeriod : {
            time :"낮",
            timeDetail : "12시-15시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"프로",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-11-10", //팀 활동 시작일
            end : "25-11-10" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2025-01-03 16:44:48",
        updateAt : "2025-03-03 16:44:48",
    },
    {
        id : 6,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(분당)",
        teamThumbnail : '/images/showu/music/portfolio2.jpg',
        category : "연기",
        meetDay : "월",
        meetPeriod : {
            time :"낮",
            timeDetail : "12시-15시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"아마추어",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-11-16", //팀 활동 시작일
            end : "25-06-10" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2025-01-03 16:44:48",
        updateAt : "2025-03-03 16:44:48",
    },
    {
        id : 7,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "보컬 연습",
        teamThumbnail : '/images/showu/magic/portfolio6.jpg',
        category : "음악",
        meetDay : "화",
        meetPeriod : {
            time :"오후",
            timeDetail : "15시-20시"
        }, 
        ages : "10대",
        gender : "여자",
        averageSkill :"비기너",
        teamNotice : "안녕하십니까, 입시 노래 연습 파트너 구합니다.",
        activityPeriod : {
            start : "24-11-16", //팀 활동 시작일
            end : "25-06-10" //팀 활동 종료일
        },
        status: "매칭 완료", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-30 16:44:48",
        updateAt : "2024-12-30 16:44:48",
    },
    {
        id : 8,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "마술 연습",
        teamThumbnail : '/images/showu/magic/magic5.jpg',
        category : "마술",
        meetDay : "목",
        meetPeriod : {
            time :"저녘",
            timeDetail : "20시 이후"
        }, 
        ages : "20대",
        gender : "남자",
        averageSkill :"프로 준비생",
        teamNotice : "안녕하십니까, 같이 마술  연습할  파트너 구합니다.",
        activityPeriod : {
            start : "24-11-16", //팀 활동 시작일
            end : "25-06-10" //팀 활동 종료일
        },
        status: "매칭 완료", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-30 16:44:48",
        updateAt : "2024-12-30 16:44:48",
    },
    {
        id : 9,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : '/images/showu/magic/portfolio3.jpg',
        category : "연기",
        meetDay : "토",
        meetPeriod : {
            time :"낮",
            timeDetail : "12시-15시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"프로",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-11-16", //팀 활동 시작일
            end : "25-06-10" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-30 16:44:48",
        updateAt : "2024-12-30 16:44:48",
    },
    {
        id : 10,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : '/images/showu/acting/acting4.jpg',
        category : "연기",
        meetDay : "토",
        meetPeriod : {
            time :"낮",
            timeDetail : "12시-15시"
        },
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"프로",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-11-16", //팀 활동 시작일
            end : "25-06-10" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-30 16:44:48",
        updateAt : "2024-12-30 16:44:48",
    },
    {
        id : 11,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(분당)",
        teamThumbnail :'/images/showu/music/portfolio2.jpg',
        category : "연기",
        meetDay : "금",
        meetPeriod : {
            time :"아침",
            timeDetail : "12시 이전"
        }, 
        ages : "40대",
        gender : "남녀무관",
        averageSkill :"초보",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-06-20", //팀 활동 시작일
            end : "24-11-15" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-30 16:44:48",
        updateAt : "2024-12-30 16:44:48",
    },
    {
        id : 12,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "보컬 연습",
        teamThumbnail : '/images/showu/music/music6.jpg',
        category : "음악",
        meetDay : "일",
        meetPeriod : {
            time :"오후",
            timeDetail : "15시-20시"
        }, 
        ages : "10대",
        gender : "여자",
        averageSkill :"세미프로",
        teamNotice : "안녕하십니까, 입시 노래 연습 파트너 구합니다.",
        activityPeriod : {
            start : "24-06-20", //팀 활동 시작일
            end : "24-11-15" //팀 활동 종료일
        },
        status: "매칭 완료", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-30 16:44:48",
        updateAt : "2024-12-30 16:44:48",
    },
    {
        id : 13,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "마술 연습",
        teamThumbnail : '/images/showu/magic/portfolio6.jpg',
        category : "마술",
        meetDay : "수",
        meetPeriod : {
            time :"오후",
            timeDetail : "15시-20시"
        }, 
        ages : "20대",
        gender : "남자",
        averageSkill :"프로 준비생",
        teamNotice : "안녕하십니까, 같이 마술  연습할  파트너 구합니다.",
        activityPeriod : {
            start : "24-06-20", //팀 활동 시작일
            end : "24-11-15" //팀 활동 종료일
        },
        status: "매칭 완료", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-30 16:44:48",
        updateAt : "2024-12-30 16:44:48",
    },
    {
        id : 14,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail :'/images/showu/music/portfolio2.jpg',
        category : "연기",
        meetDay : "일",
        meetPeriod : {
            time :"낮",
            timeDetail : "12시-15시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"프로",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-06-20", //팀 활동 시작일
            end : "24-11-15" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-30 16:44:48",
        updateAt : "2024-12-30 16:44:48",
    },
    {
        id : 15,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : '/images/showu/music/portfolio4.jpg',
        category : "연기",
        meetDay : "토",
        meetPeriod : {
            time :"낮",
            timeDetail : "12시-15시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"프로",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-06-20", //팀 활동 시작일
            end : "24-11-15" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-30 16:44:48",
        updateAt : "2024-12-30 16:44:48",
    },
    {
        id : 16,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(분당)",
        teamThumbnail : '/images/showu/music/portfolio1.jpg',
        category : "연기",
        meetDay : "월",
        meetPeriod : {
            time :"오후",
            timeDetail : "15시-20시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"아마추어",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-06-20", //팀 활동 시작일
            end : "24-11-15" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-25 11:44:48",
        updateAt : "2024-12-25 11:44:48",
    },
    {
        id : 17,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "보컬 연습",
        teamThumbnail : '/images/showu/acting/portfolio2.jpg',
        category : "음악",
        meetDay : "화",
        meetPeriod : {
            time :"오후",
            timeDetail : "15시-20시"
        }, 
        ages : "10대",
        gender : "여자",
        averageSkill :"비기너",
        teamNotice : "안녕하십니까, 입시 노래 연습 파트너 구합니다.",
        activityPeriod : {
            start : "24-06-20", //팀 활동 시작일
            end : "24-11-15" //팀 활동 종료일
        },
        status: "매칭 완료", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-25 11:44:48",
        updateAt : "2024-12-25 11:44:48",
    },
    {
        id : 18,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "마술 연습",
        teamThumbnail : '/images/showu/acting/acting4.jpg',
        category : "마술",
        meetDay : "수",
        meetPeriod : {
            time :"저녘",
            timeDetail : "20시 이후"
        }, 
        ages : "20대",
        gender : "남자",
        averageSkill :"프로 준비생",
        teamNotice : "안녕하십니까, 같이 마술  연습할  파트너 구합니다.",
        activityPeriod : {
            start : "24-06-20", //팀 활동 시작일
            end : "24-11-15" //팀 활동 종료일
        },
        status: "매칭 완료", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-25 11:44:48",
        updateAt : "2024-12-25 11:44:48",
    },
    {
        id : 19,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : '/images/showu/music/portfolio1.jpg',
        category : "연기",
        meetDay : "토",
        meetPeriod : {
            time :"오후",
            timeDetail : "15시-20시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"프로",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-07-20", //팀 활동 시작일
            end : "24-12-15" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-25 11:44:48",
        updateAt : "2024-12-25 11:44:48",
    },
    {
        id : 20,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : '/images/showu/magic/portfolio6.jpg',
        category : "연기",
        meetDay : "수",
        meetPeriod : {
            time :"낮",
            timeDetail : "12시-15시"
        }, 
        ages : "20대",
        gender : "남녀무관",
        averageSkill :"프로",
        teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
        activityPeriod : {
            start : "24-07-20", //팀 활동 시작일
            end : "24-12-15" //팀 활동 종료일
        },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        likeUser : "677630ae686ab95419a5a1dc",
        createAt : "2024-12-25 11:44:48",
        updateAt : "2024-12-25 11:44:48",
    },


]






// lessonReservationData


const lessonReservationData = [
    {
      id : 1,
      classId : '677950aa4793c615ee8eb4ac',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-15",
      createAt : "2025-01-04 11:44:48",

     },
    {
      id : 2,
      classId : '677950aa4793c615ee8eb4ac',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-21",
      createAt : "2025-01-04 11:44:48",
     },
    {
      id : 3,
      classId : '677950aa4793c615ee8eb4ac',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-21",
      createAt : "2025-01-04 11:44:48",
     },
    {
      id : 4,
      classId : '677950aa4793c615ee8eb4ad',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-22",
      createAt : "2025-01-04 11:44:48",
     },
    {
      id : 5,
      classId : '677950aa4793c615ee8eb4ad',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-22",
      createAt : "2025-01-04 11:44:48",
     },
    {
      id : 6,
      classId : '677950aa4793c615ee8eb4b0',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-22",
      createAt : "2025-01-04 11:44:48",
     },
    {
      id : 7,
      classId : '677950aa4793c615ee8eb4af',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-24",
      createAt : "2025-01-04 11:44:48",
     },
    {
      id : 8,
      classId : '677950aa4793c615ee8eb4ac',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-24",
      createAt : "2025-01-04 11:44:48",
     },
    {
      id : 9,
      classId : '677950aa4793c615ee8eb4ae',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-25",
      createAt : "2025-01-04 11:44:48",
     },
    {
      id : 10,
      classId : '677950aa4793c615ee8eb4b0',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-25",
      createAt : "2024-12-30 11:44:48",
     },
      {
      id : 11,
      classId : '677950aa4793c615ee8eb4ac',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-30",
      createAt : "2024-12-30 11:44:48",
     },
      {
      id : 12,
      classId : '677950aa4793c615ee8eb4ad',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-30",
      createAt : "2024-12-30 11:44:48",
     },
  {
      id : 13,
      classId : '677950aa4793c615ee8eb4af',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-24",
      createAt : "2024-12-30 11:44:48",
     },
    {
      id : 14,
      classId : '677950aa4793c615ee8eb4b0',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-24",
      createAt : "2024-12-30 11:44:48",
     },
    {
      id : 15,
      classId : '677950aa4793c615ee8eb4ad',
      userId : "677630ae686ab95419a5a1dc",
      name :  "677630ae686ab95419a5a1dc",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-25",
      createAt : "2024-12-30 11:44:48",
     },
     {
        id : 16,
        classId :'677950aa4793c615ee8eb4b0',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-15",
        createAt : "2024-12-30 11:44:48",
       },
      {
        id : 17,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : "2024-12-30 11:44:48",
       },
      {
        id : 18,
        classId : '677950aa4793c615ee8eb4ac',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : "2024-12-30 11:44:48",
       },
      {
        id : 19,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : "2024-12-30 11:44:48",
       },
      {
        id : 20,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : "2024-12-30 11:44:48",
       },
      {
        id : 21,
        classId : '677950aa4793c615ee8eb4b1', 
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : "2024-12-30 11:44:48",
       },
      {
        id : 22,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-30 11:44:48",
       },
      {
        id : 23,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-30 11:44:48",
       },
      {
        id : 24,
        classId : '677950aa4793c615ee8eb4b1', 
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : "2024-12-30 11:44:48",
       },
      {
        id : 25,
        classId : '677950aa4793c615ee8eb4af',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : "2024-12-30 11:44:48",
       },
        {
        id : 26,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : "2024-12-30 11:44:48",
       },
        {
        id : 27,
        classId : '677950aa4793c615ee8eb4b1',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : "2024-12-25 11:44:48",
       },
    {
        id :28,
        classId : '677950aa4793c615ee8eb4ae',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id :29,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 30,
        classId : '677950aa4793c615ee8eb4b1',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : "2024-12-25 11:44:48",
       },
       {
        id : 31,
        classId : '677950aa4793c615ee8eb4ac',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-15",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 32,
        classId : '677950aa4793c615ee8eb4af',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 33,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 34,
        classId : '677950aa4793c615ee8eb4ac',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 35,
        classId : '677950aa4793c615ee8eb4ae',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 36,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 37,
        classId : '677950aa4793c615ee8eb4af',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 38,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 39,
        classId : '677950aa4793c615ee8eb4ac',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 40,
        classId : '677950aa4793c615ee8eb4ac',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : "2024-12-25 11:44:48",
       },
        {
        id : 41,
        classId : '677950aa4793c615ee8eb4b1',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : "2024-12-25 11:44:48",
       },
        {
        id : 42,
        classId : '677950aa4793c615ee8eb4ac',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : "2024-12-25 11:44:48",
       },
    {
        id : 43,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 44,
        classId : '677950aa4793c615ee8eb4b1',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 45,
        classId : '677950aa4793c615ee8eb4b1',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : "2024-12-25 11:44:48",
       },
       {
        id : 46,
        classId : '677950aa4793c615ee8eb4af',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-15",
        createAt : "2024-12-25 11:44:48",
       },
      {
        id : 47,
        classId : '677950aa4793c615ee8eb4ac',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 48,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 49,
        classId : '677950aa4793c615ee8eb4ad',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 50,
        classId :'677950aa4793c615ee8eb4af',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 51,
        classId : '677950aa4793c615ee8eb4ae',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 52,
        classId : '677950aa4793c615ee8eb4ac',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 53,
        classId : '677950aa4793c615ee8eb4af',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 54,
        classId : '677950aa4793c615ee8eb4ac',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 55,
        classId : '677950aa4793c615ee8eb4ae',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : "2024-12-22 11:44:48",
       },
        {
        id : 56,
        classId : '677950aa4793c615ee8eb4af',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : "2024-12-22 11:44:48",
       },
        {
        id : 57,
        classId : '677950aa4793c615ee8eb4ae',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : "2024-12-22 11:44:48",
       },
    {
        id : 58,
        classId : '677950aa4793c615ee8eb4af',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 59,
        classId : '677950aa4793c615ee8eb4af',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : "2024-12-22 11:44:48",
       },
      {
        id : 60,
        classId : '677950aa4793c615ee8eb4ae',
        userId : "677630ae686ab95419a5a1dc",
        name :  "677630ae686ab95419a5a1dc",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : "2024-12-22 11:44:48",
       },
       
    ]
    