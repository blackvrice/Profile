let Algorithm = {
    xhttp : new XMLHttpRequest(),
    QuestDiv : document.getElementById('Quest'),
    openQuest : function(directory,quest){
        this.xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                Algorithm.QuestDiv.innerHTML = this.responseText;
            }
        };
        this.xhttp.open('GET','./'+directory+'/'+quest+'.html');
        this.xhttp.send();
    },
    openSource : function(){

    }
}