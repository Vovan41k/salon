const steps = [{
    name: 'Первый пример',
    qustions: [{
        text: '2x+3=7',
        buttons: ['2','3','4'],
        answerStoreField: 'firstAnswer',

    }]
},{
    name: 'Второй пример',
    questions: [{
        text: '5x+2=27',
        answerStoreField: 'secondAnswer',
    }]
},{
    name: 'Третий пример',
    questions: [{
        text:'4x-7=35',
        answerStoreField: 'thirdAnswer'
    }]
}]
module.exports={
    steps:steps,
}