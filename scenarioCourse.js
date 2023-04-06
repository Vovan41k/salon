const steps = [{
    name: 'Контактная информация',
    questions:[{
        text:'Ваше имя',
        answerStoreField:'name',
    },{
        text:'Сколько вам лет',
        answerStoreField:'age',  
    },{
        text:'Ваш номер телефона',
        answerStoreField:'phone',   
    },{
        text:'Ваша электронная почта',
        answerStoreField:'email',   
    },{
        text:'Какой язык вы хотите изучить',
        answerStoreField:'language',
    },{
        text:'Ваш уровень знаний',
        buttons:['Низкий','Средний','Высокий'],
        answerStoreField:'lvl',   
    }],
},{
    name:'Обучение',
    questions:[{
        text:'Когда вы хотите начать учиться',
        answerStoreField:'date',
    },{
        text:'Сколько часов в неделю Вы можете заниматься',
        answerStoreField:'hoursAnWeek',
         
    },{
        text:'Какие занятия вам нужны',
        buttons:['Индивидуальные','Групповые'],
        answerStoreField:'coursesType',   
    }],
}]
module.exports ={
    steps:steps,
}