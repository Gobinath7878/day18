//Weather API     
  fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {console.log(data)


let division = document.createElement('div');
document.body.appendChild(division);
division.setAttribute("class","container") 

let row = document.createElement('div');
document.body.appendChild(row)
row.setAttribute("class","row")
division.appendChild(row)

let head = document.createElement('h1');
document.body.appendChild(head)
head.setAttribute("class","head")
row.appendChild(head);
head.innerText="WEATHER API";

for(i=0; i<data.length; i++){
        
        let col=document.createElement('div')
        document.body.appendChild(col)
        col.setAttribute("class","col-lg-4 col-sm-12")
        row.appendChild(col);

        let card=document.createElement('div')
        document.body.appendChild(card)
        card.setAttribute("class","card")
        col.appendChild(card)

        let cardhead=document.createElement('div')
        document.body.append(cardhead)
        cardhead.setAttribute("class","card-header")
        cardhead.innerText =`${data[i].name.common}`;
        card.appendChild(cardhead)
       

        let cardbody=document.createElement('div')
        document.body.append(cardbody)
        cardbody.setAttribute("class","card-body")
        card.appendChild(cardbody)
        
        var img=document.createElement('img')
        document.body.append(img)
        img.src = data[i].flags.png;
        cardbody.appendChild(img);
        img.setAttribute("class","img")

        let cardtext=document.createElement('div')
        document.body.append(cardtext)
        cardtext.setAttribute("class","cardtext")
        cardbody.appendChild(cardtext)

        let capitaltext1=document.createElement('ol')
        document.body.append(capitaltext1)
        capitaltext1.setAttribute("class","capitaltext1")
        capitaltext1.innerText=`captial:${data[i].capital}`;
        cardtext.appendChild(capitaltext1)
 
        let capitaltext2=document.createElement('ol')
        document.body.append(capitaltext2)
        capitaltext2.setAttribute("class","capitaltext2")
        capitaltext2.innerText=`region:${data[i].region}`;
        cardtext.appendChild(capitaltext2)

        let capitaltext3=document.createElement('ol')
        document.body.append(capitaltext3)
        capitaltext3.setAttribute("class","capitaltext3")
        capitaltext3.innerText=`countrycode:${data[i].cca3}`;
        cardtext.appendChild(capitaltext3)

        var cardbutton=document.createElement('div')
        document.body.append(cardbutton)
        cardbutton.setAttribute(`id`,`weather${i}`)
        cardbutton.setAttribute("class","button")
        cardbody.appendChild(cardbutton)

        var btn = document.createElement("button");
        btn.innerHTML = "Click for Weather";
        cardbutton.appendChild(btn);
        btn.setAttribute('id',`button${i}`);
        btn.setAttribute("href","#");
        btn.setAttribute("onclick", `getWeatherData("${data[i].name.common}","${i}")`);
        //btn.setAttribute("class","btn");

}
})
.catch((err) => {
        console.log(err);
})

function getWeatherData(data,i){
        
        var btn=document.getElementById(`button${i}`);
        var cardbutton=document.getElementById(`weather${i}`);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=1132f909205e139d4a112473eec88e5f`)
        
        .then((a)=>a.json()).then((data1)=>{
        
        console.log(data1)
        console.log(data1.main.temp)
        console.log(data1.wind.speed)
        console.log(data1.weather[0].description)
        
        
        
        btn.innerHTML=`<h3 class="text-capitalize" style="color:orange;">${data1.weather[0].description}</h3>
        <span>Temperature : ${data1.main.temp};</span>
        <span> WindSpeed:${data1.wind.speed}</span>
        `
        cardbutton.appendChild(btn);

        })


}
  


