"use strict";
const rootDiv = document.getElementById('root');

// main component
const main = `
<div id="homePage">${home}</div>
`

// implement route functionality using useHistory web API
const routes = {
  '#': main,
  '/#': main,
  '/': main,
  '/index.html': main,
  'index.html': main,
};

rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}