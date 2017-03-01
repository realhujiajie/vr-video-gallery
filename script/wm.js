var WindowManager = (function () {
  var root = null;
  var children = [];

  var setHomeScreen = function (win) {
    win.style.width = '100%';
    win.style.height = '100%';
    win.style.position = 'relative';
    root = win;
  }

  var createWindow = function () {
    var win = document.createElement('div');
    win.style.width = '100%';
    win.style.height = '100%';
    win.style.position = 'absolute';
    win.style.top = 0;
    win.style.left = 0;
    children.push(win);
    root.appendChild(win);
    showWindow(win);
    return win;
  };

  var showWindow = function (win) {
    var i;
    for (i = 0; i < children.length; i++) {
      if (win == children[i])
        win.style.visibility = 'visible';
      else
        hideWindow(children[i]);
    }
  };

  var hideWindow = function (win) {
    var i;
    for (i = 0; i < children.length; i++) {
      if (win == children[i]) {
        win.style.visibility = 'hidden';
        break;
      }
    }
  };

  var destroyWindow = function (win) {
    var i;
    for (i = 0; i < children.length; i++) {
      if (win == children[i]) {
        hideWindow(win);
        root.removeChild(win);
        break;
      }
    }
    children.splice(i, 1);
  };

  return {
    setHomeScreen: setHomeScreen,
    createWindow: createWindow,
    showWindow: showWindow,
    hideWindow: hideWindow,
    destroyWindow: destroyWindow,
  };
})();
