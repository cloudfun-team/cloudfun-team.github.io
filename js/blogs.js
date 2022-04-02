const Blogs = {
  BLOGS: [
    {
      blogUrl: "/imgs/blogs/yamaha.jpeg",
      name: "The History of Yamaha",
      date: "2022.3.31",
      jumpUrl: "https://bytedance.feishu.cn/wiki/wikcnv8RKxSJWH1oULKYmhnGgwg",
    },
    {
      blogUrl: "/imgs/blogs/vr.png",
      name: "浅谈 VR 虚拟现实",
      date: "2022.2.17",
      jumpUrl: "https://bytedance.feishu.cn/wiki/wikcnIU1LjtXrfYl9S0RZ1VfXee",
    },
    {
      blogUrl: "/imgs/blogs/langrensha.jpeg",
      name: "初识狼人杀",
      date: "2022.1.20",
      jumpUrl: "https://bytedance.feishu.cn/wiki/wikcnlIft4Z3h3C5IPMfPcgGNfh",
    },
    {
      blogUrl: "/imgs/blogs/bagua.jpeg",
      name: "你可以知道的“神秘学”",
      date: "2022.1.6",
      jumpUrl: "https://bytedance.feishu.cn/wiki/wikcn5tC3hSszCtYbO6pFZZxYgg",
    },
    {
      blogUrl: "/imgs/blogs/xiachu.jpeg",
      name: "《铂雨的下厨日记》",
      date: "2022.1.19",
      jumpUrl: "https://bytedance.feishu.cn/wiki/wikcncHUeiywMa9CKJWT1QpbTRh",
    },
    {
      blogUrl: "/imgs/blogs/edg.png",
      name: "谈谈 EDG 夺冠背后的狂欢",
      date: "2021.11.11",
      jumpUrl: "https://bytedance.feishu.cn/wiki/wikcn5wIEhMwVSi6gjIxqD2aogc",
    },
    {
      blogUrl: "/imgs/blogs/funk.png",
      name: "随节奏起舞，Funk乐介绍",
      date: "2021.9.22",
      jumpUrl: "https://bytedance.feishu.cn/wiki/wikcnogjmwn94sNfOIP7qEk9lXe",
    },
  ],
  init: function () {
    let blogHtml = "";
    this.BLOGS.forEach((item) => {
      blogHtml += `
      <div class="blogs-card" data-jump="${item.jumpUrl}">
        <img class="blogs-img" src="${item.blogUrl}" alt="">
        <div class="blogs-title">${item.name}</div>
        <div class="blogs-time">${item.date}</div>
      </div>
    `;
    });

    $(".blogs .content-box").html(blogHtml);
    this.events();
  },

  events: function () {
    $(".blogs-card").on("click", function () {
      const jumpUrl = $(this).data("jump");
      if (jumpUrl !== "undefined") {
        window.open(jumpUrl);
      }
    });
  },
};

export default Blogs;
