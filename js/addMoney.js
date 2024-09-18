//! Add an event handler to the add money button inside the form
document.getElementById('btn-addMoney').addEventListener('click',function(event){
    event.preventDefault();
    //! Step2:get money to be added to the account
    const addMoneyInput = document.getElementById('add-money-input').value;
    console.log(addMoneyInput);
    //! get the pin number
    const pinNumberInput = document.getElementById('pin-number-input').value;
    console.log(pinNumberInput);
    //! verify the pin number ! for temporary use
    if(pinNumberInput === '0'){
        console.log('adding money');
        //! get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        //! add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        //! update the balance
        document.getElementById('account-balance').innerText = newBalance;

    }else{
        alert('Wrong Pin!')
    }
})
