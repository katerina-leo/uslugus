export  const showPassword = () => {
 const inputsPassword = document.querySelectorAll('.form__input--password');
 const btnsEyePassword = document.querySelectorAll('.form__password-eye');

    btnsEyePassword.forEach((btn, i) => {
       btn.addEventListener('click', () => {
           btn.classList.toggle('form__password-eye--show');

           inputsPassword[i].type = btn.classList.contains('form__password-eye--show')
               ? 'text'
               : 'password';
       })
    })
}