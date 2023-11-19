//we'll test with this




const images = document.querySelectorAll('.pictures');

// Loop image to attach click event listeners
images.forEach(image => {
    image.addEventListener('click', () => {
        // Create a modal container
        const modal = document.createElement('div');
        modal.classList.add('modal');



        // Create an image element within the modal for the enlarged view
        const modalImg = document.createElement('img');
        modalImg.src = image.src; // macth the image to what's clicked
        modalImg.classList.add('modal-content');




        //moreeee
        // Create a caption element
        const caption = document.createElement('div');
        caption.classList.add('caption');
        const captionText = document.createTextNode(image.alt); // Caption is the alt text
        caption.appendChild(captionText);



        // so both the modals show up
        modal.appendChild(modalImg);
        modal.appendChild(caption);


        // modal in the body
        document.body.appendChild(modal);



        // Close the modal 
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});