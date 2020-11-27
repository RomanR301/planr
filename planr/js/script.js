let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  $body: $('body'),
  init: function () {
      this.events();
      var advantages = new Swiper('.advantages-carousel', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.advantages-next',
            prevEl: '.advantages-prev',
          },
          pagination: {
            el: '.advantages-pagination',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
              autoHeight: true,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 30,
              autoHeight: false,
            },
            1200: {
              slidesPerView: 3,
            },
        }
      });
      var testimonials = new Swiper('.testimonials-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        watchOverflow: true,
        navigation: {
            nextEl: '.testimonials-next',
            prevEl: '.testimonials-prev',
          },
          pagination: {
            el: '.testimonial-pagination',
          },
      });
      $(document).ready(function() {
        $(".accordion__item .accordion__button").on("click", function(e) {
        e.preventDefault();
            if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).parent().find(".accordion__content").slideUp(300);
            } else {
            $(".accordion__item").removeClass("active");
            $(this).parent().addClass("active");
            $(".accordion__content").slideUp(200);
            $(this).parent().find(".accordion__content").slideDown(300);
            }
        });
      });
      
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
        }
    },
    openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      if($(window).width() < 767) {
        $(document).on('click', '.scroll-to', function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top - 80
          }, 500);
          $('body').removeClass('active');
          $('.navbar').removeClass('active');
          $('.hamburger').removeClass('open');
          
          return false;
  
        });
      } else {
        $(document).on('click', '.scroll-to', function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top - 130
          }, 500);
          $('body').removeClass('active');
          $('.navbar').removeClass('active');
          $('.hamburger').removeClass('open');
          
          return false;
  
        });
      }
    
  }
};

jQuery(function () {
  front.init();    
});


let langToggle = document.querySelector('.lang-select-wrapper') !== null;
if (langToggle) {
    (document).querySelector('.lang-select-wrapper').addEventListener('click', function() {
        this.querySelector('.lang-select').classList.toggle('open');
        for (const option of document.querySelectorAll(".lang-option")) {
            option.addEventListener('click', function() {

                if (!this.classList.contains('selected')) {
                    this.parentNode.querySelector('.lang-option.selected').classList.remove('selected');
                    this.classList.add('selected');
                    this.closest('.lang-select').querySelector('.lang-select__trigger span').textContent = this.textContent;
                }
            })
        }
        window.addEventListener('click', function(e) {
            const select1 = document.querySelector('.lang-select')
            if (!select1.contains(e.target)) {
                select1.classList.remove('open');
            }
        });
    })
}