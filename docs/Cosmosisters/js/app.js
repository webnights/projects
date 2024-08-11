
//Табы с услугами
const serviceButtons = document.querySelectorAll('.service__button');
const serviceContent = document.querySelectorAll('.service__turns');

serviceButtons.forEach(serviceTabClick)
function serviceTabClick(item) {
  item.addEventListener('click', () => {

    let currentButton = item;
    let tabId = currentButton.getAttribute("data-tab");
    let currentContent = document.querySelector(tabId);

    serviceContent.forEach((content) => {
      content.classList.remove('service__turns--active');
    })
    serviceButtons.forEach((subitem) => {
      subitem.classList.remove('service__button--active');
    })

    currentButton.classList.add('service__button--active');
    currentContent.classList.add('service__turns--active');
  })

}
document.querySelector('.service__button').click();

//Табы с аппаратами
const deviceButtons = document.querySelectorAll('.device__tabs-button');
const deviceContent = document.querySelectorAll('.device__tabs-body');

deviceButtons.forEach(deviceTabClick)
function deviceTabClick(item) {
  deviceButtons.forEach(() => {
    item.addEventListener('click', () => {
      let currentDeviceButton = item;
      let deviceTabId = currentDeviceButton.getAttribute("data-tab");
      let deviceCurrentContent = document.querySelector(deviceTabId);

      deviceButtons.forEach((button) => {
        button.classList.remove('device__tabs-button--active')
      })
      deviceContent.forEach((content) => {
        content.classList.remove('device__tabs-body--active');
      })
      currentDeviceButton.classList.add('device__tabs-button--active');
      deviceCurrentContent.classList.add('device__tabs-body--active');
    })
  })
  document.querySelector('.device__tabs-button').click();

}

//Слайдеры
const deviceSlider = new Splide('.device__slider', {
  type: 'loop',
  perPage: 1,
}).mount();

const deviceSlider2 = new Splide('.device__slider-2', {
  type: 'loop',
  perPage: 1,
}).mount();

//Открытие и закрытие попапа с услугами

const serviceOrderButton = document.querySelectorAll('.service__turns-button');
const formXmark = document.querySelectorAll('.form__xmark')
const serviceForm = document.querySelector('.service__form');
const wrapperAllSite = document.querySelector('.wrapper');
serviceOrderButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    serviceForm.classList.add('form--active');

    let serviceInput = document.querySelector(".service__input-this");
    let serviceName = button.closest('div').previousElementSibling.textContent;
    serviceInput.value = serviceName;
    wrapperAllSite.classList.add('wrapper--dark')
  })
})

formXmark.forEach((mark) => {
  mark.addEventListener('click', () => {
    serviceForm.classList.remove('form--active');
    wrapperAllSite.classList.remove('wrapper--dark')

  })
})
window.addEventListener("keydown", (e) => {
  if (e.key === 'Escape') {
    serviceForm.classList.remove('form--active');
    wrapperAllSite.classList.remove('wrapper--dark')

  }
})


//Маска для телефона в разделе услуг

const tel = serviceForm.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(tel);

//Валидация формы в разделе услуг

const validationServiceForm = new JustValidate('.service__form');


validationServiceForm
  .addField('.service__input-name', [
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
  .addField('.service__input-tel', [
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
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          alert("Ваше письмо было успешно отправлено! Мы свяжемся с вами как можно быстрее)");
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    event.currentTarget.reset();
    serviceForm.classList.remove('form--active');
    wrapperAllSite.classList.remove('wrapper--dark')
  });




//Открытие и закрытие попапа с консультацией
const consultationButton = document.querySelectorAll('.consultation__button');
const consultationForm = document.querySelector('.consultation__form');
consultationButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    consultationForm.classList.add('form--active');
    wrapperAllSite.classList.add('wrapper--dark')
  })
})

formXmark.forEach((mark) => {
  mark.addEventListener('click', () => {
    consultationForm.classList.remove('form--active');
    wrapperAllSite.classList.remove('wrapper--dark')

  })
})
window.addEventListener("keydown", (e) => {
  if (e.key === 'Escape') {
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
      validator: function () {
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
    wrapperAllSite.classList.remove('wrapper--dark')
  });



//Открытие и закрытие попапа с сертификатом
const certificateButton = document.querySelectorAll('.cert__button');
const certificateForm = document.querySelector('.certificate__form');
certificateButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    certificateForm.classList.add('form--active');
    wrapperAllSite.classList.add('wrapper--dark')
  })
})

formXmark.forEach((mark) => {
  mark.addEventListener('click', () => {
    certificateForm.classList.remove('form--active');
    wrapperAllSite.classList.remove('wrapper--dark')

  })
})
window.addEventListener("keydown", (e) => {
  if (e.key === 'Escape') {
    certificateForm.classList.remove('form--active');
    wrapperAllSite.classList.remove('wrapper--dark');

  }
})

//Маска для телефона сертификата

const telCertificate = certificateForm.querySelector('input[type="tel"]');
const inputMaskCertificate = new Inputmask('+7 (999) 999-99-99');
inputMaskCertificate.mask(telCertificate);

//Валидация формы сертификата

const validationCertificateForm = new JustValidate('.certificate__form');


validationCertificateForm
  .addField('.certificate__input-name', [
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
  .addField('.certificate__input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telCertificate.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    let formData3 = new FormData(event.target);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          alert("Ваше письмо было успешно отправлено! Мы свяжемся с вами как можно быстрее)");
          
        }
      }
    }

    xhr.open('POST', 'certificate.php', true);
    xhr.send(formData3);

    event.currentTarget.reset();
    certificateForm.classList.remove('form--active');
    wrapperAllSite.classList.remove('wrapper--dark')
  });


//Аккордеон секции с услугами




document.querySelectorAll('.service__turns-item').forEach((item) => {

  item.addEventListener('click', () => {
    let content = item.firstElementChild.nextElementSibling;
    console.log(content);
    if (content.style.maxHeight) {
      document.querySelectorAll('.service__turns-item-content').forEach((content) => content.style.maxHeight = null);
      document.querySelectorAll('.service__turns-item').forEach((item) => item.classList.remove('service__turns-item--active'))

    }
    else {
      document.querySelectorAll('.service__turns-item-content').forEach((content) => content.style.maxHeight = null)
      document.querySelectorAll('.service__turns-item').forEach((item) => item.classList.remove('service__turns-item--active'))
      item.classList.add('service__turns-item--active');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

})