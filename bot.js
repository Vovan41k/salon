require('dotenv').config()
const { steps } = require('./scenarioBrief')
const token = process.env.TOKEN
const TelegramBot = require('node-telegram-bot-api');
const { prepareText } = require('./scenarioService');
const userInfo = {
    stage: [0, 0],
    answers: {}
}

const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/start/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'Здравствуйте, здесь вы можете записаться к нам!',
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
        const chatId = query.message.chat.id
        if (prefix === 'c') {
            // bot.sendMessage('Как вас зовут?')
            userInfo.stage = [0, 0]
            userInfo.answers = {}
            processAnswer(chatId, 0, -1);
        }
        else if (prefix === 'a') {
            const [, stepId, questionId, answerId] = query.data.split(',')
            const answer = steps[stepId]
                .questions[questionId]
                .buttons[answerId]
            const answerStoreField = steps[stepId].questions[questionId].answerStoreField
            userInfo.answers[answerStoreField] = answer
            processAnswer(chatId, +stepId, +questionId)

            // bot.sendMessage(query.message.chat.id, `Вы ответили: ${answer}`)
        }
        else if (prefix === 'ma') {
            const [, stepId, questionId, answerId] = query.data.split(',')
            const answer = steps[stepId]
                .questions[questionId]
                .buttons[answerId]
            bot.sendMessage(chatId, `Вы отметили ${answer}`)
        }
    } catch (error) {
        console.log(error)
        bot.sendMessage(query.message.chat.id, 'Произошла ошибка')
    }
})


const processAnswer = (
    chatId, stepId, questionId) => {
    if (steps[stepId].questions.length > questionId + 1) {
        questionId += 1;
    } else {
        stepId += 1;
        questionId = 0;
        if (stepId === steps.length) {
            bot.sendMessage(chatId, 'Опрос завершен')
            stepId = 0 //@todo завершить опрос
            return
        }
    }
    console.log(stepId)
    const question = steps[stepId].questions[questionId]
    let options = {}
    if (question.buttons) {
        let prefix = 'a'
        if (question.type === 'multi') {
            prefix = 'ma'
        }
        const cButtons = [...question.buttons]
        const buttons = cButtons.map((str, i) => {
            return {
                text: str,
                callback_data: `${prefix},${stepId},${questionId},${i}`,
            }
        })
        if (question.type === 'multi') {
            buttons.push({
                text: 'Применить',
                callback_data: `a,${stepId},${questionId},${buttons.length - 1}`,
            })
        }
        options = {
            "reply_markup": {
                "inline_keyboard": question.vertical ? buttons.map((button) => {
                    return [button]
                }) : [buttons]
            }
        }
    }

    bot.sendMessage(
        chatId,
        prepareText(question.text, userInfo.answers),
        options,
    )
    userInfo.stage = [stepId, questionId]
}
bot.on('message', (msg) => {
    try {
        if (!msg?.text || msg.text.startsWith('/')) return;
        const chatId = msg.chat.id
        let [stepId, questionId] = userInfo.stage
        const answerStoreField = steps[stepId].questions[questionId].answerStoreField
        userInfo.answers[answerStoreField] = msg.text
        processAnswer(chatId, +stepId, +questionId)
        if (stepId + 1 === steps.length) {
            bot.sendMessage(chatId, 'Опрос завершен')
        }


    } catch (error) {
        console.log(error)
        bot.sendMessage(msg.chat.id, 'Произошла ошибка')
    }
})