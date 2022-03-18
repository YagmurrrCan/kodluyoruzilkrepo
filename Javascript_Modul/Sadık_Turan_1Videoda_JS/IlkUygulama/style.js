/*Bir öğrencinin bilgilerini alarak notunu hesaplayan uygulama.
Ad, Numara, Cinsiyet, Ders, Vize, Final, Average.
*/

let userName = prompt("What is your name?")
let number = prompt("What is your classnumber?")
let gender = prompt("What is your gender? (W/M)")
let lesson = prompt("What is your lesson?")
let midterm = prompt("What is your midterm point?")
let final = prompt("What is your final point?")
let average = (+midterm + +final)/2; // VİZEFİNAL GİBİ TOPLAMASINI İSTEMİYORSAK + İŞARETLERİYLE INTEGERA ÇEVİRİRİZ!

if(gender === "W" || gender === "M") {
    if( (midterm>=0 && midterm<=100) && (final>=0 && final<=100) ){
        let myInfo = document.querySelector("#myInfo")
        myInfo.innerHTML = `Name:  ${userName}, 
        Number:  ${number}, 
        Gender:  ${gender}, 
        Lesson:  ${lesson}, 
        Midterm:  ${midterm}, 
        Final:  ${final}, 
        Average:  ${average}`
    } else{
        alert("False point!")
    }
} else {
    alert("False gender!")
}

average.querySelector("h2").style.backgroundColor = 'red';