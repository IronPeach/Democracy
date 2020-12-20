var amount = 400

var propositions = [
  'eat fried squids',
  'chew pubulic tree\'s leaves',
  'howl at moon',
  'mine diamonds'
]

var state = 1




document.getElementById('button').addEventListener('click', () => {
  document.getElementById('button').remove()
  var people = Math.floor(Math.random() * 7000) + 6000
  var currentPropositions = propositions[Math.floor(Math.random() * propositions.length)]
  var agreeAmount = Math.floor(Math.floor(Math.random() * people / 3) + people / 3)
  var disagreeAmount = people - agreeAmount
  document.getElementById('console').innerHTML = `There is ${people} people living currently living. You need to discuss if people should be able to ${currentPropositions}.</br></br>`
  document.getElementById('console').innerHTML += `${agreeAmount} agreed<br>`
  document.getElementById('console').innerHTML += `${disagreeAmount} disagreed</br></br>`
  document.getElementById('console').innerHTML += 'What is your decision?'
  var button1 = document.createElement('p')
  var agree = document.createTextNode('agree')
  button1.appendChild(agree)
  button1.setAttribute('id', 'button1')
  button1.setAttribute('class', 'button1')
  var button2 = document.createElement('p')
  var disagree = document.createTextNode('disagree')
  button2.appendChild(disagree)
  button2.setAttribute('id', 'button2')
  button2.setAttribute('class', 'button2')
  document.getElementById('buttonContainer').appendChild(button2)
  document.getElementById('buttonContainer').appendChild(button1)
  document.getElementById('button1').addEventListener('click', () => {
    document.getElementById('button1').remove()
    document.getElementById('button2').remove()
    document.getElementById('console').innerHTML = `You choosed to agree with ${agreeAmount} people.<br><br>`
    document.getElementById('console').innerHTML += `We shall not ${currentPropositions}!<br><br>`
    var amountForeigner = Math.floor(Math.floor(people / 10 * Math.random () * 3) + people / 10 * 3)
    var amountFemale = Math.floor(amountForeigner / 2.22545)
    var amountChild = Math.floor(amountFemale / 10.775)
    document.getElementById('console').innerHTML += `${amountForeigner} people is foreigners.<br>`
    document.getElementById('console').innerHTML += `${amountFemale} people is females.<br>`
    document.getElementById('console').innerHTML += `${amountChild} people is children.<br>`
    document.getElementById('console').innerHTML += 'Their votes don\'t count.<br><br>'
    var remain = Math.floor((people - amountForeigner - amountFemale - amountChild) / 10)

    var win = Math.floor(Math.random() * 2)
    if (win === 1) {
      win = 'You won!'
    }
    else {
      win = 'You lost!'
    }
    document.getElementById('console').innerHTML += `${remain} people that has been chosen has voted, ${win}`
  })

  document.getElementById('button2').addEventListener('click', () => {
    document.getElementById('button1').remove()
    document.getElementById('button2').remove()
    document.getElementById('console').innerHTML = `You choosed to disagree with ${disagreeAmount} people.<br><br>`
    document.getElementById('console').innerHTML += `We shall not ${currentPropositions}!<br><br>`
    var amountForeigner = Math.floor(Math.floor(people / 10 * Math.random () * 3) + people / 10 * 3)
    var amountFemale = Math.floor(amountForeigner / 2.22545)
    var amountChild = Math.floor(amountFemale / 10.775)
    document.getElementById('console').innerHTML += `${amountForeigner} people is foreigners.<br>`
    document.getElementById('console').innerHTML += `${amountFemale} people is females.<br>`
    document.getElementById('console').innerHTML += `${amountChild} people is children.<br>`
    document.getElementById('console').innerHTML += 'Their votes don\'t count.<br><br>'
    var remain = Math.floor((people - amountForeigner - amountFemale - amountChild) / 10)
    var win = Math.floor(Math.random() * remain)
    if (win >= agreeAmount / disagreeAmount) {
      win = 'You won!'
    }
    else {
      win = 'You lost!'
    }

    document.getElementById('console').innerHTML += `${remain} people that has been chosen has voted, ${win}`
  })
})



if (state === 1) {
  document.getElementById('console').innerHTML = 'Hello, and welcome to the simulation of Democracy. <br>'
  document.getElementById('console').innerHTML += 'Please press the continue button to continue.'
// document.getElementById('console').innerHTML = `bruh ${amount}`
}

if (state === 2) {
  document.getElementById('console').innerHTML = `bruh ${amount}`
}
