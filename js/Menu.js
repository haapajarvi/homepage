  function SetMenuSelected(e) {
    // sets all menuitems not selected and menuItem selected
    var table = document.getElementById('selSpace'),
    selected = table.getElementsByClassName('menuitemSelected');
    
    if (selected[0]) selected[0].className = 'menuitem';
    e.className = 'menuitemSelected';
  }
