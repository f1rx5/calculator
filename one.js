function clearScreen(){
    document.getElementById("result").value=""
}

function calculate(num){
    document.getElementById("result").value+=num
}

function result(){
    var p = document.getElementById("result").value;
    var q = eval (p)
    document.getElementById("result").value=q;
}
function del(){
    var x = document.getElementById("result").value
    var dele=x.substring(0,x.length-1)
    document.getElementById('result').value=dele
}