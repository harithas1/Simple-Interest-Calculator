const output = document.createElement("div")
output.id="output"
document.getElementById("relative").appendChild(output)


const principalAmount= document.getElementById("principalAmount")
const interestRate = document.getElementById("interestRate")
const noOfYears = document.getElementById("noOfYears")
const total = document.getElementById("calculate")







total.addEventListener("click", function(){
    const principalValue = parseFloat(principalAmount.value)
    const interestValue = parseFloat(interestRate.value)
    const yearsValue = parseFloat(noOfYears.value)

    if(isNaN(principalValue) || isNaN(interestValue) || isNaN(yearsValue) || principalValue < 0 || interestValue < 0 || yearsValue < 0){
        output.innerText = "Please enter valid positive numbers for all the fields."
        output.style.color= "red"
    }else{
        output.innerText = "";

        let simpleInterest = principalValue * interestValue * yearsValue / 100
        let totalAmount = principalValue + simpleInterest
        output.innerText = `For a principal amount of ₹${principalValue.toFixed(
          2
        )}, at an interest rate of ${interestValue}% over ${yearsValue} years, the total amount will be ₹${totalAmount.toFixed(
          2
        )}. This includes ₹${simpleInterest.toFixed(2)} in interest.`;
        output.style.color= "green"
    }

})

