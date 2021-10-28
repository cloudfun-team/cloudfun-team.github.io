import { ready } from 'https://lsong.org/scripts/dom.js';
import { rand } from 'https://lsong.org/scripts/math.js';
import { Tween } from 'https://lsong.org/scripts/animate/tween.js';

const randomColor = () => {
  const r = rand(255);
  const g = rand(255);
  const b = rand(255);
  return { r, g, b };
};

ready(async () => {

  (function loop() {
    const color1 = randomColor();
    const color2 = randomColor();
    new Tween({
      duration: 5000,
      easing: 'bounceOut',
      from: color1,
      to: color2,
      onUpdate(state) {
        const { r, g, b } = state;
        console.log(state);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
      },
      onFinish() {
        setTimeout(loop);
      }
    }).start();
  })();

});