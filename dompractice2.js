
const headings = document.getElementsByTagName('h1');
document.body.addEventListener('keypress', function(e) {
  let i = 0;
  while (i < headings.length) {
    headings[i].innerText = e.key;
    i++;
  }
});
