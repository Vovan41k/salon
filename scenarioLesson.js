const steps = [{
    name: 'Анкета',
    questions: [{
        text: 'Напиши свое имя.',
        answerStoreField: 'name',
    }, {
        text: 'Укажи свою электронную почту.',
        answerStoreField: 'mail'
    }],
}, {

    name: 'Инструменты',
    questions: [{
        text: 'Какие инструменты ты используешь в работе?',
        answerStoreField: 'tools',
    }],
},
{
    name: 'Уровень знаний',
    questions: [{
        text: 'Каким уровнем знаний обладаешь?',
        buttons: ['Низкий', 'Средний', 'Высокий'],
        answerStoreField: 'knowledgeLvl',
    }],
},
{
    name: 'Курс',
    questions: [{
        text: 'Что хочешь изучить?',
        answerStoreField: 'course',
    }],
}, {
    name: 'Подтверждение',
    questions: [{
        text: ['Подтвердите данные',
            'Ваше имя {name}',
            'Ваша электронная почта {mail}',
            'Вы используете {tools}',
            'Ваш уровень знаний {knowledgeLvl}',
            ' Вы хотите изучить {course}',
        ],
    }]
},]
module.exports = {
    steps: steps,
}