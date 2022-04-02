const $ = jQuery;
import Advantage from "./advantage.js";
import Blogs from "./blogs.js";
import User from "./user.js";

$(document).ready(function () {
  const status = {
    hasWhiteBackgroud: false,
    navWithLogo: false,
  };

  const app = {
    SECTION_TOP: {},
    init: function () {
      Advantage.init();
      Blogs.init();
      User.init();

      $("html").animate({ scrollTop: 0 }, 500, "swing");
      this.getSectionScrollTop();
      this.winScroll();
      this.events();
      this.initSwiper();
    },

    initSwiper: function () {
      var swiper = new Swiper(".swiper", {
        loop: true, // 循环模式选项
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        },
      });
    },

    // 页面滚动
    winScroll: function () {
      const self = this;
      $(window).scroll(function (e) {
        const scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        self.activeNavItem(scrollTop);
        if (scrollTop > 115 && !status.hasWhiteBackgroud) {
          $("header").addClass("whiteBackgroud");
          $(".circle-bg").hide();
          status.hasWhiteBackgroud = true;
        }
        if (scrollTop < 115 && status.hasWhiteBackgroud) {
          $("header").removeClass("whiteBackgroud");
          $(".circle-bg").show();
          status.hasWhiteBackgroud = false;
        }
        if (scrollTop > 400 && !status.navWithLogo) {
          $(".nav-box").animate({ marginLeft: 120 }, 300);
          $(".nav-logo").show().delay(300);
          status.navWithLogo = true;
        }
        if (scrollTop < 400 && status.navWithLogo) {
          $(".nav-logo").hide();
          $(".nav-box").animate({ marginLeft: 0 }, 200);
          status.navWithLogo = false;
        }
      });
    },

    // 滚动动画
    scrollTo: function ($this) {
      const id = $this[0]?.id;
      const scrollTop = $(`.${id}`).offset().top;
      $("html").animate({ scrollTop }, 500, "swing");
    },

    // 获取 section 的 scrollTop
    getSectionScrollTop: function () {
      this.SECTION_TOP = {
        head: $(".head").offset().top,
        advantages: $(`.advantages`).offset().top,
        blogs: $(`.blogs`).offset().top,
        joinus: $(`.joinus`).offset().top,
      };
    },

    // 滚动激活 nav
    activeNavItem: function (scrollTop) {
      const OFFSET = 200;

      if (scrollTop >= 0 && scrollTop <= this.SECTION_TOP.head) {
        $("#head").addClass("active").siblings().removeClass("active");
        return;
      }

      if (
        scrollTop >= this.SECTION_TOP.advantages - OFFSET &&
        scrollTop <= this.SECTION_TOP.blogs - OFFSET
      ) {
        $("#advantages").addClass("active").siblings().removeClass("active");
        return;
      }

      if (
        scrollTop > this.SECTION_TOP.blogs - OFFSET &&
        scrollTop <= this.SECTION_TOP.joinus - OFFSET
      ) {
        $("#blogs").addClass("active").siblings().removeClass("active");
        return;
      }

      if (scrollTop > this.SECTION_TOP.joinus - OFFSET) {
        $("#joinus").addClass("active").siblings().removeClass("active");
        return;
      }
    },

    // 事件集合
    events: function () {
      const self = this;
      // 导航切换
      $(".nav-box").on("click", ".nav-item", function (e) {
        const $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        self.scrollTo($this);
      });

      // 人物介绍
      $(".user-card").hover(
        function () {
          $(this).find(".user-info").fadeIn(300);
        },
        function () {
          $(this).find(".user-info").fadeOut(300);
        }
      );
    },
  };

  app.init();
});
