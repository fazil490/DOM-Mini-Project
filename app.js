var form = document.querySelector('#add-form')
var itemList = document.querySelector('#items')
var filter = document.querySelector('#filter')

form.addEventListener('submit', addItem)

itemList.addEventListener('click', removeItem)

filter.addEventListener('keyup', filterItem)

function addItem(e) {
    e.preventDefault()

    // getting input value
    var newItem = document.querySelector('#item')

    //create new li element
    var li = document.createElement('li')

    //add class to li
    li.className = "list-group-item"

    //adding text node
    li.appendChild(document.createTextNode(newItem.value))

    //creare a btn element
    var delBtn = document.createElement('button')

    //add class to li
    delBtn.className = "btn btn-danger btn-sm float-right delete"

    //adding text node
    delBtn.appendChild(document.createTextNode('X'))

    li.appendChild(delBtn)

    itemList.appendChild(li)

    newItem.value = ""
}

//remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        
            var li = e.target.parentElement
            itemList.removeChild(li)
        
    }
}

//filter items
function filterItem(e) {
    var text = e.target.value.toLowerCase()

    var items = itemList.getElementsByTagName('li')
    
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}