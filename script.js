let quote=document.querySelector(".quote")
async function showGallery(villaName, startIndex) {
    
    let currentImage= `/imag/${villaName}`
    var galleryContent = document.getElementById('gallery-content');
    galleryContent.innerHTML=galleryContent.innerHTML+`<img src="/imag/${villaName}/image2.jpg" alt=""></img>`
















//     var modal = document.getElementById('gallery-modal');

//     // Define a mapping of villa names to their respective image folders
//     var villaImageFolders = [];

//     // Assuming you have an array of villa names
//     var villaNames = await getFolderList();
//     console.log("folder list:"+villaNames)
//     // Creating the mapping using a for loop
//     for (var i = 0; i < villaNames.length; i++) {
//         var villaName = villaNames[i];
//         villaImageFolders[villaName] = 'images/' + villaName ;
//     }
    
  
   
// console.log(villaImageFolders)
//     // Get the image folder for the selected villa
//     var imageFolder = villaImageFolders[villaName];
//     var j=await getImageList(villaName)
//     console.log(j)
//     // Simulate loading images for the selected villa
//     var images = [
//         'image1.jpg',
//         'image2.jpg',
//         'image3.jpg'
//         // Add more images as needed
//     ];

//     // Clear previous content
//     galleryContent.innerHTML = '';

//     // Populate the modal with images
//     images.forEach(function(imageSrc, index) {
//         var img = document.createElement('img');
//         img.src = imageFolder + imageSrc;
//         img.onclick = function() {
//             showImageModal(imageFolder, images, index);
//         };
//         galleryContent.appendChild(img);
//     });

//     // Display the modal
//     modal.style.display = 'flex';

}

// async function showImageModal(imageFolder, images,selectedIndex) {
//     // var modal = document.getElementById('gallery-modal');
//     // var galleryContent = document.getElementById('gallery-content');

//     // // Clear previous content
//     // galleryContent.innerHTML = '';

//     // // Create a new image element for the selected image
//     // for (const index in images) {
        
//     //     var img = document.createElement('img');
//     //     img.src = "/imag/"+imageFolder +"/"+ images[index];
//     //     img.className = 'modal-image';
        
//     //     // Append the image to the modal
//     //     galleryContent.appendChild(img);
//     // }

//     // // Display the modal
//     // modal.style.display = 'flex';






//     var modal = document.getElementById('gallery-modal');
//     var galleryContent = document.getElementById('gallery-content');

//     // Clear previous content
//     galleryContent.innerHTML = '';

//     // Create a new image element for the selected image
//     var selectedImage = document.createElement('img');
//     selectedImage.src = `/imag/${imageFolder}/${images[selectedIndex]}`;
//     selectedImage.className = 'modal-selected-image';

//     // Append the selected image to the modal
//     galleryContent.appendChild(selectedImage);

//     // Create a container for the rest of the images
//     var restImagesContainer = document.createElement('div');
//     restImagesContainer.className = 'modal-rest-images';

//     // Create image elements for the rest of the images
//     for (let i = 0; i < images.length; i++) {
//         if (i !== selectedIndex) {
//             var img = document.createElement('img');
//             img.src = `/imag/${imageFolder}/${images[i]}`;
//             img.className = 'modal-small-image';

//             // Attach an event listener to the small images for further interaction
//             img.addEventListener('click', () => {
//                 showImageModal(imageFolder, images, i); // Show clicked image as the selected one
//             });

//             // Append the small images to the container
//             restImagesContainer.appendChild(img);
//         }
//     }

//     // Append the container with the rest of the images to the modal
//     galleryContent.appendChild(restImagesContainer);

//     // Create a button to switch to the next image
//     var nextButton = document.createElement('button');
//     nextButton.innerHTML = 'Next Image';
//     nextButton.addEventListener('click', () => {
//         // Calculate the index of the next image
//         var nextIndex = (selectedIndex + 1) % images.length;
//         showImageModal(imageFolder, images, nextIndex);
//     });

//     // Append the next button to the modal
//     galleryContent.appendChild(nextButton);

