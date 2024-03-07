document.addEventListener('DOMContentLoaded', function() {
    var textElement = document.querySelector('.text');
    var texts = ["Graduate student", "Software Engineer"];
    var index = 0;
    
    function typeText() {
        textElement.textContent = texts[index];
        index = (index + 1) % texts.length;
        setTimeout(typeText, 2000); // Adjust typing speed as needed
    }
    
    typeText();
});
// JavaScript to handle the click event on certification buttons and show pop-up image
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cert-button');
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certImage');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image');
            modal.style.display = 'block';
            modalImg.src = imageUrl;
        });
    });

    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".proj-button");
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certImage");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const imagePath = this.getAttribute("data-image");
            modal.style.display = "block";
            modalImg.src = imagePath;
        });
    });

    // Close the modal when the close button or outside the modal is clicked
    const closeBtn = document.querySelector(".close");
    window.addEventListener("click", function(event) {
        if (event.target === modal || event.target === closeBtn) {
            modal.style.display = "none";
        }
    });
});
