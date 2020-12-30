console.log('Hello!');

$(document).ready(() => {
  //swiper
  var swiper = new Swiper ('.topChoice', {
    spaceBetween: 30,
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView : 4,
    autoplayStopOnLast: false, // loop false also
    // If we need pagination
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
  
});

