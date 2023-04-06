const steps = [{
    name: 'Анкета',
    questions: [{
      text: 'Как я могу к вам обращаться?',
      answerStoreField: 'name',
    }, {
      text: 'Укажите ваш номер телефона.',
      answerStoreField: 'phone',
    }, {
      text: 'Укажите марку и модель машины',
      answerStoreField: 'carMark',
    },{
      text: 'Напишите госномер.',
      answerStoreField: 'carSign'
    }],
  }, {
    name: 'Вид работы',
    questions: [{
      text: '{name}, какой вид работы вас интересует?',
      buttons: ['Ремонт','Диагностика','Мойка'],
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
    name:'Эвакуация',
    questions: [{
        text: 'Вам потребуется эвакуация?',
        buttons: ['Да','Нет'],
      answerStoreField: 'evacuation',
    }]
  },{
    name: 'Подтверждение записи',
    questions: [{
      text: [
        'Подтвердите запись в салон',
        'Стоимость {$textCase(serviceType, 2)} составляет {$servicePrice(serviceType)}',
        'Продолжительность {$serviceTime(serviceType)}',
        'Запись на {date} в {time}' ,
      ],
      buttons: ['Подтвердить', 'Отменить'],
    }]
  }, {
    name: 'Напоминание',
    questions: [{
      text: '{name}, вы придёте в назначенное время?',
      buttons: ['Да','Нет'],
      answerStoreField: 'reminder',
    }]
  }, {
    name: 'Оказание услуги',
    questions: [{
      text: '{name}, вам понравилась наша работа?',
      buttons: ['Да','Нет'],
      answerStoreField: 'impression',
    }]
  }, {
    name: 'Обратная связь',
    questions: [{
      text: '{name}, можете оставить комментарий о нашей работе.',
      answerStoreField: 'comment',
    }]
  }]
  module.exports = {
    steps:steps,
  }