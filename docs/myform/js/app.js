
console.log('init!');

const form = document.querySelector('.form');
const tel = form.querySelector('input[type = "tel"]');
const telMask = new Inputmask('+7 (999) 999-99-99')

telMask.mask(tel);


const validation = new JustValidate('.form');

validation
  .addField('.form__input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
  ])
  .addField('.form__input-email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.form__input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = tel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    //console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);
    console.log(formData);

    //console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.currentTarget.reset();
  });


const serviceButton = document.querySelectorAll('.services__button');

//  serviceButton.addEventListener('click', (event)=>{

//   event.preventDefault();
//   const serviceInput = document.querySelector('.form__input-service');
//   serviceInput.value = 'Hello World';


//  })

serviceButton.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const serviceInput = document.querySelector('.form__input-service');
    let serviceBlock = item.closest('div');
    console.log(serviceBlock);
    let service = serviceBlock.previousElementSibling.textContent;
    serviceInput.value = service;
    document.querySelector('.form').classList.toggle('form--active');
  })

})

$('#targetElement').load('header.html');
