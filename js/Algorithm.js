let Algorithm = {
    xhttp : new XMLHttpRequest(),
    QuestDiv : document.getElementById('Quest'),
    openQuest : function(directory,quest){
        this.xhttp.open('GET','./'+directory+'/'+quest+'.html');
        this.xhttp.send();
    },
    openSource : function(){

    }
}
Algorithm.xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        this.QuestDiv.innerHTML = this.responseText;
    }
};