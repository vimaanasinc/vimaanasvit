document.addEventListener("DOMContentLoaded", function() {
  const plane = document.querySelector('.plane');
  const logo = document.querySelector('.logo');
  const websiteContent = document.querySelector('.website-content');

  // Hide the logo initially
  logo.style.opacity = 0;
  logo.style.transform = 'scale(0)';

  // Start the plane animation
  plane.style.transition = 'transform 2s ease-in-out, opacity 2s ease-in-out';
  plane.style.transform = 'rotate(360deg) scale(0)';
  plane.style.opacity = 0;

  // Wait for plane animation to finish, then show logo and start content animation
  setTimeout(() => {
    plane.style.display = 'none';  // Hide the plane

    // Show the logo immediately
    logo.style.transition = 'transform 0.5s ease-in-out, opacity 1s ease-in-out';
    logo.style.transform = 'scale(1)';
    logo.style.opacity = 1;

    // Wait for logo animation, then hide logo and show content
    setTimeout(() => {
      logo.style.transition = 'opacity 1s ease-in-out';
      logo.style.opacity = 0;

      setTimeout(() => {
        logo.style.display = 'none';  // Hide the logo
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.display = 'none';
        websiteContent.style.opacity = 1;
      }, 1000);

    }, 1000); // Adjust the timing as needed

  }, 1500); // Adjust the timing as needed
});




