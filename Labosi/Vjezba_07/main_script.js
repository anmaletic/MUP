const inputElement = document.querySelector(".screen");

let isCalculated = false;

const handleInput = (value) => {
    lastChar = inputElement.value.slice(-1);

    if(inputElement.value.length === 1 && lastChar === '0') {
        if (value.match(/[0-9]/)) {
            inputElement.value = '';
        }
    }

    if(lastChar.match(/[/*+-]/)){
        if(value.match(/[/*+-]/)){
            inputElement.value = inputElement.value.slice(0, -1);
        }
    }


    if(value === "" || isCalculated){
        inputElement.value = value;
    } else {
        inputElement.value = inputElement.value + value;
    }

    isCalculated = false;
}

const calculate = () => {
    try {
        inputElement.value = eval(inputElement.value);
    } catch(err) {
        inputElement.value = "NaN";
    }

    isCalculated = true;
}