const User = {
  USER: [
    { name: "安思科", desc: "大佬", photoUrl: "/imgs/user/ansike.jpeg" },
    // { name: "白亚兵", desc: "大佬", photoUrl: "/imgs/user/baiyabing.jpeg" },
    { name: "陈广林", desc: "大佬", photoUrl: "/imgs/user/chenguanglin.jpeg" },
    // { name: "陈健", desc: "大佬", photoUrl: "/imgs/user/chenjian.jpeg" },
    { name: "范舒宁", desc: "大佬", photoUrl: "/imgs/user/fanshuning.jpeg" },
    { name: "丰凡", desc: "大佬", photoUrl: "/imgs/user/fengfan.jpeg" },
    { name: "冯秋明", desc: "大佬", photoUrl: "/imgs/user/fengqiuming.jpeg" },
    { name: "冯宇林", desc: "大佬", photoUrl: "/imgs/user/fengyulin.jpeg" },
    // { name: "冯健", desc: "大佬", photoUrl: "/imgs/user/fengjian.jpeg" },
    { name: "葛羽航", desc: "大佬", photoUrl: "/imgs/user/geyuhang.jpeg" },
    { name: "韩毅", desc: "大佬", photoUrl: "/imgs/user/hanyi.jpeg" },
    { name: "胡纪清", desc: "大佬", photoUrl: "/imgs/user/hujiqing.jpeg" },
    { name: "李辉", desc: "大佬", photoUrl: "/imgs/user/lihui.jpeg" },
    { name: "李科", desc: "大佬", photoUrl: "/imgs/user/like.jpeg" },
    { name: "林波", desc: "大佬", photoUrl: "/imgs/user/linbo.jpeg" },
    { name: "刘念", desc: "大佬", photoUrl: "/imgs/user/liunian.jpeg" },
    { name: "刘松", desc: "大佬", photoUrl: "/imgs/user/liusong.jpeg" },
    { name: "龙银笛", desc: "大佬", photoUrl: "/imgs/user/longyindi.jpeg" },
    { name: "罗瑶", desc: "大佬", photoUrl: "/imgs/user/luoyao.jpeg" },
    // { name: "毛佳丽", desc: "大佬", photoUrl: "/imgs/user/maojiali.jpeg" },
    { name: "马晓敏", desc: "大佬", photoUrl: "/imgs/user/maxiaomin.jpeg" },
    { name: "乔天阳", desc: "大佬", photoUrl: "/imgs/user/qiaotianyang.jpeg" },
    { name: "王东杰", desc: "大佬", photoUrl: "/imgs/user/wangdongjie.jpeg" },
    // { name: "王樊", desc: "大佬", photoUrl: "/imgs/user/wangfan.jpeg" },
    { name: "吴小龙", desc: "大佬", photoUrl: "/imgs/user/wuxiaolong.jpeg" },
    // { name: "徐远志", desc: "大佬", photoUrl: "/imgs/user/xuyuanzhi.jpeg" },
    // { name: "杨建峰", desc: "大佬", photoUrl: "/imgs/user/yangjianfeng.jpeg" },
    { name: "张铂雨", desc: "大佬", photoUrl: "/imgs/user/zhangboyu.jpeg" },
    { name: "赵越伟", desc: "大佬", photoUrl: "/imgs/user/zhaoyuewei.jpeg" },
    {
      name: "点我内推",
      desc: "大佬",
      photoUrl: "/imgs/user/waiting.jpg",
      jumpUrl: "https://job.toutiao.com/s/NVmJvo1",
    },
  ],
  init: function () {
    let userHtml = "";
    this.USER.forEach((item) => {
      userHtml += `
      <div class="user-card">
        <div class="user-info" data-jump="${item.jumpUrl}">
          <div class="user-name">${item.name}</div>
        </div>
        <img class="user-photo" src="${item.photoUrl}" alt="${item.name}">
      </div>
    `;
    });

    $(".user-box").html(userHtml);
    this.events();
  },

  events: function () {
    $(".user-info").on("click", function () {
      const jumpUrl = $(this).data("jump");
      if (jumpUrl !== "undefined") {
        window.open(jumpUrl);
      }
    });

    // 人物介绍
    // $(".user-card").hover(
    //   function () {
    //     $(this).find(".user-info").fadeIn(300);
    //   },
    //   function () {
    //     $(this).find(".user-info").fadeOut(300);
    //   }
    // );
  },
};

export default User;
