let Category = {
    xhttp : new XMLHttpRequest(),
    quest : '',
    cpp : '',
    java : '',
    cs : '',
    python : '',
    kotlin : '',
    page : '',
    openQuest : function(quest){
        this.quest = quest;
        let div = document.getElementById('Quest');
        this.xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                div.innerHTML = this.responseText;
            }
        };
        this.xhttp.open('GET','./'+this.page+'/'+quest+'.html');
        this.xhttp.send();
    },
    openSource : function(langauge){
        document.querySelectorAll('.language').forEach((value) =>{
            value.style.display = "";
        })
        document.getElementById(langauge).style.display='block';
    }
}

window.addEventListener('load',event =>{
    document.querySelectorAll('.Category').forEach(element =>{
        element.addEventListener('click',e =>{
            let SubCategory = element.nextElementSibling.style;
            if(SubCategory.display != 'block')  SubCategory.display = 'block';
            else SubCategory.display = 'none';
        });
    });
});