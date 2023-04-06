const steps = [{
    name: 'Контактная информация',
    questions: [{
        text: 'Название компании',
        answerStoreField: 'company',
    }, {
        text: 'Сайт компании',
        answerStoreField: 'companySite',
    }, {
        text: 'Контактное лицо, должность',
        answerStoreField: 'contact',
    }, {
        text: 'Телефон',
        answerStoreField: 'phone',
    }, {
        text: 'Электронный адрес',
        answerStoreField: 'email',
    }, {
        text: 'Другие контакты',
        answerStoreField: 'anotherContact'
    }],
}, {
    name: 'О компании',
    questions: [{
        text: 'Сфера деятельности',
        answerStoreField: 'sphere',
    }, {
        text: 'Товары и услуги',
        answerStoreField: 'product',
    }, {
        text: 'Описание продукта или услуг',
        answerStoreField: 'description',
    }, {
        text: 'Преимущества и особенности компании',
        answerStoreField: 'advantages',
    }, {
        text: 'Ваши конкуренты',
        answerStoreField: 'competitors',
    }, {
        text: 'Целевая аудитория',
        answerStoreField:'auditory',
    },{
        text: 'Регионы работы',
        answerStoreField: 'regions',   
    },{
        text: 'Этапы работы с вами',
        answerStoreField:'userSteps',   
    }]
},{
    name:'Информация о лендинге',
    questions:[{
        text:'Акции, скидки и уникальные предложения',
        answerStoreField:'promotions',
    },{
        text:'Есть ли корпоративный стиль',
        buttons:['Да','Нет'],
        answerStoreField:'1',   
    },{
        text: 'Есть ли логотип, название, рекламный слоган',
        buttons:['Логотип','Название','Рекламный слоган','Ничего'],
        answerStoreField:'2',   
    },{
        text:'Есть ли у вас графические материалы для использования на сайте?',
        buttons:['Фотографии продукции и компании','Картинки','Дизайны','Буклеты','Слайды','Ничего'],
        answerStoreField:'3'
    }]
}]
module.exports={
    steps:steps,
}