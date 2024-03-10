const loginFormHandler = async (event) => {
    event.preventDefault();

    //Collect email & password values from form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email && password){
        //Send a request to API
        const response = await  fetch('/api/users/login', {
            method: 'POST',
            body:JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        });
        //if success redirect to X TODO:

        // if (response.ok){
            
        // }
    }


};
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);