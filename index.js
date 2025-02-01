function getdata(){
    const parameters=new URLSearchParams(window.location.search)
    return {
        name:parameters.get('name'),
        date:parameters.get('birthday')
    }
}
function capitalise(name)
{
    const words=name.split(' ');
    words.forEach((word,index)=>{words[index]=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()});
    return words.join(' ');
}
const {name,date}=getdata();
const CapitalisedName=capitalise(name)
const nameElement=document.getElementById('username');
nameElement.textContent=CapitalisedName+"'s Birthday";



const DaysCounter = document.getElementById("days");
const HoursCounter = document.getElementById("hours");
const MinsCounter = document.getElementById("mins");
const SecsCounter = document.getElementById("secs");
DaysCounter.style.fontSize="7rem"
const birthday = new Date(date);
birthday.setHours(0, 0, 0, 0); 


function Counter(){
    const today = new Date(); 
    if(today.getMonth()>birthday.getMonth() || (today.getMonth===birthday.getMonth && today.getDate>birthday.getDate))
    {
        birthday.setFullYear(today.getFullYear()+1)
    }
    else
        birthday.setFullYear(today.getFullYear())

    const diff_milli = birthday.getTime() - today.getTime();
    
    const remdays = Math.floor(diff_milli / (1000 * 60 * 60 * 24));
    const remhours = Math.floor((diff_milli % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remminutes = Math.floor((diff_milli % (1000 * 60 * 60)) / (1000 * 60));
    const remsecs = Math.floor((diff_milli % (1000 * 60)) / 1000);
    
    DaysCounter.innerHTML = remdays;
    HoursCounter.innerHTML=remhours
    MinsCounter.innerHTML=remminutes
    SecsCounter.innerHTML=remsecs
}
setInterval(Counter,1000)

