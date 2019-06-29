function clickHandler(e) {
  window.open(`https://www.google.co.jp/search?q=${document.getElementById('textarea').value}`,
  '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', clickHandler);
});
