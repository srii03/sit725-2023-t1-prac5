document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var options = {
    opacity: 0.5,
    inDuration: 300,
  };
  var instances = M.Modal.init(elems, options);
  var instance = M.Modal.getInstance(elems[0]);
  const usernameDisplay = document.getElementById('username-display');
  const username = localStorage.getItem('username'); // Retrieve the username from localStorage

  if (username) {
    usernameDisplay.innerHTML =
      '<i class="fas fa-user"></i> Welcome, ' + username;
  }
});
