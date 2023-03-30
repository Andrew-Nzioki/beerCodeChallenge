// Code here
const beerName=document.getElementById('beer-name')
const image=document.getElementById('beer-image')
const beerDescription=document.getElementById('beer-description')
const Breview=document.getElementById('review-list')

function getAllBears(){
fetch('http://localhost:3000/beers')
.then(response=>response.json())
.then(bearData=>{
    //console.table(bearData)
    bearData.forEach(bear=>{
        console.log(bear.name)
        const Bear=document.createElement('li')
        Bear.innerText=bear.name
        document.getElementById('beer-list').appendChild(Bear)
        Bear.addEventListener('click',()=>{
            getBeerDetails(bear)
        })

    })
})

}
function getBeerDetails(bear){

beerName.innerText=bear.name
image.src=bear.image_url
beerDescription.innerText=bear.description

Breview.innerHTML=``


for(let i=0;i<bear.reviews.length; i++){
    let deleteReview=document.createElement('button')
    deleteReview.innerText=` x`
    deleteReview.addEventListener('click',function deletereviws(){
        review.parentElement.remove()
    })
    let review=document.createElement('li')
    review.innerText=bear.reviews[i]
    review.appendChild(deleteReview)
    document.getElementById('review-list').append(review)
}


}


window.addEventListener('load',getAllBears)
