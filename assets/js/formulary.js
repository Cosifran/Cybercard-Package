//obtengo la informacion de los check y el boton
function checkButtonAvailability() {
    const termsCheckbox = document.getElementById('termsCheckbox');
    const privacyCheckbox = document.getElementById('privacyCheckbox');
    const payButton = document.getElementById('payButton');
    const payButtonResponsive = document.getElementById('payButtonResponsive');
    //valida si los botones están check
    if (termsCheckbox.checked && privacyCheckbox.checked) {
        //elimina el atributo aria disabled
        payButton.removeAttribute('aria-disabled');
        payButtonResponsive.removeAttribute('aria-disabled');
        //remueve la clase disbled y el color del boton 
        payButton.classList.remove('disabled', 'btn-secondary');
        payButtonResponsive.classList.remove('disabled', 'btn-secondary');
        //añade la clase para cambiar el color al boton
        payButton.classList.add('btn-danger');
        payButtonResponsive.classList.add('btn-danger');
        payButton.href = './confirmation.html';
        payButtonResponsive.href = './confirmation.html';
    } else {
        payButton.setAttribute('aria-disabled', 'true');
        payButton.removeAttribute('href');
        payButton.classList.remove('btn-danger');
        payButton.classList.add('disabled', 'btn-secondary');
        payButtonResponsive.setAttribute('aria-disabled', 'true');
        payButtonResponsive.removeAttribute('href');
        payButtonResponsive.classList.remove('btn-danger');
        payButtonResponsive.classList.add('disabled', 'btn-secondary');
    }
};

