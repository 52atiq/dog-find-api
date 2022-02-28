
const loadDog =()=>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then( data => displayDog(data))
    
}

const displayDog = (dogList) =>{
 const main = document.getElementById('main');
 const first1oData = dogList.slice(0,10);

 for(const dog of first1oData){
     console.log(dog)
    const div = document.createElement('div');
    div.className ='col-lg-4'
     div.innerHTML =`
     <h2> ${dog.name} </h2>
     <p> ${dog.temperament} </p>
     <img width="350px" height="250px" src="${dog.image.url}" />
     <p> ${dog.weight.imperial} </p>
     `;
     console.log(div);
     main.appendChild(div)
 }


}