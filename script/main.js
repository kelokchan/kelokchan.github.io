(function () {
  'use strict';

  window.onload = function () {
    document.body.style.opacity = 1;
  };

  document.getElementById('year').innerHTML = new Date().getFullYear();
})();
