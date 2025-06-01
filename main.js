const items = []
 
let numero = 10 

numero = 15

function addItem () {
    const itemName = document.querySelector("#item").value
    
    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""
}  