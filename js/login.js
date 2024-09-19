//! Step 1: Set Event Handler
document.getElementById('login-btn').addEventListener('click',function(event){
    //! Step 2: Prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log('login clicked');

    //! Step 3: get the phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    //! Step 4: validate phone and pin
    //! this is temporary
    if(phoneNumber === '0' && pinNumber === '0'){
        console.log('correct number and pin');
        //! Step 5: Allow User to use the website
        window.location.href = 'home.html'
    }else{
        alert('Wrong Mobile or Pin Number.');
    }
    
})

