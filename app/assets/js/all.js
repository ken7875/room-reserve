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
            cancelLabel: 'Clear'
        }
    });
  
    $('#picker').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });
  
    $('#picker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
    
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

