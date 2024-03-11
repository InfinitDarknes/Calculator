// Varlaibles
const Display = document.getElementById("display");
const NumberBtns = document.querySelectorAll(".number-btn");
const FloatBtn = document.getElementById("float-btn");
const EqualBtn = document.getElementById("equal-btn");
const ClearBtn = document.getElementById("clear-btn");
const DeleteBtn = document.getElementById("delete-btn");
const RemainberBtn = document.getElementById("remainder-btn");
const DivisionBtn = document.getElementById("division-btn");
const MultiplicationBtn = document.getElementById("multiplication-btn");
const AdditionBtn = document.getElementById("addition-btn");
const SubtractionBtn = document.getElementById("subtraction-btn");
let CalcInfo = {
  Num1: "",
  Num2: "",
  Operation: "",
};
function Calc() {
  switch (CalcInfo.Operation) {
    case "Addition":
      return Addition();
    case "Subtraction":
      return Subtraction();
    case "Division":
      return Division();
    case "Multiplication":
      return Multiplication();
    case "Remainder":
      return Remainder();
  }
}
function AddSymbol(NewSymbol) {
  let DisplayValue = Display.innerHTML;
  if (
    DisplayValue.includes("+") ||
    DisplayValue.includes("-") ||
    DisplayValue.includes("÷") ||
    DisplayValue.includes("×") ||
    DisplayValue.includes("%")
  ) {
    Display.innerHTML = DisplayValue.slice(0, -3) + ` ${NewSymbol} `;
    console.log(Symbol);
  } else {
    Display.innerHTML += ` ${NewSymbol} `;
  }
}
function ClearDisplay() {
  Display.innerHTML = "";
}
function Reset() {
  Display.innerHTML = "";
  CalcInfo.Operation = "";
  CalcInfo.Num1 = "";
  CalcInfo.Num2 = "";
}
function Delete() {
  if (!Display.innerHTML) return;
  if (CalcInfo.Num1 && !CalcInfo.Operation && !CalcInfo.Num2) {
    CalcInfo.Num1 = CalcInfo.Num1.substring(0, CalcInfo.Num1.length - 1);
    Display.innerHTML = Display.innerHTML.substring(0, Display.innerHTML.length - 1);
  }
  if (CalcInfo.Num1 && CalcInfo.Operation && !CalcInfo.Num2) {
    CalcInfo.Operation = "";
    Display.innerHTML = Display.innerHTML.substring(0, Display.innerHTML.length - 3);
  }
  if (CalcInfo.Num1 && CalcInfo.Operation && CalcInfo.Num2) {
    CalcInfo.Num2 = CalcInfo.Num2.substring(0, CalcInfo.Num2.length - 1);
    Display.innerHTML = Display.innerHTML.substring(0, Display.innerHTML.length - 1);
  }
}
function Addition() {
  if (HasDecimals(+CalcInfo.Num1 + +CalcInfo.Num2)) return (+CalcInfo.Num1 + +CalcInfo.Num2).toFixed(5);
  else return (+CalcInfo.Num1 + +CalcInfo.Num2).toFixed(0);
}
function Subtraction() {
  if (HasDecimals(+CalcInfo.Num1 - +CalcInfo.Num2)) return (+CalcInfo.Num1 - +CalcInfo.Num2).toFixed(5);
  else return (+CalcInfo.Num1 - +CalcInfo.Num2).toFixed(0);
}
function Multiplication() {
  if (HasDecimals(+CalcInfo.Num1 * +CalcInfo.Num2)) return (+CalcInfo.Num1 * +CalcInfo.Num2).toFixed(5);
  else return (+CalcInfo.Num1 * +CalcInfo.Num2).toFixed(0);
}
function Remainder() {
  if (HasDecimals(+CalcInfo.Num1 % +CalcInfo.Num2)) return (+CalcInfo.Num1 % +CalcInfo.Num2).toFixed(5);
  else return (+CalcInfo.Num1 % +CalcInfo.Num2).toFixed(0);
}
function Division() {
  if (HasDecimals(+CalcInfo.Num1 / +CalcInfo.Num2)) return (+CalcInfo.Num1 / +CalcInfo.Num2).toFixed(5);
  else return (+CalcInfo.Num1 / +CalcInfo.Num2).toFixed(0);
}
function HasDecimals(Num) {
  return +Num % 1 !== 0;
}
NumberBtns.forEach((Btn) => {
  Btn.addEventListener("click", (Event) => {
    if (CalcInfo.Num1 && CalcInfo.Operation) {
      CalcInfo.Num2 += Event.target.dataset.num;
    } else {
      CalcInfo.Num1 += Event.target.dataset.num;
    }
    Display.innerHTML += Event.target.dataset.num;
  });
});
ClearBtn.addEventListener("click", Reset);
DeleteBtn.addEventListener("click", Delete);
EqualBtn.addEventListener("click", () => {
  if (CalcInfo.Num1 && !CalcInfo.Num2) {
    ClearDisplay();
    CalcInfo.Operation = "";
    Display.innerHTML = CalcInfo.Num1;
  }
  if (CalcInfo.Num1 && CalcInfo.Num2 && CalcInfo.Operation) {
    ClearDisplay();
    let Result = Calc();
    CalcInfo.Num1 = Result;
    CalcInfo.Num2 = "";

    Display.innerHTML = Result;
    CalcInfo.Operation = "";
  }
});
RemainberBtn.addEventListener("click", () => {
  if (CalcInfo.Operation === "Remainder" && !CalcInfo.Num2) return;
  if (CalcInfo.Num1 && !CalcInfo.Num2) {
    CalcInfo.Operation = "Remainder";
    AddSymbol("%");
  }
  if (CalcInfo.Num1 && CalcInfo.Num2 && CalcInfo.Operation) {
    ClearDisplay();
    let Result = Calc();
    CalcInfo.Num1 = Result;
    CalcInfo.Num2 = "";

    Display.innerHTML = Result + " % ";
    CalcInfo.Operation = "Remainder";
  }
});
DivisionBtn.addEventListener("click", () => {
  if (CalcInfo.Operation === "Division" && !CalcInfo.Num2) return;
  if (CalcInfo.Num1 && !CalcInfo.Num2) {
    CalcInfo.Operation = "Division";
    AddSymbol("÷");
  }
  if (CalcInfo.Num1 && CalcInfo.Num2 && CalcInfo.Operation) {
    ClearDisplay();
    let Result = Calc();
    CalcInfo.Num1 = Result;
    CalcInfo.Num2 = "";

    Display.innerHTML = Result + " ÷ ";
    CalcInfo.Operation = "Division";
  }
});
MultiplicationBtn.addEventListener("click", () => {
  if (CalcInfo.Operation === "Multiplication" && !CalcInfo.Num2) return;
  if (CalcInfo.Num1 && !CalcInfo.Num2) {
    CalcInfo.Operation = "Multiplication";
    AddSymbol("×");
  }
  if (CalcInfo.Num1 && CalcInfo.Num2 && CalcInfo.Operation) {
    ClearDisplay();
    let Result = Calc();
    CalcInfo.Num1 = Result;
    CalcInfo.Num2 = "";

    Display.innerHTML = Result + " × ";
    CalcInfo.Operation = "Multiplication";
  }
});
AdditionBtn.addEventListener("click", () => {
  if (CalcInfo.Operation === "Addition" && !CalcInfo.Num2) return;
  if (CalcInfo.Num1 && !CalcInfo.Num2) {
    CalcInfo.Operation = "Addition";
    AddSymbol("+");
  }
  if (CalcInfo.Num1 && CalcInfo.Num2 && CalcInfo.Operation) {
    ClearDisplay();
    let Result = Calc();
    CalcInfo.Num1 = Result;
    CalcInfo.Num2 = "";

    Display.innerHTML = Result + " + ";
    CalcInfo.Operation = "Addition";
  }
});
SubtractionBtn.addEventListener("click", () => {
  if (CalcInfo.Operation === "Subtraction" && !CalcInfo.Num2) return;
  if (CalcInfo.Num1 && !CalcInfo.Num2) {
    CalcInfo.Operation = "Subtraction";
    AddSymbol("-");
  }
  if (CalcInfo.Num1 && CalcInfo.Num2 && CalcInfo.Operation) {
    ClearDisplay();
    let Result = Calc();
    CalcInfo.Num1 = Result;
    CalcInfo.Num2 = "";
    Display.innerHTML = Result + " - ";
    CalcInfo.Operation = "Subtraction";
  }
});
window.addEventListener("keydown", (Event) => {
  let NumbersKeyCode = [105, 104, 103, 102, 101, 100, 99, 98, 97, 96];
  if (NumbersKeyCode.includes(Event.keyCode)) {
    const Key = document.getElementById(`key-${Event.key}`);
    Key.click();
  }
  if (Event.keyCode === 46) {
    // Del key
    Reset();
  }
  if (Event.keyCode === 110) {
    // Float or . key
    FloatBtn.click();
  }
  if (Event.keyCode === 8) {
    // Backspace key
    Delete();
  }
});
window.addEventListener("keypress", (Event) => {
  if (Event.keyCode === 43) {
    // + key on numbpad
    AdditionBtn.click();
  }
  if (Event.keyCode === 45) {
    // - key on numbpad
    SubtractionBtn.click();
  }
  if (Event.keyCode === 42) {
    // * key on numbpad
    MultiplicationBtn.click();
  }
  if (Event.keyCode === 47) {
    // / key on numbpad
    Event.preventDefault();
    DivisionBtn.click();
  }
  if (Event.keyCode === 13) {
    // Enter key on numbpad
    EqualBtn.click();
  }
});
