window.addEventListener('load',(e)=>{
    const birth = new Date(1997,1,23);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    if((birth.getMonth() > today.getMonth())||(birth.getMonth() == today.getMonth() && birth.getDate() > today.getDate())){
        age--;
    }
    document.getElementById('age').innerText = age;
});
