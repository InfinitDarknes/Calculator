// Varlaibles
const Display = document.getElementById("display");
const NumberBtns = document.querySelectorAll(".number-btn");
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
// DeleteBtn.addEventListener();
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
function Addition() {
  return (+CalcInfo.Num1 + +CalcInfo.Num2).toFixed(5);
}
function Subtraction() {
  return (+CalcInfo.Num1 - +CalcInfo.Num2).toFixed(5);
}
function Multiplication() {
  return (+CalcInfo.Num1 * +CalcInfo.Num2).toFixed(5);
}
function Remainder() {
  return (+CalcInfo.Num1 % +CalcInfo.Num2).toFixed(5);
}
function Division() {
  return (+CalcInfo.Num1 / +CalcInfo.Num2).toFixed(5);
}
function Sin(Value) {
  return Math.sin(+Value);
}
function Cos(Value) {
  return Math.cos(+Value);
}
function Tan(Value) {
  return Math.tan(+Value);
}
function Cot(Value) {
  return 1 / Math.tan(+Value);
}
