var Num1,Num2, Oper;//2 số nhập vào

function Num1In() {
    var x,y;
    x=1;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function Num2In() {
    var x,y;
    x=2;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function Num3In() {
    var x,y;
    x=3;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function Num4In() {
    var x,y;
    x=4;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function Num5In() {
    var x,y;
    x=5;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function Num6In() {
    var x,y;
    x=6;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function Num7In() {
    var x,y;
    x=7;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function Num8In() {
    var x,y;
    x=8;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function Num9In() {
    var x,y;
    x=9;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function Num0In() {
    var x,y;
    x=0;
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function NumDotIn() {
    var x,y;
    x=".";
    y = document.getElementById("Monitor").value;
    document.getElementById("Monitor").value = y + x;
}
function cong() {
    var x,y;
    Oper="+";
    y = document.getElementById("Monitor").value;
    Num1 = Number(y);
    document.getElementById("Monitor").value = "";
}
function tru() {
    var x,y;
    Oper="-";
    y = document.getElementById("Monitor").value;
    Num1 = Number(y);
    document.getElementById("Monitor").value = "";
}
function nhan() {
    var x,y;
    Oper="x";
    y = document.getElementById("Monitor").value;
    Num1 = Number(y);
    document.getElementById("Monitor").value = "";
}
function chia() {
    var x,y;
    Oper=":";
    y = document.getElementById("Monitor").value;
    Num1 = Number(y);
    document.getElementById("Monitor").value = "";
}
function Del() {
    document.getElementById("Monitor").value = "";
    Num1 = "";
    Num2 = "";
}
function ketqua() {
    Num2 = document.getElementById("Monitor").value;
    switch (Oper) {
        case "+":
            document.getElementById("Monitor").value = Num1 + Number(Num2);
            break;
        case "-":
            document.getElementById("Monitor").value = Num1 - Number(Num2);
            break;
        case "x":
            document.getElementById("Monitor").value = Num1 * Number(Num2);
            break;
        case ":":
            document.getElementById("Monitor").value = Num1 / Number(Num2);
            break;
    }

}


