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
  '#view' : view,
  '/#view' : view,
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
window.addEventListener("beforeunload", function (event) {
  console.log("change")
});

// event linstener to handle routes
window.addEventListener('load', () => {
  if (window.location.href.includes("view")) {
    let ind = localStorage.getItem('ind')
    console.log("reload",ind)
    view_product(ind);
  } 
});