let Algorithm = {
    xhttp : new XMLHttpRequest(),
    quest : '',
    cpp : '',
    java : '',
    cs : '',
    python : '',
    kotlin : '',
    openQuest : function(quest){
        this.quest = quest;
        let div = document.getElementById('Quest');
        this.xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                div.innerHTML = this.responseText;
            }
        };
        this.xhttp.open('GET','./Algorithm/'+quest+'.html');
        this.xhttp.send();
    },
    openSource : function(languge){
        let script = document.getElementById('source');
        let url = '';
        switch (languge){
            case "cpp":
                url = this.cpp;
                break;
            case "java":
                break;
            case "cs":
                break;
            case "python":
                break;
            case "kotlin":
                break;
        }
    }
}