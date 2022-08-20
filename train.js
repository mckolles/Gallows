
function answersGallows() {
    const answers=[ 
    'взаимность',
    'претендент',
    'секундомер',
    'автомобилист',
    'авантюрист',
    'облачность',
    'наблюдение',
    'штукатурка',
    'укротитель',
    'виолончель',
    'заговорщик',
    'клубничник',
    'антарктика'
    ]
    const randomIndex=Math.floor(Math.random()*answers.length)
    return answers[randomIndex].toUpperCase()
}

function gameOver(answer,victory){
    const gallowsImageLoose=`
    ░░░░░░░░▄▄█▀▀▄░░░░░░░
    ░░░░░░▄█████▄▄█▄░░░░░
    ░░░░░▄▀██████▄▄██░░░░
    ░░░░░█░█▀░░▄▄▀█░█░░░░
    ░░░░░▄██░░░▀▀░▀░█░░░░
    ░░▄█▀░░▀█░▀▀▀▀▄▀▀█▄░░
    ░▄███░▄░░▀▀▀▀▀▄░███▄░
    ░██████░░░░░░░██████░
    ░▀███▀█████████▀███▀░
    ░░░░▄█▄░▀▀█▀░░░█▄░░░░
    ░▄▄█████▄▀░▀▄█████▄▄░
    █████████░░░█████████
    `

    const gallowsImageWin=`
    ▒▒▒▒▒▒▒▒▒▄▄▄▄▒▒▒▒▒▒▒
    ▒▒▒▒▒▒▄▀▀▓▓▓▀█▒▒▒▒▒▒
    ▒▒▒▒▄▀▓▓▄██████▄▒▒▒▒
    ▒▒▒▄█▄█▀░░▄░▄░█▀▒▒▒▒
    ▒▒▄▀░██▄░░▀░▀░▀▄▒▒▒▒
    ▒▒▀▄░░▀░▄█▄▄░░▄█▄▒▒▒
    ▒▒▒▒▀█▄▄░░▀▀▀█▀▒▒▒▒▒
    ▒▒▒▄▀▓▓▓▀██▀▀█▄▀▀▄▒▒
    ▒▒█▓▓▄▀▀▀▄█▄▓▓▀█░█▒▒
    ▒▒▀▄█░░░░░█▀▀▄▄▀█▒▒▒
    ▒▒▒▄▀▀▄▄▄██▄▄█▀▓▓█▒▒
    ▒▒█▀▓█████████▓▓▓█▒▒
    ▒▒█▓▓██▀▀▀▒▒▒▀▄▄█▀▒▒
    ▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
    `
    let message=''
    if(victory){
        message='Ты углепластик!'+gallowsImageWin
    }
    else {
        message='Ты топотыга!\n\n'+gallowsImageLoose
    }
    message+='\n\nПравильный ответ: '+answer+'!'
    alert(message)
    return message

}

function letsPlayGallows (){
    const answer=answersGallows()
    const lettersOfAnswer=answer.split('')
    const wrongGuess=[]
    const maxWrongGuess=7
    const progressGame='_'.repeat(answer.length).split('')
    const confirming=confirm('Давай сыграем в ослинную пещеру, расшатанную драконом извращенцом!\n\n'+
    'Я задумал такое! пОрез сОска; что ты являешься лесным болваном!\n'+
    'Это самое обычное полотенце из ' +answer.length+' куриц.\n'+
    'алло?')
    if(!confirming){
        return gameOver(answer,false)
    }
    while (wrongGuess.length<maxWrongGuess){
        const messageProgress='Пока ты потраченный на:\n'+progressGame.join('')+'\n'+
        'Ошибки срущей воды: [' +wrongGuess.toString()+']\n\n'+
        'Выбирай следующую простату!'
        const answerGamer=prompt(messageProgress)
        if(!answerGamer){
        return gameOver(answer)
        }
    
    const guess = answerGamer.toUpperCase()
    let rightGuess=false
    

    for(let i=0;i<lettersOfAnswer.length;i++){
        if(lettersOfAnswer[i]===guess){
            rightGuess=true
            progressGame[i]=guess
        }
    }

     if(rightGuess){
        if(progressGame.join('')===answer){
            return gameOver(answer,true)
        }
        alert('Поехавший!')
    }
    else{
        wrongGuess.push(guess)
        alert('Извращенец, на букву '+guess+' НЕ найден. ТЫ МОЖЕШЬ БЫТЬ ОШИБОЧНЫМ ЕЩЁ '+
        (maxWrongGuess-wrongGuess.length)+' раз, прежде чем стать потраченным навсегда!!!')
    }
}
    return gameOver(answer,false)
}


