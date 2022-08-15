let result = document.getElementById("inputtext")

function calculate (number)  {
    result.value = result.value+number;
}

function calc() {
    if(result.value == " "){
        result.value = result.value;
    } else {
        try{ 
            result.value = eval(result.value)
        }
        catch(err){
            result.value=" ";
        }
    }
}

function clr(){
    console.log(result.value)
    result.value = " ";
}

function del(){
    result.value =result.value.slice(0,-1)  
}

