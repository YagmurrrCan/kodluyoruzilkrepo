let username = prompt("Adınız nedir?")
let myName = document.querySelector("#myName")
myName.innerHTML = `${username}`

if (username == ""){
    alert ("İsminizi boş bıraktınız!!!")   
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    let days = date.getDay();

    switch (days) {
        case 01:
            days = "Pazartesi";
            break;

            case 02:
                days = "Salı";
            break;

            case 03:
                days = "Çarşamba";
            break;

            case 04:
                days = "Perşembe";
            break;
                        
            case 05:
                days = "Cuma";
            break;

            case 06:
                days = "Cumartesi";
            break;
                                
            case 07:
                days = "Pazar";
            break;
    }
    
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session + " " + days;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
    
}

showTime();