// 레슨 데이터


const lessonListData = [
    {
        id : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], 
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 2,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 3,
        userId :"677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 4,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 5,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], 
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 6,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 7,
        userId :"677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 8,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 9,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], 
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 10,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 11,
        userId :"677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 12,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 13,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], 
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 14,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 15,
        userId :"677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 16,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 17,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], 
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 18,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 19,
        userId :"677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 20,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 21,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], 
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 22,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 23,
        userId :"677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },
    {
        id : 24,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
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
                [
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
            ], //경력
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
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    },


]








//  teamData

const teamListData = [
    {
        id : 1,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(분당)",
        teamThumbnail : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 2,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "보컬 연습",
        teamThumbnail : 'https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg',
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 승인", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 3,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "마술 연습",
        teamThumbnail : "https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 승인", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 4,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 5,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 6,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(분당)",
        teamThumbnail : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 7,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "보컬 연습",
        teamThumbnail : 'https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg',
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 승인", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 8,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "마술 연습",
        teamThumbnail : "https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 승인", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 9,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 10,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 11,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(분당)",
        teamThumbnail : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 12,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "보컬 연습",
        teamThumbnail : 'https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg',
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 승인", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 13,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "마술 연습",
        teamThumbnail : "https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 승인", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 14,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 15,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 16,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(분당)",
        teamThumbnail : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 17,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "보컬 연습",
        teamThumbnail : 'https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg',
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 승인", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 18,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "마술 연습",
        teamThumbnail : "https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 승인", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 19,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },
    {
        id : 20,
        userId : "677630ae686ab95419a5a1dc",
        teamName : "아마추어 연기 연습(서울)",
        teamThumbnail : "https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg",
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
        // activityPeriod : {
        //     start : "24-11-16", //팀 활동 시작일
        //     end : { type : Date, required : true }, //팀 활동 종료일
        // },
        status: "매칭 대기", //팀 매칭 승인 상태
        count : 300, 
        likeCount : 30,
        // createAt : {type: String, default :getCurrentTime },
        // updateAt : {type : String, default : getCurrentTime},
    },


]






// lessonReservationData


const lessonReservationData = [
    {
      id : 1,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-15",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 2,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-21",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 3,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-21",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 4,
      classId : 2,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-22",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 5,
      classId : 2,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-22",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 6,
      classId : 3,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-22",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 7,
      classId : 4,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-24",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 8,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-24",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 9,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-25",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 10,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-25",
      createAt : {type : String, default : getCurrentTime},
     },
      {
      id : 11,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-30",
      createAt : {type : String, default : getCurrentTime},
     },
      {
      id : 12,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-30",
      createAt : {type : String, default : getCurrentTime},
     },
  {
      id : 13,
      classId : 4,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-24",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 14,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-24",
      createAt : {type : String, default : getCurrentTime},
     },
    {
      id : 15,
      classId : 1,
      userId : "677630ae686ab95419a5a1dc",
      userName : "홍길동",
      phoneNumber : "010-9999-9999",
      email : "test123@gmail.com",
      memo : "안녕하세요 레슨관련 문의 남깁니다." ,
      date : "2025-01-25",
      createAt : {type : String, default : getCurrentTime},
     },
     {
        id : 16,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-15",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 17,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 18,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 19,
        classId : 2,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 20,
        classId : 2,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 21,
        classId : 3,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 22,
        classId : 4,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 23,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 24,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 25,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : {type : String, default : getCurrentTime},
       },
        {
        id : 26,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : {type : String, default : getCurrentTime},
       },
        {
        id : 27,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : {type : String, default : getCurrentTime},
       },
    {
        id :28,
        classId : 4,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id :29,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 30,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : {type : String, default : getCurrentTime},
       },
       {
        id : 31,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-15",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 32,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 33,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 34,
        classId : 2,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 35,
        classId : 2,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 36,
        classId : 3,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 37,
        classId : 4,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 38,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 39,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 40,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : {type : String, default : getCurrentTime},
       },
        {
        id : 41,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : {type : String, default : getCurrentTime},
       },
        {
        id : 42,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : {type : String, default : getCurrentTime},
       },
    {
        id : 43,
        classId : 4,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 44,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 45,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : {type : String, default : getCurrentTime},
       },
       {
        id : 46,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-15",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 47,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 48,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-21",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 49,
        classId : 2,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 50,
        classId : 2,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 51,
        classId : 3,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-22",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 52,
        classId : 4,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 53,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 54,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 55,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : {type : String, default : getCurrentTime},
       },
        {
        id : 56,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : {type : String, default : getCurrentTime},
       },
        {
        id : 57,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-30",
        createAt : {type : String, default : getCurrentTime},
       },
    {
        id : 58,
        classId : 4,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 59,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-24",
        createAt : {type : String, default : getCurrentTime},
       },
      {
        id : 60,
        classId : 1,
        userId : "677630ae686ab95419a5a1dc",
        userName : "홍길동",
        phoneNumber : "010-9999-9999",
        email : "test123@gmail.com",
        memo : "안녕하세요 레슨관련 문의 남깁니다." ,
        date : "2025-01-25",
        createAt : {type : String, default : getCurrentTime},
       },
       
    ]
    