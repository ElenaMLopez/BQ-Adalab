'use strict';

var translateIcon = document.querySelectorAll('.translation-icon-pencil');

function visitTranlatePage() {
  window.open('traslation.html', '_self');
}

for (var i = 0; i < translateIcon.length; i++) {
  translateIcon[i].addEventListener('click', visitTranlatePage);
}
