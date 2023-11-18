let Algorithm = {
    xhttp : new XMLHttpRequest(),
    openQuest : function(quest){
        var div = document.getElementById('Quest');
        this.xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                div.innerHTML = this.responseText;
            }
        };
        this.xhttp.open('GET','./Algorithm/'+quest+'.html');
        this.xhttp.send();
    }
}