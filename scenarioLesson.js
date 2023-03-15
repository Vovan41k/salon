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
},]
module.exports={
    steps:steps,
}