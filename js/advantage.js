const Advantage = {
  LIST: [
    "Leading Technology",
    "Customized Service",
    "Fair Pricing Model",
    "Fast and Reliable",
  ],
  init: function () {
    let html = "";
    this.LIST.forEach((item, index) => {
      html += `
      <div class="list-item">
        <div class="list-num">0${index + 1}</div>
        <div class="list-content">
          <div class="list-content-title">${item}</div>
        </div>
      </div>
    `;
    });

    $(".advantages .list-box").html(html);
  },
};

export default Advantage;
