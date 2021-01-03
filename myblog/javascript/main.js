
//slide menu for mobile 

const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }


//theme changer

var checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener('change', function(){
  if(this.checked){
    trans()
    document.documentElement.setAttribute('data-theme', 'dark')
  }else{
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
  }

});

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  }, 1000)
}

//share api
const button = document.querySelector(".btn");
const shareButton=document.querySelector(".share-btn")
const overlay = document.querySelector(".overlay");
const shareModal = document.querySelector(".share-container");
const close = document.querySelector(".close")
const title = window.document.title;
const url = window.document.location.href;

//for native share
shareButton.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
        title: 'Check it now!',
        url: '${url}'

      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
  } else {
    
  }
})

//display qr box 
button.addEventListener('click', () => {
  overlay.classList.add('show-share');
  shareModal.classList.add('show-share');
});

// remove pop-up box on click
close.addEventListener('click', () => {
  overlay.classList.remove('show-share');
  shareModal.classList.remove('show-share');
});