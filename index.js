const power = document.querySelector(".power");
const layer_off = document.querySelector(".off");
const parent_box = document.querySelector(".parent");
const button_animate = document.querySelector(".animation");
const container = document.querySelector(".container");
const sorry = document.querySelector(".sorry");

const face = document.querySelector(".face");
const back = document.querySelector(".back");
const side_right = document.querySelector(".side-right");
const side_left = document.querySelector(".side-left");
const top_div = document.querySelector(".top");
const bottom_div = document.querySelector(".bottom");
const iframe = document.querySelector(".face iframe");
const message_iframe = document.querySelector(".message_iframe");

const input_width = document.querySelector(".con-form .width");
const input_height = document.querySelector(".con-form .height");
const input_dis = document.querySelector(".con-form .distance");
const input_url = document.querySelector(".url");
const button_apply = document.querySelector(".con-form .apply");

const setting_icon = document.querySelector(".setting");
const form_div = document.querySelector(".con-form");

var width = 320,
  height = 500,
  dis = 18,
  l,
  r,
  t,
  b,
  w,
  h,
  url;

power.onclick = () => {
  layer_off.classList.toggle("open");
  console.log("open");
};

// button_animate.onclick = () => {
//   parent_box.classList.toggle("rotate");
// };
button_apply.onclick = (e) => {
  e.preventDefault();
  width = parseInt(input_width.value);
  height = parseInt(input_height.value);
  dis = parseInt(input_dis.value);

  if (input_url.value != "") {
    iframe.src = input_url.value;
  }

  if (
    width == 0 ||
    height == 0 ||
    dis == 0 ||
    input_width.value == "" ||
    input_height.value == "" ||
    input_dis.value == "" ||
    input_height.value > 680 ||
    input_width.value > 800
  ) {
    return false;
  } else {
    w = 2 * dis;
    h = 2 * dis;
    l = width - dis;
    r = -dis;
    t = height - dis;
    b = -dis;

    face.style.width = width + "px";
    face.style.height = height + "px";
    face.style.transform = ` translateZ(${dis + "px"})`;

    back.style.width = width + "px";
    back.style.height = height + "px";
    back.style.transform = `rotateY(180deg) translateZ(${dis + "px"})`;

    side_right.style.width = w + "px";
    side_right.style.height = height + "px";
    side_right.style.transform = `rotateY(90deg) translateZ(${l + "px"})`;

    side_left.style.width = w + "px";
    side_left.style.height = height + "px";
    side_left.style.transform = `rotateY(90deg) translateZ(${r + "px"})`;

    top_div.style.width = width + "px";
    top_div.style.height = h + "px";
    top_div.style.transform = `rotateX(-90deg) translateZ(${
      t + "px"
    }) rotate(180deg)`;

    bottom_div.style.width = width + "px";
    bottom_div.style.height = h + "px";
    bottom_div.style.transform = `rotateX(-90deg) translateZ(${
      b + "px"
    }) rotate(180deg)`;
  }
};

setting_icon.onclick = () => {
  form_div.classList.toggle("hide_setting");
};

const rangeX = document.getElementById("rangeX");
rangeX.oninput = () => {
  parent_box.style.transform = `rotate(${range.value + "deg"}) rotateX(${
    rangeX.value + "deg"
  }) rotateY(${rangeY.value + "deg"})`;
};

const range = document.getElementById("range");
range.oninput = () => {
  parent_box.style.transform = `rotate(${range.value + "deg"}) rotateX(${
    rangeX.value + "deg"
  }) rotateY(${rangeY.value + "deg"})`;
};

const rangeY = document.getElementById("rangeY");
rangeY.oninput = () => {
  parent_box.style.transform = `rotate(${range.value + "deg"}) rotateX(${
    rangeX.value + "deg"
  }) rotateY(${rangeY.value + "deg"})`;
};

if (window.innerWidth < 1199) {
  container.classList.add("display");
  form_div.classList.add("display");
  sorry.classList.add("display_sorry");
}

if (window.innerWidth > 1199) {
  container.classList.remove("display");
  form_div.classList.remove("display");
  sorry.classList.remove("display_sorry");
}

window.onresize = () => {
  if (window.innerWidth < 1199) {
    container.classList.add("display");
    form_div.classList.add("display");
    sorry.classList.add("display_sorry");
  }

  if (window.innerWidth > 1199) {
    container.classList.remove("display");
    form_div.classList.remove("display");
    sorry.classList.remove("display_sorry");
  }
};

// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//     return false;
//   }
// };