//     // Display the modal
//     modal.style.display = 'flex';
// }
async function showImageModal(imageFolder, images, selectedIndex) {
    var modal = document.getElementById('gallery-modal');
    var galleryContent = document.getElementById('gallery-content');

    // Clear previous content
    galleryContent.innerHTML = '';
    
    // Create a new image element for the selected image
    var selectedImageDiv=document.createElement('div');
    var selectedImage = document.createElement('img');
    selectedImageDiv.innerHTML=selectedImage;
    selectedImage.src = `/imag/${imageFolder}/${images[selectedIndex]}`;
    selectedImageDiv.className = 'modal-selected-image';
    
    
    
    // Append the selected image to the modal
    galleryContent.appendChild(selectedImageDiv);
    selectedImageDiv.appendChild(selectedImage);
    // Create a container for the rest of the images
    var restImagesContainer = document.createElement('div');
    restImagesContainer.className = 'modal-rest-images';
    
    // Create image elements for the rest of the images
    for (let i = 0; i < images.length; i++) {
        if (i !== selectedIndex) {
            var img = document.createElement('img');
            img.src = `/imag/${imageFolder}/${images[i]}`;
            img.className = 'modal-small-image';
            
            // Attach an event listener to the small images for further interaction
            img.addEventListener('click', () => {
                showImageModal(imageFolder, images, i); // Show clicked image as the selected one
            });
            
            // Append the small images to the container
            restImagesContainer.appendChild(img);
        }
    }
    
    // Append the container with the rest of the images to the modal
    galleryContent.appendChild(restImagesContainer);
    

                            // Create a button to switch to the previous image
                            var prevUrl = 'svgs/prev.svg'
                            var nextUrl = 'svgs/next.svg'
                            let arrows=document.createElement('div')
                            arrows.className="arrows"

                            selectedImageDiv.appendChild(arrows)

                            var prevButton = document.createElement('button');
                            arrows.appendChild(prevButton);
                            prevButton.innerHTML = '';
                            prevButton.className="prevbutton";
                            prevButton.addEventListener('click', () => {
                                // Calculate the index of the previous image
                                var prevIndex = (selectedIndex - 1 + images.length) % images.length;
                                showImageModal(imageFolder, images, prevIndex);
                            });
                            var logoImage = document.createElement('img');
                            logoImage.src = prevUrl;
                            logoImage.alt = 'prev'; 
                            prevButton.appendChild(logoImage);
                            // Create a button to switch to the next image
                            var nextButton = document.createElement('button');

                            nextButton.innerHTML = '';
                            nextButton.className="nextbutton";
                            arrows.appendChild(nextButton)
                            nextButton.addEventListener('click', () => {
                                // Calculate the index of the next image
                                var nextIndex = (selectedIndex + 1) % images.length;
                                showImageModal(imageFolder, images, nextIndex);
                            });

                            var logoImage1 = document.createElement('img');
                            logoImage1.src = nextUrl;
                            logoImage1.alt = 'next'; 
                            nextButton.appendChild(logoImage1);
  




                            // Keyboard event listener to navigate with arrow keys
                            window.addEventListener('keydown', (event) => {
                                switch (event.key) {
                                    case 'ArrowRight':
                                        nextButton.click();
                                        break;
                                    case 'ArrowLeft':
                                        prevButton.click();
                                        break;
                                    default:
                                        // Do nothing for other keys
                                        break;
                                }
                            });

    // Display the modal
    modal.style.display = 'flex';


}


async function closeGallery() {
    var modal = document.getElementById('gallery-modal');
    modal.style.display = 'none';
    quote.style.zIndex=2

}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById('gallery-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
async function getImageList(folderName){
    let a =await fetch(`${__dirname}/imag/${folderName}/`)
    let response=await a.text()
    let fs=document.createElement("div")
    fs.innerHTML=response
    let imglist=fs.getElementsByTagName("a")
    let finlist=[]
    imgs=Array.from(imglist)
    imgs.forEach(element => {
        if(element.textContent.includes("jpeg")||element.textContent.includes("jpg")){
            finlist.push(element.textContent)
        }
    });
    return finlist;

}
async function getFolderList(){
    let a =await fetch(`${__dirname}/imag/`)
    let response=await a.text()
    let bs=document.createElement("div")
    bs.innerHTML=response
    let list=bs.getElementsByTagName("a")
    let folderList=[];
    for (const key in list ) {
        if(key==0){
            continue;
        }else if(key==(list.length-1)){
            break;}
       
        let folderName = list[key].textContent;

        // Check if the folderName is defined and contains the word 'villa'
        if (folderName && folderName.toLowerCase().includes('villa')) {
            folderList.push(folderName);
        }
    }
    
    return folderList;
}
async function main(){
    let folderList=await getFolderList();
   



    let gallery=document.querySelector(".gallery")
    // let villa1ImgList=await getImageList("villa1");
    // console.log(villa1ImgList)
    // gallery.addEventListener("click",()=>{
    //     showImageModal("villa1/",villa1ImgList,1)
    // })




  

    for (const i in folderList ) { //this for loop is to create multiple cards
        folderList[i]=folderList[i].replace("/","")
        let card= `<div class="card" >
        <img src="/imag/${folderList[i]}/${folderList[i]}_thumb.jpeg" alt="${folderList[i]}">
        <div class="card-text">Villa ${i}</div>
        </div>`
        gallery.innerHTML=gallery.innerHTML+card
        // let eachvill=document.querySelector(".card")
        // console.log(eachvill)
    }
    
    // card.addEventListener("click",()=>{
        // console.log(`event listener added for ${folderList[i]}`)
        // })
      
        let cardlist=document.querySelector(".gallery").children
        for (let k=0;k<cardlist.length;k++) {
        
            let imagelist=await getImageList(folderList[k]);

            // console.log(folderList[k]+"hello")
            if(cardlist[k] instanceof Element){
                cardlist[k].addEventListener("click",()=>{
                // console.log(folderList[k])
                // console.log(imagelist)
                    quote.style.zIndex=1
                    showImageModal(folderList[k],imagelist,0); 
                })
            }
        }





    document.querySelector(".contact-button").addEventListener("click", () => {
        // Display the contact information modal

        document.getElementById('contactModal').style.display = 'flex';
        document.getElementById('contactModal').style.zIndex=2;
    });

    // Add a click event listener to the close button inside the contact modal
    document.getElementById('closeModalButton').addEventListener('click', () => {
        // Hide the contact information modal when the close button is clicked
        document.getElementById('contactModal').style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('contactModal')) {
            document.getElementById('contactModal').style.display = 'none';
        }
    });



    document.querySelector('.about-button').addEventListener('click', () => {
        // Display the about modal
        document.getElementById('aboutModal').style.display = 'flex';
        document.getElementById('aboutModal').style.zIndex=2;
    });

    // Add a click event listener to the close button inside the about modal
    document.getElementById('closeAboutModalButton').addEventListener('click', () => {
        // Hide the about modal when the close button is clicked
        document.getElementById('aboutModal').style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('aboutModal')) {
            document.getElementById('aboutModal').style.display = 'none';
        }
    });
    function scrollToTop() {
        // Scroll to the top with smooth behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

}


main()
