const output = document.createElement("div")
output.id="output"
document.getElementById("relative").appendChild(output)


const principalAmount= document.getElementById("principalAmount")
const interestRate = document.getElementById("interestRate")
const noOfYears = document.getElementById("noOfYears")
const total = document.getElementById("calculate")


document.getElementById("calculate").addEventListener("click",function(){
    if(!principalAmount.value||!interestRate.value||!noOfYears.value){
        alert("Please enter all the required fields!")
        return;
    }else {
        simpleInterest=(principalAmount.value*interestRate.value*noOfYears.value)/100
    output.textContent=`After ${noOfYears.value} years investment will be worth $${parseInt(principalAmount.value)+parseInt(simpleInterest)}.00 with simple interest.`
    }
})






