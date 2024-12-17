
    // JavaScript to handle video sequence
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");

    // Event listener for when Video 1 ends
    video1.addEventListener("ended", () => {
      video1.style.display = "none"; // Hide Video 1
      video2.style.display = "block"; // Show Video 2
      video2.play(); // Start Video 2 loop
    });

    const brands = document.querySelector('ul.brands'),
      total_brands = brands.children.length;

    document.documentElement.style.setProperty('--total-brand', total_brands);

    for (let i = 0; i <= total_brands; i++) {
      brands.appendChild(brands.children[i].cloneNode(true))
    }



  // JavaScript for Image Slider
  const sliderImages = document.querySelectorAll('.image-slider img');
  let currentIndex = 0;

  const changeSlide = () => {
      sliderImages[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % sliderImages.length;
      sliderImages[currentIndex].classList.add('active');
  };

  // Initialize slider interval
  const sliderInterval = setInterval(changeSlide, 3000);

  // Ensure functionality on mobile by resetting visibility
  window.addEventListener('resize', () => {
      sliderImages.forEach(img => img.classList.remove('active'));
      sliderImages[currentIndex].classList.add('active');
  });


