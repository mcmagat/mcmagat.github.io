document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.twod-catalog .item'); // 2D catalog
  const overlay = document.getElementById('popupOverlay');
  const popupVideo = document.getElementById('popupVideo');
  const popupTitle = document.getElementById('popupTitle');
  const popupArtist = document.getElementById('popupArtist');
  const closeBtn = document.getElementById('closePopup');
  const postBtn = document.getElementById('postComment');
  const commentInput = document.getElementById('commentInput');

  const artistName = "Jonah Paulin";

  // Open popup
  items.forEach(item => {
    item.addEventListener('click', () => {
      const videoSrc = item.querySelector('video source').src;
      const title = item.querySelector('p').innerText;

      popupVideo.src = videoSrc;
      popupTitle.innerText = title;
      popupArtist.innerText = artistName;

      overlay.style.display = 'flex';
    });
  });

  // Close popup
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    popupVideo.pause();
    popupVideo.src = '';
    commentInput.value = '';
  });

  // Clicking outside popup closes it
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      popupVideo.pause();
      popupVideo.src = '';
    }
  });

  // Posting comment
  postBtn.addEventListener('click', () => {
    alert("You need an account to post a comment.");
    commentInput.value = '';
  });
});