const arrBtn = [
  ["AC", "CE", "√", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["-/+", "0", ".", "="],
];

function CreateBtn(value) {
  let btn = document.createElement("button");
  btn.setAttribute("class", "btn");
  btn.textContent = value;
  return btn;
}

const buttons = document.querySelector("#buttons");

for (let arr of arrBtn) {
  for (let value of arr) {
    buttons.append(CreateBtn(value));
  }
}

const a = document.querySelector("#a");
const sign = document.querySelector("#sign");
const b = document.querySelector("#b");
const equal = document.querySelector("#equally");
const num = document.querySelector("#num");
const square = document.querySelector("#square");

buttons.addEventListener("click", (event) => {
  let click = event.target.textContent;
  if (event.target.tagName === "BUTTON") {
    switch (click) {
      case "+":
      case "-":
      case "*":
      case "/":
        if (
          num.value !== "" &&
          sign.textContent === "" &&
          equal.textContent === ""
        ) {
          a.textContent = num.value;
          sign.textContent = click;
          num.value = "";
        }
        break;
      case "=":
        if (
          num.value !== "" &&
          sign.textContent !== "" &&
          equal.textContent === ""
        ) {
          b.textContent = num.value;
          equal.textContent = click;
          num.value = eval(a.textContent + sign.textContent + b.textContent);
        }
        break;
      case "AC":
        a.textContent = "";
        sign.textContent = "";
        b.textContent = "";
        equal.textContent = "";
        num.value = "";
        square.textContent = "";
        break;
      case "CE":
        if (equal.textContent === "") {
          let val = num.value;
          num.value = val.slice(0, -1);
        }
        break;
      case "√":
        if (
          num.value !== "" &&
          sign.textContent === "" &&
          equal.textContent === ""
        ) {
          b.textContent = num.value;
          square.textContent = "√";
          equal.textContent = "=";
          num.value = Math.sqrt(num.value);
        } else if (
          num.value !== "" &&
          sign.textContent !== "" &&
          square.textContent === "" &&
          equal.textContent === ""
        ) {
          b.textContent = num.value;
          square.textContent = "√";
          equal.textContent = "=";
          num.value = eval(
            a.textContent + sign.textContent + Math.sqrt(b.textContent)
          );
        }
        break;
      case "-/+":
        if (num.value !== "" && equal.textContent !== "=") {
          num.value = -num.value;
        }
        break;
      case ".":
        let s = num.value;
        if (
          num.value !== "" &&
          s.lastIndexOf(".") == -1 &&
          equal.textContent !== "="
        ) {
          num.value += click;
        }
        break;
      default:
        if (num.value !== "" && num.value.length < 24) {
          if (equal.textContent === "=") {
            a.textContent = "";
            sign.textContent = "";
            b.textContent = "";
            equal.textContent = "";
            num.value = "";
            square.textContent = "";
          }
          num.value += click;
        } else if (num.value === "") {
          num.value = click;
        }
    }
    num.style.fontSize = fontSizeСhange(num.value.length);
  }
});

function fontSizeСhange(valueInp) {
  let size = "2.2em";
  let arrSize = [
    [12, "1.8em"],
    [16, "1.5em"],
    [20, "1.3em"],
    [25, "0.8em"],
  ];
  for (let arrValue of arrSize) {
    if (valueInp > arrValue[0]) {
      size = arrValue[1];
    }
  }
  return size;
}
