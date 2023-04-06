const steps = [{
    name: 'Первый пример',
    questions: [{
        text: '2x+3=7',
        buttons: ['2','3','4'],
        answerStoreField: 'firstAnswer',

    }]
},{
    name: 'Второй пример',
    questions: [{
        text: '5x+2=27',
        buttons: ['2','3','5'],
        answerStoreField: 'secondAnswer',
    }]
},{
    name: 'Третий пример',
    questions: [{
        text:'4x-7=35',
        buttons: ['2','5','7'],
        answerStoreField: 'thirdAnswer'
    }]
},{
    name:'Подтверждение',
    questions: [{
        text:['Ваши ответы',
        'Первый вопрос {firstAnswer}',
        'Второй вопрос {secondAnswer}',
        'Третий вопрос {thirdAnswer}']
    }]
,},
    ]
module.exports={
    steps:steps,
}