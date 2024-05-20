// document.addEventListener('DOMContentLoaded', function () {
//     var typed = new Typed('#typed', {
//         strings: ["Hi. I'm Saikumar."],
//         typeSpeed: 50,
//         startDelay: 1600, // Delay before typing starts (2 blips: 800ms * 2)
//         loop: false,
//         onComplete: function () {
//             var cursor = document.querySelector('.typed-cursor');
//             setTimeout(function () {
//                 cursor.style.opacity = 0; // Hide cursor at the end
//                 revealContent();
//             }, 800); // Adjust to match the blink duration
//         }
//     });

//     function revealContent() {
//         var subHeading = document.getElementById('sub_heading');
//         var paragraph = document.getElementById('paragraph');
//         var buttons = document.getElementById('heroButtons');

//         subHeading.classList.add('visible');
//         paragraph.classList.add('visible');
//         buttons.classList.add('visible');
//     }
// });












document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed', {
      strings: ["Hi. I'm Saikumar."],
      typeSpeed: 50,
      startDelay: 1600, // Delay before typing starts (2 blips: 800ms * 2)
      loop: false,
      onComplete: function () {
        var cursor = document.querySelector('.typed-cursor');
        setTimeout(function () {
          cursor.style.opacity = 0; // Hide cursor at the end
          revealContent();
        }, 800); // Adjust to match the blink duration
      }
    });
  
    function revealContent() {
      var subHeading = document.getElementById('sub_heading');
      var paragraph = document.getElementById('paragraph');
      var buttons = document.getElementById('heroButtons');
  
      // Create falling number animation element
      var matrixCode = document.createElement('div');
      matrixCode.classList.add('matrix-code');
      for (var i = 0; i < 100; i++) { // Adjust number of characters for density
        var char = document.createElement('span');
        char.textContent = String.fromCharCode(Math.floor(Math.random() * 128)); // Generate random characters
        matrixCode.appendChild(char);
      }
      document.getElementById('hero').appendChild(matrixCode);
  
      // Animate falling numbers for a short duration
      setTimeout(function() {
        matrixCode.remove(); // Remove the falling code element
        subHeading.classList.add('visible');
        paragraph.classList.add('visible');
        buttons.classList.add('visible');
      }, 1000); // Adjust duration for matrix animation (in milliseconds)
      
    }
  });
  





