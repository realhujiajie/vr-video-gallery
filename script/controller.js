alert(navigator.getGamepads().length);
for (var ii = 0; ii < 4; ii++) {
  if (navigator.getGamepads()[ii])
    alert(navigator.getGamepads()[ii].id);
  else
    alert('null');
}
