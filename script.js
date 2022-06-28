
function filterPictures(e) {
        const pictures = document.querySelectorAll(".img"); 
        let filter = e.target.dataset.filter;
        console.log('filter',filter)
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
    console.log('enter function')
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