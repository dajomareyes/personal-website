
var toggleClass = function(arr, cname, yesno) {
  for(var i=0; i<arr.length; i++) {
    if(yesno) {
      arr[i].classList.add(cname);
    } else {
      arr[i].classList.remove(cname);
    }
  }
}