const form = document.getElementById('form')
const username= document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput()
})

function checkInput() {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if(usernameValue === '') {
        setErrorfor(username, 'O nome do usuário é obrigatório.')
    } else {
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorfor(email, 'O email é obrigatório.')
    } else if(!checkEmail(emailValue)) {
        setErrorfor(email, 'Por favor insira um email válido!')
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorfor(password, 'A senha é obrigatória.')
    } else if(passwordValue.length < 7) {
        setErrorfor(password, 'A senha precisa ter no mínimo 7 caracteres.')
    } else {
        setSuccessFor(password)
    }

    if(passwordConfirmationValue === '') {
        setErrorfor(passwordConfirmation, 'A confirmação de senha é obrigatória.')
    } else if(passwordConfirmationValue !== passwordValue) {
        setErrorfor(passwordConfirmation, 'As senhas não conferem.')
    } else {
        setSuccessFor(passwordConfirmation)
    }

    const formControls = form.querySelectorAll('.form-control') 

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === 'form-control success'
    })

    if(formIsValid) {
        console.log('O formulário está 100% válido')
    }
}

function setErrorfor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    // Adicionar a mensagem de erro
    small.innerText = message

    // Adicionar a classe de erro
    formControl.className = 'form-control error'

}

function setSuccessFor(input, message) {

    const formControl = input.parentElement

    // Adicionar a classe de sucesso!
    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return email
}