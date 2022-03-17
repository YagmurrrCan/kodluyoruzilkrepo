// Liste içerisindeki son elemana ulaşmak veya eleman eklemek 

let firstitem = document.querySelector("ul#list>li:first-child")
console.log(firstitem)

let lastitem = document.querySelector("ul#list>li:last-child")
console.log(lastitem)
lastitem.innerHTML = "son öge degisti"

let ulDOM = document.querySelector( "ul#list")

let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi oluşturduğumuz öge"

console.log(ulDOM.lastChild)  

//ulDOM.append("Kendi oluşturdugumuz öge")

ulDOM.prepend(liDOM) //Başa ekler
//ulDOM.append(liDOM) //Sona ekler


let greeting = document.querySelector("#greeting")
greeting.classList.add("text-h1")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class")   //birden fazla class eklemek 

greeting.classList.remove("title", "second-class", "third-class")   //birden fazla class silmek

console.log(greeting.classList)