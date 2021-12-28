const canvas = document.querySelector("canvas");
canvas.width = canvas.clientWidth * devicePixelRatio;
canvas.height = canvas.clientHeight * devicePixelRatio;
const ctx = canvas.getContext("2d");

let targetProgress = 0;
let progress = 0;

function leftpad(num, length) {
  let str = num.toString();
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}

const IMAGE_COUNT = 1248;

function loadImages() {
  return new Promise((res) => {
    let images = [];
    let loadedCount = 0;
    for (let i = 1; i <= IMAGE_COUNT; i++) {
      const imageTitle = `frames/thumb${leftpad(i, 4)}.jpg`;
      const image = new Image();
      images.push(image);
      image.src = imageTitle;
      image.onload = () => {
        loadedCount++;
        if (loadedCount === IMAGE_COUNT) {
          res(images);
        }
      };
    }
  });
}

let images = null;
loadImages().then((data) => {
  console.log("loaded");
  images = data;
});

const loop = () => {
  targetProgress =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  progress += (targetProgress - progress) / 3;

  if (images) {
    const imageIndex = Math.round(progress * (IMAGE_COUNT - 1));

    ctx.drawImage(images[imageIndex], 0, 0);
  }
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);
