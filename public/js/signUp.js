
document.addEventListener('DOMContentLoaded', function(){
    const signUpFromHandler = async (event) => {
        event.preventDefault();
    
        const username = document.querySelector('#signup-username').value.trim();
        const email = document.querySelector('#signup-email').value.trim();
        const password = document.querySelector('#signup-password').value.trim();
    
        let container = document.querySelector('#alert-container');
    
        if(username && email && password){
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({username, email, password}),
                headers: {'Content-Type': 'application/json'},
            });
    
            if(response.ok){
                console.log('Response OK');
                alert( "you succesffully sign up") 
                document.location.replace("/login") 
            }else{
                console.log('Response Error: ', response.statusText);
                alert(response.statusText);
            }
        }
    
    };
    
    document
    .querySelector('.signup-form')
    .addEventListener('submit', signUpFromHandler);
    
    });