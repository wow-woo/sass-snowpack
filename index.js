import "./sass/style.sass";
import { greeting } from "./hello_world";

greeting();

import confetti from "canvas-confetti";

const init = async () => {
  confetti.create(document.getElementById("canvas"), {
    resize: true,
    useWorker: true,
  })({ particleCount: 200, spread: 200 });
  await setTimeout(() => console.log("haha", 300));
};
setInterval(init, 10000);
