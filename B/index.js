let time = 0;
let rollnumber = document.getElementById("roll_number");
let number = document.getElementById("number");
let type = false;
rollnumber.onclick = () => {
    let num = Number(number.value);
    if(time > 3){
        alert("Bạn đã nhập quá 3 lần, không thể nhập được nữa!!");
        return;
    }

    if(num <1 || num>10){
        alert("Bạn đã nhập sai, yêu cầu nhập lại !!!");
        type = true;
    }

    if(num <= 10 && num >= 1){
        let randomNumber = Math.floor(Math.random() * 10 + 1);
        if(num != randomNumber){
            alert(`Bạn đã đoán sai, số đúng là: ${randomNumber}`);

        }else{
            alert("Bạn đã đoán đúng, xin chúc mừng!!");
        }
        time++;
    }

}
