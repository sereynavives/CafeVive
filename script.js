document.addEventListener("DOMContentLoaded', function() {
    const addPhotoButton = document.getElementById('add-photo-btn');
    const photoContainer = document.getElementById('photo-container');
    const photoUrlInput = document.getElementById('photo-url-input');
    const photoCaptionInput = document.getElementById('photo-caption-input');

    addPhotoButton.addEventListener('click', function() {
        const photoUrl = photoUrlInput.value;
        const photoCaption = photoCaptionInput.value;

        if (photoUrl) {
            const photoCard = document.createElement('div');
            photoCard.classList.add('photo-card');
            const image = document.createElement('img);
            image.src = photoUrl;
            const caption = document.createElement('h2');
            caption.textContent = photoCaption;
            photoCard.appendChild(image);
            photoCard.appendChild(caption);
            photoContainer.appendChild(photoCard);
            photoUrlInput.value = '';
            photoCaptionInput = '';
          }
        });
      });
