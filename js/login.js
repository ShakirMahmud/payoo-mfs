//! Step 1: Set Event Handler
document.getElementById('login-btn').addEventListener('click',function(event){
    //! Step 2: Prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log('login clicked');
    //! Step 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})