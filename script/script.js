//1. 모바일 메뉴 숨기기
//객체 = 모바일 메뉴 m_nav_open
//객체.속성 style.display
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체 =햄버거 메뉴 m_nav, 모바일 메뉴 m_nav_open
//3. x 버튼 클릭 시 모바일 메뉴 숨기기
//객체 = x 버튼 close, 모바일 메뉴 m_nav_open
//변수생성
const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
//정상출력확인
console.log(m_nav_open, m_nav, close);
//1.모바일 메뉴 숨기기
m_nav_open.style.display = 'none';
//2.햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체.이벤트
m_nav.addEventListener('click',function(){
    //2-2.모바일 메뉴 보이기
    m_nav_open.style.display = 'block';
})
close.addEventListener('click',function(){
    m_nav_open.style.display = 'none';
})

// main-swiper-slide
// const 변수명 = new Swiper('적용대상');
// const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    //자동재생
    autoplay:{
        delay:10000,//슬라이드 간격 (기본3초(3000)정도) 1초=1000
        disableOnInteraction:false //사진을 옆으로 넘겨도 오토플레이로 넘어감
    },
    loop:true, //마지막에서 처음으로 넘어갈때 자연스럽게
    effect:'fade', //제자리 자연스러운 변경
    navigation: { //이전,다음 내비게이션 연결
        // next,prev 객체 연결 시 부모를 안적으면
        // body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    }
    // direction:'vertical' //수직변경
});
/* const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
    navigation: {
        nextEl: '#pawin_slide2 .swiper-button-next',
        prevEl: '#pawin_slide2 .swiper-button-prev',
    }
}) */
//pawin-slide2
const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade'
});
//입양정보 slide
const dog_info_slide = new Swiper('#dog_info_slide',{
    slidesPerView:'auto',//breakpoints옵션추가시 'auto', or 슬라이드가 4개가 보이게 하겠다 - 한번에 보이는 슬라이드 개수
    spaceBetween:20, //슬라이드 사이 여백
    autoplay:{delay:1000},
    loop:true,
    //swiper-slide 반응형 웹 옵션
    breakpoints:{
        //해상도:{옵션:값} , 
        //해상도 순서는 작은해상도에서 큰 해상도 순으로 작성
        // 700:{slidesPerView:2}, //700이상일때
        900:{slidesPerView:3},//900 이상일때
        1160:{slidesPerView:4} //1160이상일 경우 슬라이드 4개를 표시
    },
});