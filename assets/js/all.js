"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('Hello!');
$(document).ready(function () {
  //swiper
  var swiper = new Swiper('.topChoice', {
    spaceBetween: 30,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    autoplayStopOnLast: false,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    paginationType: "bullets",
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'
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
  }); // mobile img

  var swiper = new Swiper('.mobileImg', {
    navigation: {
      nextEl: '.mobile_next',
      prevEl: '.mobile_prev'
    },
    loop: true,
    autoplayStopOnLast: false,
    // loop false
    autoplay: {
      delay: 3000
    }
  }); // destination

  var zones = document.querySelectorAll('.zone li');
  var zoneInput = document.querySelector('.zoneInput');
  console.log(zoneInput);
  zones.forEach(function (zone, i) {
    zoneInput.value = '';
    zones[i].addEventListener('click', function () {
      zoneInput.classList.remove('d-none');

      if (zone == zones[0]) {
        zoneInput.value = 'Bangkok，Thailand';
      } else if (zone == zones[1]) {
        zoneInput.value = 'Osaka，Japan';
      } else if (zone == zones[2]) {
        zoneInput.value = 'Roma, Italy';
      } else if (zone == zones[3]) {
        zoneInput.value = 'Paris, France';
      } else if (zone == zones[4]) {
        zoneInput.value = 'Reykjavik, iceland';
      }
    });
  }); // index person

  var personQuantity = document.querySelectorAll('.personQuantity');
  var addPerson = document.querySelectorAll('.addPerson');
  var minusPerson = document.querySelectorAll('.minusPerson');
  var count = document.querySelector('.count');
  var change = document.querySelectorAll('.changeQty');
  var quantity = '';

  var _loop = function _loop(i) {
    addPerson[i].addEventListener('click', function () {
      count.classList.remove('d-none');
      personQuantity[i].value++;
    });
    minusPerson[i].addEventListener('click', function () {
      if (personQuantity[i].value <= 0) {
        personQuantity[i].value = 0;
        minusPerson[i].classList.add('disabled');
      } else {
        personQuantity[i].value--;
      }
    });
  };

  for (var i = 0; i < addPerson.length; i++) {
    _loop(i);
  }

  for (var _i = 0; _i < change.length; _i++) {
    change[_i].addEventListener('click', function () {
      if (personQuantity[0].value == 0 && personQuantity[1].value > 0) {
        quantity = "".concat(personQuantity[1].value, " child\u3001 ").concat(personQuantity[2].value, " room");
      } else if (personQuantity[1].value == 0 && personQuantity[0].value > 0) {
        quantity = "".concat(personQuantity[0].value, " adult\u3001 ").concat(personQuantity[2].value, " room");
      } else if (personQuantity[0].value == 0 && personQuantity[1].value == 0) {
        quantity = "".concat(personQuantity[2].value, " room");
      } else {
        quantity = "".concat(personQuantity[0].value, " adult\u3001").concat(personQuantity[1].value, " child\u3001").concat(personQuantity[2].value, " room");
      }

      count.value = quantity;
    });
  } // productDetail reserve input


  var roomQuantity = document.querySelectorAll('.roomQuantity');
  var addRoom = document.querySelectorAll('.addRoom');
  var minusRoom = document.querySelectorAll('.minusRoom');

  var _loop2 = function _loop2(_i2) {
    addRoom[_i2].addEventListener('click', function () {
      roomQuantity[_i2].value++;
    });

    minusRoom[_i2].addEventListener('click', function () {
      if (roomQuantity[_i2].value <= 0) {
        minusRoom[_i2].classList.add('disabled');
      } else {
        roomQuantity[_i2].value--;
      }
    });
  };

  for (var _i2 = 0; _i2 < addRoom.length; _i2++) {
    _loop2(_i2);
  } // alert animation


  $('.addRoom').click(function () {
    $('.alert').addClass('animate__slideInUp').removeClass('animate__slideOutDown').removeClass('d-none');
  });
  $('.cancelBtn').click(function () {
    $('.alert').addClass('animate__slideOutDown').removeClass('animate__slideInUp');
  }); // daterangepicker

  $(function () {
    var _locale;

    $('#picker').daterangepicker({
      autoUpdateInput: false,
      locale: (_locale = {
        cancelLabel: 'Clear',
        daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        format: "YYYY-MM-DD HH:mm:ss",
        //設定顯示格式
        applyLabel: '確定'
      }, _defineProperty(_locale, "cancelLabel", '取消'), _defineProperty(_locale, "customRangeLabel", '自定義'), _locale)
    });
    $('#picker').click(function (e) {
      e.preventDefault();
    });
    $('#picker').on('apply.daterangepicker', function (ev, picker, e) {
      $('input[name="datefilter"]').val("".concat(picker.startDate.format('YYYY-MM-DD'), " - ").concat(picker.endDate.format('YYYY-MM-DD')));
      $('.userDate').removeClass('d-none');
      $('.defaultText').addClass('d-none');
      $('.defaultText').removeClass('d-flex');
    });
  });
  $('#person_dropdown').on("click", function (e) {
    e.stopPropagation();
  }); // bangkok range

  $("#budget").slider({
    min: 800,
    max: 4000,
    range: true,
    values: [800, 4500],
    create: function create(e, ui) {
      var handle = {
        "width": "15px",
        "height": "15px",
        "text-align": "center",
        "border-radius": "50%",
        "background-color": "#6C51E2",
        "transform": "translateY(-2px)",
        "border": "1px solid #6C51E2"
      };
      var bar = {
        "background-color": "#6C51E2"
      };
      $(this).find(".ui-slider-range").css(bar);
      $(this).find(".ui-slider-handle").css(handle);
    },
    slide: function slide(e, ui) {
      var L = $("#budget").slider("values", 0);
      var H = $("#budget").slider("values", 1);
      $(".budget_value_L").html(L);
      $(".budget_value_H").html(H);
    }
  });
});
//# sourceMappingURL=all.js.map
