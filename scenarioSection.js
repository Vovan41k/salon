const steps = [{
    name: 'Анкета',
    questions: [{
        text: 'Как зовут вашего ребенка?',
        answerStoreField: 'nameChild',
    },{
        text: 'Сколько лет вашему ребенку?',
        answerStoreField: 'age',
    }],
},{
    name: 'Контакты',
    questions: [{
        text: 'Укажите ваше имя.',
        answerStoreField: 'nameParent',
    },{
        text: 'Укажите ваш номер телефона. ',
        answerStoreField: 'phoneNumber',
    }],
},{
    name: 'Кружки',
    questions: [{
        text: 'На какой кружок вы желаете записаться?',
        buttons: ['Рисование','Лепка','Моделирование','Программирование'],
        answerStoreField: 'section',
    }],
},{
    name: 'Дата',
    questions: [{
        text: 'Какого числа вы начнете ходить?',
        answerStoreField: 'date'
    }],
},{
    name: 'Подтверждение',
    questions: [{
        text: ['Подтвердите информацию',
        'Вашему ребенку {age} лет',
        'Вас зовут {nameParent}',
        'Ваш номер телефона {phoneNumber}',
        'Вы хотите записаться на {section}',
        'Начнете ходить {date}'
        ],
        buttons:['Да','Нет'],
    }]
},]

module.exports = {
    steps:steps,
}