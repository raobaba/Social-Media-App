function toggleDropdown() {
    var dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("hidden");
  }
  
  var menuToggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  
  menuToggle.addEventListener("click", function() {
    menu.classList.toggle("hidden");
    var expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
    menuToggle.setAttribute("aria-expanded", !expanded);
  });

  window.onload = function() {
    var logoutLink = document.querySelector("#profileDropdown a[href='#']");
    logoutLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "index.html";
    });
  };




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


      // Check if the email matches the required email
      const email = JSON.parse(localStorage.getItem('userCredential'));
      const isAdmin = email.email === 'admin@gmail.com';
      console.log(isAdmin)
  
      // Function to toggle the visibility of the Admin section
      function toggleAdminSection() {
        const adminSection = document.getElementById('adminSection');
        adminSection.style.display = isAdmin ? 'block' : 'none';
      }
      
      toggleAdminSection()


    //   <div class="visible md:hidden lg:hidden xl:hidden 2xl:hidden">
    //   <input type="text"
    //     class="block w-full bg-gray-900 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:text-gray-900"
    //     placeholder="Search">
    // </div>