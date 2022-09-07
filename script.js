const overlay = document.querySelector('#hamburg_overlay');
function toggleOverlay() {
  if (overlay.style.display === 'none') {
    overlay.style.display = 'block';
  }
}
toggleOverlay();

function toggleOffOverlay() {
  overlay.style.display = 'none';
}
toggleOffOverlay();
