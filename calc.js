let input = document.getElementById('input')
let buttons = Array.from(document.getElementsByClassName("button"))
buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case 'RESET':
                input.innerText = ''
                break
            case '←':
                if (input.innerText) {
                    input.innerText = input.innerText.slice(0, -1)
                } 
                break
            case '=':
                try {
                    input.innerText = eval(input.innerText)

                }
                catch {
                    input.innerText = "ERROR"
                

                }
                break 
            default: 
            input.innerText += e.target.innerText

        }
    })
})