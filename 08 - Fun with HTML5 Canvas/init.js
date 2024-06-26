const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

ctx.lineWidth = 50;
let isDrawing = false;
// indicate where the line start and end
let lastX = 0;
let lastY = 0;
let hue = 0;
let ctxWidth = true;

const draw = (e) => {
  if (!isDrawing) {
    return;
  }
  console.log(e);
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;

  if (hue > 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    ctxWidth = !ctxWidth;
  }
  if (ctxWidth === true) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
};
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // lastX = e.offsetX
  // lastY = e.offsetY
  // =
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
