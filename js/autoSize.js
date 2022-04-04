const AutoSize = {
  init: function () {
    const docEl = document.documentElement;
    const resizeEvt =
      "orientationchange" in window ? "orientationchange" : "resize";
    const recalc = function () {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth || clientWidth >= 1200) return;
      // 把document的fontSize大小设置成跟窗口成一定比例的大小，从而实现响应式效果。
      // docEl.style.fontSize = 100 * (调试设备宽度 / 设计图宽度) + 'px';
      // 在写页面的过程中保持 调试设备宽度 等于 设计图宽度 就可以。
      // 这样就又可以愉快的使用123px是1.23rem的计算了
      docEl.style.fontSize = 100 * (clientWidth / 390) + "px";
    };
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    recalc();
  },
};

export default AutoSize;
