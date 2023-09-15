   window.addEventListener('load', fk())
  function fk() {
    document.querySelector('.preloader').style.display= "none";
    
  }
   
   
      function myFun() {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("active");
        const menu = document.querySelector("#btn");
        menu.classList.toggle("open");
      }

      function myFun2() {
        if (screen.width < 768) {
          const navbar = document.querySelector(".navbar");
          navbar.classList.remove("active");
          const menu = document.querySelector("#btn");
          menu.classList.remove("open");
        }
        else {}
      }

      function msg() {
        let msg = document.getElementById("msg").value;
        let url = "https://wa.me/+918789493087?text=" + encodeURI(msg);
        window.open(url);
      }
      
      function book() {
       let newUrl = "https://wa.me/+918789493087?text=";
       window.open(newUrl);
      }