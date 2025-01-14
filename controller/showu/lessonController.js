import Lesson from '../../models/showu/lessonSchema.js'

const lessonList = async(req,res)=>{
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
    
// 레슨 리스트 삽입 
try {
    const insertLessonData = await Lesson.insertMany(lessonListData);
    console.log("리스트가 추가 되었습니다.",insertLessonData);
    res.status(201).json({
        message : "레슨이 성공적으로 등록되었습니다.",
        insertLessonData,
    });
}catch (error) {
    console.error("등록 실패 :", error.message);
    res.status(500).json({
        message: "레슨 등록이 실패 되었습니다.",
        error : error.message,
    });
}
} 

// 레슨 리스트 

const getLessonListData = async(req, res) => {
    try {
        const lessonList = await Lesson.find();
        res.status(200).json(lessonList);
    } catch(error) {
        console.error("리스트를 불러오는데 실패 했습니다.", error.message);
        res.status(500).json("리스트를 가져오는데 실패 했습니다.")
    }
}

const getLessonListDetailsData = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "유효한 레슨 ID를 제공해야 합니다." });
        }

        const details = await Lesson.findOne({ _id: id });

        if (!details) {
            return res.status(404).json({ message: "레슨을 찾을 수 없습니다." });
        }

        res.json(details);
    } catch (error) {
        console.error("조회 오류:", error);
        res.status(500).json({ message: "서버 오류" });
    }
};






export {lessonList , getLessonListData , getLessonListDetailsData }
