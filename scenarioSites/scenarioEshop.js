const steps = [{
    name: 'Контактная информация',
    questions: [{
        text: 'Ваше ФИО',
        answerStoreField: 'fullname',
    }, {
        text: 'Номер телефона',
        answerStoreField: 'phone',
    }, {
        text: 'Другие контакты',
        answerStoreField: 'anotherContact',
    }]
}, {
    name: 'Информация о компании',
    questions: [{
        text: 'Название компании',
        answerStoreField: 'company',
    }, {
        text: 'Сайт компании',
        answerStoreField: 'companySite',
    }, {
        text: 'Какие товары или услуги представяете',
        answerStoreField: 'product',
    }, {
        text: 'Примеры ваших конкурентов',
        answerStoreField: 'competitors',
    }, {
        text: 'Ваша целевая аудитория',
        answerStoreField: 'auditory',
    }, {
        text: 'Были ли у вас раньше компании',
        answerStoreField: 'experience',
    }, {
        text: 'Как вы будете продавать товар',
        answerStoreField: 'delivery',
    },{
        text:'Количество и характеристика товара',
        answerStoreField:'quantity',   
    },{
        text:'Способы оплаты',
        answerStoreField: 'paymentMethods',   
    },{
        text:'Интеграции',
        answerStoreField:'integration',   
    },{
        text:'Дополнительные услуги',
        answerStoreField:'additionalServices',   
    }]
}]
module.exports={
    steps:steps,
}