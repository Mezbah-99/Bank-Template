var loginBtn = document.getElementById('submit')
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('form_container')
    loginArea.style.display = 'none'
    const transactionArea = document.getElementById('trasaction-area')
    transactionArea.style.display = "block";
})
// Deoposit Button
var depositBtn = document.getElementById('depositBtn')
depositBtn.addEventListener('click',function(){
    const depositNumber = getInputNumber('depositAmount')
    currentTotal('current_deposit',depositNumber)
    currentTotal('currentotal',depositNumber)

    document.getElementById('depositAmount').value = ''

})
function currentTotal(id,depositNumber){
    const current = document.getElementById(id).innerText
    const currentNumber = parseInt(current)
    const currentTotal = depositNumber + currentNumber
    document.getElementById(id).innerText = currentTotal
}
// Withdraw Button
const withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener('click',function(){
    const withdrawNumver = getInputNumber("withdrawAmount")
    currentTotal('withdrawamount',withdrawNumver)
    currentTotal('currentotal',-1 * withdrawNumver)
    document.getElementById("withdrawAmount").value = ''
})

function getInputNumber(id){
    amount = document.getElementById(id).value
    number = parseFloat(amount)
    return number
}
