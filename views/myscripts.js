var rulesBtn = document.getElementsByClassName('rules_btn');
if (rulesBtn[0]) {
  rulesBtn[0].addEventListener('click', function () {
    window.location = 'http://localhost:2007/rules/';
  })
}
