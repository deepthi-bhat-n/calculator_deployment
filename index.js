let result=document.getElementById("inputtext");

let calculate=(number)=>{
    result.value+=number;
}

function clr()
{
    result.value="";
}

function del()
{
    result.value=result.value.slice(0,-1);
}

let answer=()=>{
    try{
result.value=eval(result.value);
    }
    catch(err)
    {
        alert("Invalid input");}
    
}