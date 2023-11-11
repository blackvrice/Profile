function MenuLayout(){
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    let menuList = ["Main","Game","Algorithm"];
    menuList.forEach((value) => {
        let li = document.createElement("li");
        li.innerHTML = value;
        ul.appendChild(li);
    })
    div.appendChild(ul);
    document.body.appendChild(div);    
}

function openPage(page){
    location.href = './'+page+'.html';
}