
//Открытие и закрытие попапа с услугами

const serviceOrderButton = document.querySelectorAll('.service__turns-button');
const formXmark = document.querySelectorAll('.form__xmark')
const serviceForm = document.querySelector('.service__form');
const wrapperAllSite = document.querySelector('.wrapper');




//Открытие и закрытие попапа с консультацией
const consultationButton = document.querySelectorAll('.consultation__button');
const consultationForm = document.querySelector('.consultation__form');
consultationButton.forEach((button) =>{
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        consultationForm.classList.add('form--active');
        wrapperAllSite.classList.add('wrapper--dark')
    })
})

formXmark.forEach((mark) =>{
    mark.addEventListener('click', ()=>{
      consultationForm.classList.remove('form--active');
      wrapperAllSite.classList.remove('wrapper--dark')

    })
})
window.addEventListener("keydown", (e) =>{
    if(e.key === 'Escape')
    {
        consultationForm.classList.remove('form--active');
        wrapperAllSite.classList.remove('wrapper--dark');

    }
})

//Маска для телефона консультации

const telConsultation = consultationForm.querySelector('input[type="tel"]');
const inputMaskConsultation = new Inputmask('+7 (999) 999-99-99');
inputMaskConsultation.mask(telConsultation);

//Валидация формы консультации

const validationConsultationForm = new JustValidate('.consultation__form');


validationConsultationForm
  .addField('.consultation__input-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя должно содержать не менее 2 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя'
    }
  ])
  .addField('.consultation__input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telConsultation.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    let formData2 = new FormData(event.target);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          alert("Ваше письмо было успешно отправлено! Мы свяжемся с вами как можно быстрее)");
        }
      }
    }

    xhr.open('POST', 'consultation.php', true);
    xhr.send(formData2);

    event.currentTarget.reset();
    consultationForm.classList.remove('form--active');
  });


  


