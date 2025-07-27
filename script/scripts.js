const menuToggle = document.getElementById('menuToggle');
const menuPopup = document.getElementById('menuPopup');
const overlay = document.getElementById('overlay');
const closePopup = document.getElementById("closePopup");

function showMenu() {
  menuPopup.classList.add('active');
  overlay.style.display = 'block';
}   



function hideMenu() {
  menuPopup.classList.remove('active');
  overlay.style.display = 'none';
  // Wait for animation before fully hiding
  setTimeout(() => {
    if (!menuPopup.classList.contains('active')) {
      menuPopup.style.display = 'none';
    }
  }, 100);
}




menuToggle.addEventListener('click', () => {
  if (menuPopup.classList.contains('active')) {
    hideMenu();
    menuToggle.classList.add("hide");
  } else {
    menuPopup.style.display = 'block';
    // Force reflow before adding class to trigger animation
    
    void menuPopup.offsetWidth;
    showMenu();
  }
});

closePopup.addEventListener("click", () => {
    hideMenu();
    menuToggle.classList.remove("hide");
  });

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    hideMenu();
  }
});
