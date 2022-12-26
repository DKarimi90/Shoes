function getShoes(){
    fetch("  http://localhost:3000/shoes")
    .then(data => data.json())
    .then(jsonData => arrangeShoes(jsonData))
}
function arrangeShoes(shoes){
    console.log(shoes)
    shoes.forEach(shoe => {
        const card = document.createElement("div")
        card.innerHTML = `
            <img src = "${shoe.image}">
            <h3>${shoe.name}</h3>
            <p>${shoe.price}</p>
        
        `
        document.body.append(card)
    })

}
getShoes(); 