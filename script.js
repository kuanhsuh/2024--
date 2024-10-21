
    const menuButtons = document.querySelectorAll('.menu-toggle');
    const menuLists = document.querySelectorAll('.menu-list');

    // Add click event listener to each menu button
    menuButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const menuList = menuLists[index]; // Get corresponding menu list

        // Toggle the display of the menu
        if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
        } else {
        menuList.style.display = 'block';
        }
    });
    });



     // Select all FAQ buttons
     const buttons = document.querySelectorAll('button[aria-controls]');

     // Add click event listeners to all buttons
     buttons.forEach(button => {
       button.addEventListener('click', () => {
         // Get the associated dd element
         const ddElement = document.getElementById(button.getAttribute('aria-controls'));

         // Toggle 'hidden' and 'block' class
         const isExpanded = button.getAttribute('aria-expanded') === 'true';
         button.setAttribute('aria-expanded', !isExpanded);
         ddElement.classList.toggle('hidden');
         ddElement.classList.toggle('block');
       });
     });
