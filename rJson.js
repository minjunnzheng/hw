


let jsonURL = "./info.json";
let req = new XMLHttpRequest();
req.open('GET', jsonURL,true); 
req.send(null);
req.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let data = JSON.parse(this.responseText);
        let tab=document.getElementById("mytable");

 
        let tr=document.createElement('tr')
        let td1=document.createElement('td')
        let td2=document.createElement('td')
        let td3=document.createElement('td')
        let text1 = document.createTextNode(Object.keys(data)[0]);
        let text2 = document.createTextNode(Object.keys(data)[1]);
        let text3 = document.createTextNode(Object.keys(data)[2]);
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tab.appendChild(tr);



        let tr2=document.createElement('tr')
        let td21=document.createElement('td')
        let td22=document.createElement('td')
        let td23=document.createElement('td')
        let text21 = document.createTextNode(Object.values(data)[0]);
        let text22 = document.createTextNode(Object.values(data)[1]);
        let text23 = document.createTextNode(Object.values(data)[2]);
        td21.appendChild(text21);
        td22.appendChild(text22);
        td23.appendChild(text23);
        tr2.appendChild(td21);
        tr2.appendChild(td22);
        tr2.appendChild(td23);
        tab.appendChild(tr2);


    }
}