//! Add an event handler to the add money button inside the form
document.getElementById('btn-cashOut').addEventListener('click',function(event){
    event.preventDefault();
    //! Step2:get money to be cashed out from the account
    const cashOutInput = document.getElementById('cashOut-input').value;
    console.log(cashOutInput);
    //! get the pin number
    const pinNumberInput = document.getElementById('pin-number-input').value;
    console.log(pinNumberInput);
    //! verify the pin number ! for temporary use
    if(pinNumberInput === '0'){
        console.log('Cash Out');
        //! get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        //! add addMoneyInput with balance
        const cashOutNumber = parseFloat(cashOutInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);
        //! update the balance
        document.getElementById('account-balance').innerText = newBalance;

    }else{
        alert('Wrong Pin!')
    }
})
