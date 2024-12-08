document.addEventListener("DOMContentLoaded", () => {
    // Typing Animation
    const messages = ["Welcome Back", "Secure Your Login", "AI-Driven Authentication"];
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenMessages = 2000;
  
    let index = 0;
    let charIndex = 0;
    let isErasing = false;
    const textElement = document.querySelector(".animated-text");
  
    function type() {
      if (charIndex < messages[index].length && !isErasing) {
        textElement.textContent += messages[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else if (charIndex > 0 && isErasing) {
        textElement.textContent = messages[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, erasingSpeed);
      } else {
        isErasing = !isErasing;
        if (!isErasing) {
          index = (index + 1) % messages.length;
        }
        setTimeout(type, delayBetweenMessages);
      }
    }
  
    type();
  
    // Carousel Animation
    const carouselImages = document.querySelector(".carousel-images");
    let currentIndex = 0;
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % carouselImages.children.length;
      carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
  });
  