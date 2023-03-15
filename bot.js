require('dotenv').config()
const { steps } = require('./scenarioSection')
const token = process.env.TOKEN
const TelegramBot = require('node-telegram-bot-api');
const { prepareText } = require('./scenarioService');
const userInfo = {
    stage: [0, 0],
    answers: {}
}

const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/start/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'Добрый день! Я - бот записи в салон красоты... С моей помощью вы можете записаться на стрижку к нам!',
        {
            "reply_markup": {
                "inline_keyboard": [[
                    {
                        text: 'Записаться',
                        callback_data: 'c,1',
                    },
                ]],

            },
        })
})
bot.on('callback_query', (query) => {
    try {
        const [prefix] = query.data.split(`,`)
        if (prefix === 'c') {
            // bot.sendMessage('Как вас зовут?')
            bot.sendMessage(query.message.chat.id, steps[0].questions[0].text)
            userInfo.stage = [0, 0]
        }
        else if(prefix === 'a'){
            const [, stepId, questionId, answerId] = query.data.split(',')
            const answer = steps[stepId]

                .questions[questionId]
                .buttons[answerId]
            
            bot.sendMessage(query.message.chat.id, `Вы ответили: ${answer}`)
        }
    } catch (error) {
        console.log(error)
        bot.sendMessage(query.message.chat.id, 'Произошла ошибка')
    }
})
bot.on('message', (msg) => {
    try {
        const chatId = msg.chat.id
        let [stepId, questionId] = userInfo.stage
        const answerStoreField = steps[stepId].questions[questionId].answerStoreField
        userInfo.answers[answerStoreField] = msg.text
        if (steps[stepId].questions.length>questionId+1){
            questionId += 1;
        } else{
            stepId += 1;
            questionId = 0;
        }
        const question = steps[stepId].questions[questionId]
        let options = {}
        if(question.buttons){
            const buttons = question.buttons.map((str, i) => {
                return {
                    text: str,
                    callback_data: `a,${stepId},${questionId},${i}`,
                }
            })
            options = {
                "reply_markup": {
                    "inline_keyboard": [buttons]
                }
            }
        }
        
        bot.sendMessage(
            chatId,
            prepareText(question.text,userInfo.answers),
            options,
        )
        console.log({ stepId, questionId })
        userInfo.stage = [stepId, questionId]
    } catch (error) {
        console.log(error)
        bot.sendMessage(msg.chat.id, 'Произошла ошибка')
    }
})