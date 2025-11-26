document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.models-catalog .item');
  const overlay = document.getElementById('popupOverlay');
  const popup = overlay.querySelector('.popup-content');
  const popupImage = document.getElementById('popupImage');
  const popupTitle = document.getElementById('popupTitle');
  const popupArtist = document.getElementById('popupArtist');
  const closeBtn = document.getElementById('closePopup');
  const postBtn = document.getElementById('postComment');
  const commentInput = document.getElementById('commentInput');

  // Set artist dynamically
  const artistName = "Maria Beatrice Magat";

  // Open popup
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('p').innerText;
      popupImage.src = img.src;
      popupTitle.innerText = title;
      popupArtist.innerText = artistName;

      overlay.style.display = 'flex';
    });
  });

  // Close popup
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    popupImage.src = '';
    commentInput.value = '';
  });

  // Clicking outside popup closes it
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.style.display = 'none';
  });

  // Posting comment
  postBtn.addEventListener('click', () => {
    alert("You need an account to post a comment.");
    commentInput.value = '';
  });
});