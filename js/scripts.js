document.getElementById('year').innerHTML = new Date().getFullYear()


document.addEventListener("DOMContentLoaded", () => {
    const animatedBox = document.querySelector(".bonus");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = "appearFromRight 0.6s ease-out forwards";
                entry.target.style.visibility = "visible";
              }, 1000); 
        }
      });
    });
  
    observer.observe(animatedBox);
  });

window.addEventListener('scroll', () => {
    let animate = document.querySelectorAll(".animate");

    for(let i = 0; i < animate.length; i++){
        let windowheight = window.innerHeight;
        let animatetop = animate[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (animatetop < windowheight - revealpoint) {
            animate[i].classList.add('show');
        } else{
            animate[i].classList.remove('show');
        }
    }
});


window.addEventListener('scroll', () => {
  let animate = document.querySelectorAll(".animate-once");

  for(let i = 0; i < animate.length; i++){
      let windowheight = window.innerHeight;
      let animatetop = animate[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if (animatetop < windowheight - revealpoint) {
          animate[i].classList.add('show');
      }
  }
})
