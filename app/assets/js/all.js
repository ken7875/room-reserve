console.log('Hello!');

$(document).ready(() => {
  //swiper
  var swiper = new Swiper ('.topChoice', {
    spaceBetween: 30,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView : 4,
    autoplayStopOnLast: false,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    paginationType: "bullets",
    
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    // Distance between slides in px.
    breakpoints: {
      // when window width is >= 414px
      414: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
  
  // mobile img
  var swiper = new Swiper('.mobileImg', {
    navigation: {
      nextEl: '.mobile_next',
      prevEl: '.mobile_prev',
    },
    loop: true,
    autoplayStopOnLast: false, // loop false
    autoplay: {
      delay: 3000,
    },
  });
  // destination
  let zones = document.querySelectorAll('.zone li');
  let zoneInput = document.querySelector('.zoneInput');
  console.log(zoneInput)
  zones.forEach((zone, i) => {
    zoneInput.value = ''
    zones[i].addEventListener('click', function(){
      zoneInput.classList.remove('d-none')
      if(zone == zones[0]){
        zoneInput.value = 'Bangkok，Thailand'
      }else if(zone == zones[1]){
        zoneInput.value = 'Osaka，Japan'
      }else if(zone == zones[2]){
        zoneInput.value = 'Roma, Italy'
      }else if(zone == zones[3]){
        zoneInput.value = 'Paris, France'
      }else if(zone == zones[4]){
        zoneInput.value = 'Reykjavik, iceland'
      }
    })
  })
  // index person
  let personQuantity = document.querySelectorAll('.personQuantity');
  let addPerson = document.querySelectorAll('.addPerson');
  let minusPerson = document.querySelectorAll('.minusPerson');
  let count = document.querySelector('.count');
  let change = document.querySelectorAll('.changeQty')
  let quantity = ''  
  for(let i=0;i<addPerson.length;i++){
    addPerson[i].addEventListener('click', function(){
      count.classList.remove('d-none')
      personQuantity[i].value ++;
    });
    minusPerson[i].addEventListener('click', function(){
      if(personQuantity[i].value <= 0){
        personQuantity[i].value = 0
        minusPerson[i].classList.add('disabled');
      }else{
        personQuantity[i].value --
      }
    })
  }
  for(let i=0; i<change.length; i++){
    change[i].addEventListener('click', function() {
      if(personQuantity[0].value == 0 && personQuantity[1].value > 0){  
        quantity = `${personQuantity[1].value} child、 ${personQuantity[2].value} room`
      }else if(personQuantity[1].value == 0 && personQuantity[0].value>0){
        quantity = `${personQuantity[0].value} adult、 ${personQuantity[2].value} room`
      }else if(personQuantity[0].value == 0  && personQuantity[1].value == 0){
        quantity = `${personQuantity[2].value} room`
      }else{
        quantity = `${personQuantity[0].value} adult、${personQuantity[1].value} child、${personQuantity[2].value} room`
      }
      count.value = quantity
    })
  }

  // productDetail reserve input
  var roomQuantity = document.querySelectorAll('.roomQuantity');
  var addRoom = document.querySelectorAll('.addRoom');
  var minusRoom = document.querySelectorAll('.minusRoom');

  for(let i=0;i<addRoom.length;i++){
    addRoom[i].addEventListener('click', function(){
      roomQuantity[i].value ++;
    });
    minusRoom[i].addEventListener('click', function(){
      if(roomQuantity[i].value <= 0){
        minusRoom[i].classList.add('disabled');
      }else{
        roomQuantity[i].value --
      }
    })
  }

  // alert animation
  $('.addRoom').click(()=>{
    $('.alert').addClass('animate__slideInUp').removeClass('animate__slideOutDown').removeClass('d-none')
  });
  $('.cancelBtn').click(() =>{
    $('.alert').addClass('animate__slideOutDown').removeClass('animate__slideInUp')
  })
  // daterangepicker
  $(function() {

    $('#picker').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear',
            daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            format: "YYYY-MM-DD HH:mm:ss", //設定顯示格式
            applyLabel: '確定', //確定按鈕文字
            cancelLabel: '取消', //取消按鈕文字
            customRangeLabel: '自定義',
        }
    });
    $('#picker').click((e) => {
      e.preventDefault()
    })
    $('#picker').on('apply.daterangepicker', function(ev, picker, e) {
      $('input[name="datefilter"]').val(`${picker.startDate.format('YYYY-MM-DD')} - ${picker.endDate.format('YYYY-MM-DD')}`)
      $('.userDate').removeClass('d-none')
      $('.defaultText').addClass('d-none')
      $('.defaultText').removeClass('d-flex')
    })
  });
  $('#person_dropdown').on("click",function (e) {
    e.stopPropagation();
  })

  // bangkok range
  $("#budget").slider({
    min: 800,
    max: 4000,
    range: true,
    values: [800, 4500],
    create: function(e, ui) {
      var handle={"width":"15px","height":"15px","text-align":"center","border-radius":"50%","background-color":"#6C51E2","transform":"translateY(-2px)","border":"1px solid #6C51E2"};
      var bar ={"background-color":"#6C51E2"}
      $(this).find(".ui-slider-range").css(bar);
      $(this).find(".ui-slider-handle").css(handle);
      },
    slide: function(e, ui) {
      var L=$("#budget").slider("values", 0);
      var H=$("#budget").slider("values", 1);
      $(".budget_value_L").html(L);
      $(".budget_value_H").html(H);
      }
    });
});
