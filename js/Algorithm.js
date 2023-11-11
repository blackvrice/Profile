function openQuest(directory,quest){
    let xhttp = new XMLHttpRequest();
    let QuestDiv = document.getElementById('Quest');
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            QuestDiv.innerHTML = this.responseText;
        }
    };
    xhttp.open('GET','./'+directory+'/'+quest+'.html');
    xhttp.send();
}