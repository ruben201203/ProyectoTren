let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-El")
let count = 0


function increment(){
    count = count + 1
    countEl.innerText = count
}

function decrement() {
    count = count - 1
    if (count<=0) {
        count = 0
    }

    countEl.innerText = count
    }  

function save(){
    let countStr = " " + count + " , "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Entradas Anteriores: "
}
