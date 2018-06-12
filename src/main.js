var form = document.querySelector('form');
var submit = form.querySelector('button');
var message = form.querySelector('.message');
var fieldsets = form.querySelectorAll('fieldset');



submit.addEventListener('click', function (event) {
    event.preventDefault();
    message.innerHTML = '';
    form.classList.remove('valid', 'is-error');
    form.classList.add('is-submitted');
    for (const fieldsets of document.querySelectorAll('.error')) {
        fieldsets.classList.remove('error');
    }
    setTimeout(() => {
        form.classList.remove('is-submitted', 'is-error');
    }, 2000);
    Validate(form)
        .then(function (data) {
            message.classList.remove('message--error');
            message.innerHTML = 'Tudo está OK!';
            console.log(JSON.stringify(data));
            form.classList.add('valid');
        })
        .catch(function (errors) {
            console.warn('Whoops you got errors!');
            console.log(errors);
            for (const e of errors.inputs) {
                e.parentElement.classList.add('error');
            }
            form.classList.add('is-error');
            message.classList.add('message--error');
            message.innerHTML = '<b>Please check</b> ' + errors.names.join(', ');

        });

});


