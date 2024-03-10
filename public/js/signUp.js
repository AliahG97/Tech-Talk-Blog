
document.addEventListener('DOMContentLoaded', function () {
const signUpFromHandler = async (event) => {
    event.PreventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#password-password').value.trim();

    let container = document.querySelector('#alert-container');

    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Types': 'application/json' },
        });

        if (response.ok) {
            console.log('Response OK');

            container.innerHTML =
                `<div class="alert alert-success alert-dismissible fade show" role="alert">
            Signed Up! You can now login!
                <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
                    
                </button>
            </div>`;



            const closeBtn = container.querySelector('.btn-close');

            closeBtn.addEventListener('click', function () {
                const alert = this.closest('.alert');
                if (alert) {
                    alert.style.display = 'none';
                    console.log('Alert is closed');
                }
            })

        } else {
            console.log('Response Error: ', response.statusText);
            alert(response.statusText);
        }
    }
};

document
.querySelector('.signup-form')
.addEventListener('submit', signUpFromHandler);

});