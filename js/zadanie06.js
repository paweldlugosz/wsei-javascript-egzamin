document.addEventListener('DOMContentLoaded', function() {
    let list = document.getElementById('shopping-list');
    let button1 = document.getElementById('button-1');
    let button2 = document.getElementById('button-2');
    let button3 = document.getElementById('button-3');
    
    button1.addEventListener('click', function() {
        let chleb = document.createElement("li");
        chleb.innerText = 'chleb'
        list.appendChild(chleb);
    })

    button2.addEventListener('click', function() {
        list.removeChild(list.lastChild);
    })

    button3.addEventListener('click', function() {
        let obj = list.children[1].cloneNode(true);
        list.appendChild(obj);
    })
})