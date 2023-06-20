function toggleDropdown() {
  var dropdown = document.getElementById("profileDropdown");
  dropdown.classList.toggle("hidden");
}
var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  var expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
  menuToggle.setAttribute("aria-expanded", !expanded);
});
window.onload = function () {
  var logoutLink = document.querySelector("#profileDropdown a[href='#']");
  logoutLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
  });
};


// ------------------------------------------------------------
var anchorTag = document.getElementById('change');
anchorTag.addEventListener('click', function (event) {
  event.preventDefault();
  var inputFile = document.createElement('input');
  inputFile.type = 'file';
  var uploaded_image = "";
  inputFile.click();
  inputFile.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      uploaded_image = reader.result;
      console.log(uploaded_image);
      var img = new Image();
      img.src = uploaded_image;
      img.onload = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = 10;
        canvas.height = 10;
        ctx.drawImage(img, 0, 0, 10, 10);
        var resizedImage = canvas.toDataURL();
        localStorage.setItem('image', JSON.stringify(resizedImage));
        var image = JSON.parse(localStorage.getItem('image'));
        document.getElementById('display_image').style.backgroundImage = `url(${image})`;
        document.getElementById('display_image').style.backgroundRepeat = "no-repeat";
        document.getElementById('display_image').style.backgroundSize = "cover";
        document.getElementById('display_image').style.backgroundPosition = "center";
      };
    });
    reader.readAsDataURL(this.files[0]);
  });
});
var image = JSON.parse(localStorage.getItem('image'));
document.getElementById('display_image').style.backgroundImage = `url(${image})`;
document.getElementById('display_image').style.backgroundRepeat = "no-repeat";
document.getElementById('display_image').style.backgroundSize = "cover";
document.getElementById('display_image').style.backgroundPosition = "center";
// -------------------------------------------------------------

// Check if the email matches the required email
const email = JSON.parse(localStorage.getItem('userCredential'));
const isAdmin = email.email === 'admin@gmail.com';
// console.log(isAdmin)
document.getElementById('userName').innerText = email.name;
document.getElementById('userEmail').innerText = email.email;

// Function to toggle the visibility of the Admin section
function toggleAdminSection() {
  const adminSection = document.getElementById('adminLink');
  adminSection.style.display = isAdmin ? 'block' : 'none';
  if (isAdmin) {
    // Show the Admin section
    const adminLink = document.getElementById('mobileAdminLink');
    adminLink.style.display = 'block';
  } else {
    // Hide the Admin section
    const adminLink = document.getElementById('mobileAdminLink');
    adminLink.style.display = 'none';
  }
}

toggleAdminSection()


// JavaScript code to toggle the active state in the navbar
function toggleActive(elementId) {
  // Remove active class from all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('bg-gray-900');
  });

  // Add active class to the clicked navigation link
  const clickedLink = document.getElementById(elementId);
  clickedLink.classList.add('text-sky-700');
}


//----------------this code is for createStory --------------------
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".scroll-container");
  const scrollContent = document.querySelector(".scroll-content");
  const scrollLeftButton = document.querySelector(".scroll-left");
  const scrollRightButton = document.querySelector(".scroll-right");
  const scrollStep = 200; // Change this value to adjust scrolling speed
  scrollLeftButton.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: -scrollStep,
      behavior: "smooth",
    });
  });
  scrollRightButton.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: scrollStep,
      behavior: "smooth",
    });
  });
  scrollContainer.addEventListener("scroll", function () {
    scrollLeftButton.style.visibility =
      scrollContainer.scrollLeft > 0 ? "visible" : "hidden";
    scrollRightButton.style.visibility =
      scrollContainer.scrollLeft < scrollContent.scrollWidth - scrollContainer.offsetWidth
        ? "visible"
        : "hidden";
  });
});
var divTag = document.getElementById('createStory');
var img = document.createElement('img');
img.src = image;
img.style.width='100%';
img.style.marginLeft='10px'
img.style.height='70%';
divTag.appendChild(img);

///---------------------------createStory------------------------