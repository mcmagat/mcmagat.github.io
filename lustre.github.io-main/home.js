document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.latest-artworks-carousel .carousel-item');
  const overlay = document.getElementById('popupOverlay');
  const popupImage = document.getElementById('popupImage');
  const popupTitle = document.getElementById('popupTitle');
  const popupArtist = document.getElementById('popupArtist');
  const closeBtn = document.getElementById('closePopup');
  const postBtn = document.getElementById('postComment');
  const commentInput = document.getElementById('commentInput');

  // Add data attributes to carousel items
  items.forEach(item => {
    const artistText = item.querySelectorAll('p')[1].innerText;
    item.setAttribute('data-artist', artistText);
  });

  // Open popup
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img, video');
      const title = item.querySelectorAll('p')[0].innerText;
      const artist = item.getAttribute('data-artist');

      if (img.tagName === 'VIDEO') {
        popupImage.src = img.querySelector('source').src;
      } else {
        popupImage.src = img.src;
      }

      popupTitle.innerText = title;
      popupArtist.innerText = artist;

      overlay.style.display = 'flex';
    });
  });

  // Close popup
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    popupImage.src = '';
    commentInput.value = '';
  });

  // Click outside popup closes it
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.style.display = 'none';
  });

  // Post comment alert
  postBtn.addEventListener('click', () => {
    alert("You need an account to post a comment.");
    commentInput.value = '';
  });
});