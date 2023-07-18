function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
      console.log('I was clicked');
    });
  }
  
  addingEventListener(); // Call the function to bind the event listener
  