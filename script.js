const form = document.querySelector('form')
const body = document.querySelector('body')
const reset = document.querySelector('.reset')
const heightInput = document.querySelector('#height')
const weightInput = document.querySelector('#weight')
const result = document.querySelector('#result')
// This usecase will give you empty value because we want to extract value  from eventlistener in it
// const height= parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseFloat(heightInput.value)
    const weight = parseFloat(weightInput.value)
    

    if (height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height!`
    }
    if (weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight!`
    }

    const bmi = (weight / ((height * height) /10000)).toFixed(2)
    // result.innerHTML = `BMI:- ${bmi}`

    if ( bmi < 18.6) {
        result.innerHTML = `You're under weight:- ${bmi}`
        body.style.backgroundColor = 'yellow'
    }
    if ( bmi <= 24.9 && bmi >= 18.6) {
        result.innerHTML = `You've normal weight:- ${bmi}`
        body.style.backgroundColor = 'green'
    }
    if ( bmi > 24.9) {
        result.innerHTML = `You're overweight weight:- ${bmi}`
        body.style.backgroundColor = 'red'
    }

    reset.addEventListener('click', function(reset){
        body.style.backgroundColor = 'rgb(188, 223, 223)'
        result.textContent = ''
        heightInput.value = ''
        weightInput.value = ''
    })
})














