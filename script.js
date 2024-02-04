let quote=document.querySelector(".quote")
async function showGallery(villaName, startIndex) {
    
    let currentImage= `/images/${villaName}`
    var galleryContent = document.getElementById('gallery-content');
    galleryContent.innerHTML=galleryContent.innerHTML+`<img src="/images/${villaName}/image2.jpg" alt=""></img>`
















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
//     //     img.src = "/images/"+imageFolder +"/"+ images[index];
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
//     selectedImage.src = `/images/${imageFolder}/${images[selectedIndex]}`;
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
//             img.src = `/images/${imageFolder}/${images[i]}`;
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
    selectedImage.src = `/images/${imageFolder}/${images[selectedIndex]}`;
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
            img.src = `/images/${imageFolder}/${images[i]}`;
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
async function getImageList(k){
    // let a =await fetch(`./images/${folderName}/`)
    // let response=await a.text()
    // let fs=document.createElement("div")
    // fs.innerHTML=response
    // let imglist=fs.getElementsByTagName("a")
    // let finlist=[]
    // imgs=Array.from(imglist)
    // imgs.forEach(element => {
    //     if(element.textContent.includes("jpeg")||element.textContent.includes("jpg")){
    //         finlist.push(element.textContent)
    //     }
    // });
     // Sample data
var array1 = ['villa1_thumb.jpeg','WhatsApp Image 2024-02-04 at 11.52.15.jpeg','WhatsApp Image 2024-02-04 at 11.52.16 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.16.jpeg','WhatsApp Image 2024-02-04 at 11.52.17.jpeg','WhatsApp Image 2024-02-04 at 11.52.18.jpeg','WhatsApp Image 2024-02-04 at 11.52.19 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.19.jpeg','WhatsApp Image 2024-02-04 at 11.52.20 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.20.jpeg','WhatsApp Image 2024-02-04 at 11.52.21.jpeg','WhatsApp Image 2024-02-04 at 11.52.22 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.22.jpeg','WhatsApp Image 2024-02-04 at 11.52.23.jpeg','WhatsApp Image 2024-02-04 at 11.52.24 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.24.jpeg','WhatsApp Image 2024-02-04 at 11.52.25 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.25.jpeg','WhatsApp Image 2024-02-04 at 11.52.27 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.27.jpeg','WhatsApp Image 2024-02-04 at 11.52.28.jpeg','WhatsApp Image 2024-02-04 at 11.52.29 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.29.jpeg','WhatsApp Image 2024-02-04 at 11.52.30 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.30.jpeg','WhatsApp Image 2024-02-04 at 11.52.31 (1).jpeg','WhatsApp Image 2024-02-04 at 11.52.31.jpeg','WhatsApp Image 2024-02-04 at 11.52.32.jpeg','WhatsApp Image 2024-02-04 at 11.52.34.jpeg','WhatsApp Image 2024-02-04 at 11.52.35.jpeg','WhatsApp Video 2024-02-04 at 11.52.34.mp4'];
var array2 = [ 'villa2_thumb.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.05.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.06 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.06.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.07.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.08.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.09 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.09.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.10 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.10.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.11 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.11.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.12.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.13 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.13.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.14 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.14.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.15 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.15.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.16.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.19.jpeg',
'WhatsApp Video 2024-02-04 at 11.54.05.mp4'];
var array3 = [ 'villa3_thumb.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.44 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.44.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.45 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.45.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.46 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.46.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.47 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.47 (2).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.47.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.48 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.48.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.49.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.50 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.50.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.51 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.51.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.52 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.52.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.53 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.53.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.54 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.54.54.jpeg',
'WhatsApp Image 2024-02-04 at 11.54.55.jpeg'];
var array4 = [ 'villa4_thumb.jpeg',
'WhatsApp Image 2024-02-04 at 11.57.37 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.57.39.jpeg',
'WhatsApp Image 2024-02-04 at 11.57.40 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.57.40.jpeg',
'WhatsApp Image 2024-02-04 at 11.57.41.jpeg',
'WhatsApp Image 2024-02-04 at 11.57.42 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.57.42.jpeg',
'WhatsApp Image 2024-02-04 at 11.57.43 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.57.43 (2).jpeg',
'WhatsApp Image 2024-02-04 at 11.57.43.jpeg',
'WhatsApp Image 2024-02-04 at 11.57.44 (1).jpeg',
'WhatsApp Image 2024-02-04 at 11.57.44.jpeg'];


var single2DArray = [array1, array2, array3, array4];




    // console.log(finlist)
    return single2DArray[k];

}
async function getFolderList(){
    let a =await fetch(`./images/`)
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
    folderList=["villa1/", "villa2/", "villa3/", "villa4/"];
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
        <img src="/images/${folderList[i]}/${folderList[i]}_thumb.jpeg" alt="${folderList[i]}">
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
        
            let imagelist=await getImageList(k);

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
