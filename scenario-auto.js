const steps = [{
    name: 'Анкета',
    questions: [{
      text: 'Как я могу к вам обращаться?',
      answerStoreField: 'name',
    }, {
      text: 'Укажите ваш номер телефона.',
      answerStoreField: 'phone'
    }],
  }, {
    name: 'Вид работы',
    questions: [{
      text: '{name}, какой вид работы вас интересует?',
      buttons: ['Ремонт','Мойка','Диагностика'],
      answerStoreField: 'serviceType',
    }, {
      text: [
        'Стоимость {$textCase(serviceType, 2)} составляет {$servicePrice(serviceType)}',
        'Продолжительность {$serviceTime(serviceType)}'
      ],
      buttons: ['Продолжить', 'Вернуться'],
    }],
  }, {
    name: 'Время записи',
    questions: [{
      text: 'Выберите дату.',
      service: 'datesButtons',
      serviceParams: {
        count: 3,
      },
      answerStoreField: 'date',
    }, {
      text: 'Выберите время.',
      service: 'timeButtons',
      serviceParams: {
        date: '{date}'
      },
      answerStoreField: 'time',
    }]
  }, {
    name: 'Подтверждение записи',
    questions: [{
      text: ''
    }]
  }, {
    name: 'Напоминание'
  }, {
    name: 'Оказание услуги'
  }, {
    name: 'Обратная связь'
  }]