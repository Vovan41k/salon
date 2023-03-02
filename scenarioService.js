const prepareText = (text, answers)=>{
    if(typeof text === 'string'){
        return placeVariables(text,answers)
    }
    return placeVariables(text.join("\n"),answers)
}
const placeVariables = (text, answers) => {
    const arr = []
    let mode = text[0] === '{' ? 'var' : 'str'
    let str = ''
    for (let i = 0; i < text.length; i += 1) {
        if (mode === 'var') {
            if (text[i] !== '}') {
                str += text[i]
            }
            else {
                arr.push(str + '}')
                str = ''
                mode = 'str'
            }
        }else{
            if (text[i] !== '{') {
                str += text[i]
            }
            else {
                arr.push(str)
                str = '{'
                mode = 'var'
            }  
        }

    }
    if(text.slice(-1)!=='}'){
        arr.push(str)
    }
    let result = ''
    for(let item of arr){
        if(item[0]==='{'){
            result+=answers[item.slice(1,-1)]
        }else{
            result+=item
        }
    }
    return result
}
module.exports={
    prepareText,
    placeVariables
}