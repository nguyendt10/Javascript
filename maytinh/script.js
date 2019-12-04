var Num1,Num2, Oper;//2 số nhập vào

function Num1In() {
    document.getElementById("Monitor").value +=1;
    document.getElementById("MonitorCatche").value +=1;
}
function Num2In() {
    document.getElementById("Monitor").value +=2;
    document.getElementById("MonitorCatche").value +=2;

}
function Num3In() {
    document.getElementById("Monitor").value +=3;
    document.getElementById("MonitorCatche").value +=3;

}
function Num4In() {
    document.getElementById("Monitor").value +=4;
    document.getElementById("MonitorCatche").value +=4;

}
function Num5In() {
    document.getElementById("Monitor").value +=5;
    document.getElementById("MonitorCatche").value +=5;

}
function Num6In() {
    document.getElementById("Monitor").value +=6;
    document.getElementById("MonitorCatche").value +=6;

}
function Num7In() {
    document.getElementById("Monitor").value +=7;
    document.getElementById("MonitorCatche").value +=7;

}
function Num8In() {
    document.getElementById("Monitor").value +=8;
    document.getElementById("MonitorCatche").value +=8;

}
function Num9In() {
    document.getElementById("Monitor").value +=9;
    document.getElementById("MonitorCatche").value +=9;

}
function Num0In() {
    document.getElementById("Monitor").value +=0;
    document.getElementById("MonitorCatche").value +=0;


}
function NumDotIn() {
    document.getElementById("Monitor").value += ".";
    document.getElementById("MonitorCatche").value += ".";

}
function cong() {
    Oper="+";
    Num1 = Number(document.getElementById("Monitor").value);
    document.getElementById("Monitor").value = "";
    document.getElementById("MonitorCatche").value += "+";

}
function tru() {
    Oper="-";
    Num1 = Number(document.getElementById("Monitor").value);
    document.getElementById("Monitor").value = "";
    document.getElementById("MonitorCatche").value += "-";

}
function nhan() {
    Oper="x";
    Num1 = Number(document.getElementById("Monitor").value);
    document.getElementById("Monitor").value = "";
    document.getElementById("MonitorCatche").value += "x";

}
function chia() {
    Oper=":";
    Num1 = Number(document.getElementById("Monitor").value);
    document.getElementById("Monitor").value = "";
    document.getElementById("MonitorCatche").value += ":";

}
function Del() {
    document.getElementById("Monitor").value = "";
    document.getElementById("MonitorCatche").value = "";

    Num1 = "";
    Num2 = "";
}
function ketqua() {
    Num2 = document.getElementById("Monitor").value;
    document.getElementById("MonitorCatche").value = "=";
    switch (Oper) {
        case "+":
            document.getElementById("Monitor").value = Num1 + Number(Num2);
            document.getElementById("MonitorCatche").value += Num1 + Number(Num2);
            break;
        case "-":
            document.getElementById("Monitor").value = Num1 - Number(Num2);
            document.getElementById("MonitorCatche").value += Num1 - Number(Num2);
            break;
        case "x":
            document.getElementById("Monitor").value = Num1 * Number(Num2);
            document.getElementById("MonitorCatche").value += Num1 * Number(Num2);
            break;
        case ":":
            document.getElementById("Monitor").value = Num1 / Number(Num2);
            document.getElementById("MonitorCatche").value += Num1 / Number(Num2);
            break;
    }


}


