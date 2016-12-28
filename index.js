function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  return result;
}

function nestedTarget() {
  var result = document.getElementById('nested').querySelector('.target');
  return result;
}

function deepestChild() {
  var gNodeDiv = document.getElementById('grand-node').querySelectorAll('div');
  return gNodeDiv[gNodeDiv.length -1];
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i = 0, l = list.length; i < l; i++) {
    list[i].innerHTML = (i+n).toString();
  }
}
