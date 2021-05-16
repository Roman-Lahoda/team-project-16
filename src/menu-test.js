;(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const menuBtn2Ref = document.querySelector("[data-menu-button2]")
  const mobileMenuRef = document.querySelector("[data-menu]")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    // document.body.classList.toggle("modal-open") //menu-open
    document.body.classList.toggle("menu-open")
    // menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })

  menuBtn2Ref.addEventListener("click", () => {
    const expanded = menuBtn2Ref.getAttribute("aria-expanded") === "true" || false
    // document.body.classList.toggle("modal-open")  //menu-open
    document.body.classList.toggle("menu-open")
    // menuBtnRef.classList.toggle("is-open")
    menuBtn2Ref.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })
})()


// ;(() => {
//   var menuBtnRef = document.querySelector("[data-menu-button]")
//   const mobileMenuRef = document.querySelector("[data-menu]")
//   menuBtnRef.addEventListener("click", () => {
//     const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
//     menuBtnRef.classList.toggle("is-open")
//     menuBtnRef.setAttribute("aria-expanded", !expanded)
//     mobileMenuRef.classList.toggle("is-open")
//   })
// })()