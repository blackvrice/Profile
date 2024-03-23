Category.page = 'Algorithm'

function openSource(langague){
    document.querySelectorAll('.language').forEach((value) =>{
        value.style.display = "";
    })
    document.getElementById(langauge).style.display='block';
}