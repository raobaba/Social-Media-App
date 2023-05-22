function toggleDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('hidden');
  }

  const profileDropdown = document.getElementById('profileDropdown');
  profileDropdown.addEventListener('click', toggleDropdown);

  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('hidden');
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
