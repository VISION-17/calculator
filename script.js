
function appendToDisplay(input){
    cold.value += input;
}

function eraseDisplay(){
    cold.value = "";
}

function calculate(){
    try{
    cold.value = eval(cold.value);
    }
    catch(error){
        cold.value = ("error");
    }
}