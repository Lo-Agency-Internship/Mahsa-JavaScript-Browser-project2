
function filterPictures(e) {
    const pictures = document.querySelectorAll(".img"); 

    let filter = e.target.dataset.filter;
    
    if (filter !== 'all'){
     
        pictures.forEach(picture => {
        picture.classList.contains(filter) 
        ? picture.classList.remove('hidden') 
        : picture.classList.add('hidden');
        
    });
}
else{
    pictures.forEach(picture =>{
        picture.classList.remove('hidden')
    })

}
  };

function filterPictureBySearch(){

const searchkey = document.getElementById("myInput").value;
const pictures = document.querySelectorAll(".img");
if (searchkey !== 'all'){
    pictures.forEach(picture => {
        picture.classList.contains(searchkey) 
        ? picture.classList.remove('hidden') 
        : picture.classList.add('hidden'); 

    })

}
else{
    pictures.forEach(picture =>{
        picture.classList.remove('hidden')
})
} 

}


//modal

function closeModal(event){

let imgNumber = event.target.dataset.img;
let modal = document.getElementById(`modal${imgNumber}`);
modal.style.display = "";
}



function openModal(event){
let imgNumber = event.target.dataset.img;
let modal = document.getElementById(`modal${imgNumber}`)
modal.style.display = "block";

}



function rightArrow(event){

const modals = document.querySelectorAll(".modal-content"); 
let modalIndex = event.target.dataset.img;
if (modalIndex < modals.length - 1){
    let modal = document.getElementById(`modal${modalIndex}`)
    modal.style.display = "none";
    modalIndex ++
    const modal1 = document.getElementById(`modal${modalIndex}`);
    modal1.classList.add('show')
}
else{
    let modal = document.getElementById(`modal${modalIndex}`)
    modal.style.display = "none";
    modal= document.getElementById('modal0');
    modal.style.display="block";

}

}

function leftArrow(event){

    const modals = document.querySelectorAll(".modal-content"); 
    let modalIndex = event.target.dataset.img;
    if (modalIndex > 0){
        let modal = document.getElementById(`modal${modalIndex}`)
        modal.style.display = "none";
        modalIndex --
        const modal1 = document.getElementById(`modal${modalIndex}`);
        modal1.classList.add('show')
    }
    
    
    }

