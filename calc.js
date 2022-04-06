const getNumber = (num) => {
    let values = document.getElementById("values");
    values.innerHTML += num
}

const equate = () =>{
    let values = document.getElementById("values");
    let answer = document.getElementById("answer");

    value = values.innerHTML;
    // if(value[value.length - 1] == "+" || "-" || "/" || "*"){
    //     value = value.substring(0, value.length - 1);
    // }
    answer.innerHTML = eval(value);
}

const clearAll = () =>{
    let values = document.getElementById("values");
    let answer = document.getElementById("answer");

    values.innerHTML = "";
    answer.innerHTML = "0";
}

const deleteNumber = () =>{
    let values = document.getElementById("values");

    values.innerHTML = values.innerHTML.substring(0, values.innerHTML.length - 1);
}