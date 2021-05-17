;(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const menuBtn2Ref = document.querySelector("[data-menu-button2]")
  const menuBtn3Ref = document.querySelector("[item]")
  const menuBtn4Ref = document.querySelector("[item2]")
  const menuBtn5Ref = document.querySelector("[item3]")
  const menuBtn6Ref = document.querySelector("[item4]")
  const mobileMenuRef = document.querySelector("[data-menu]")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    document.body.classList.toggle("menu-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })

  menuBtn2Ref.addEventListener("click", () => {
    const expanded = menuBtn2Ref.getAttribute("aria-expanded") === "true" || false
    document.body.classList.toggle("menu-open")
    menuBtn2Ref.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })

  menuBtn3Ref.addEventListener("click", () => {
    const expanded = menuBtn2Ref.getAttribute("aria-expanded") === "true" || false
    document.body.classList.toggle("menu-open")
    menuBtn2Ref.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })

  menuBtn4Ref.addEventListener("click", () => {
    const expanded = menuBtn2Ref.getAttribute("aria-expanded") === "true" || false
    document.body.classList.toggle("menu-open")
    menuBtn2Ref.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })

  menuBtn5Ref.addEventListener("click", () => {
    const expanded = menuBtn2Ref.getAttribute("aria-expanded") === "true" || false
    document.body.classList.toggle("menu-open")
    menuBtn2Ref.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })

  menuBtn6Ref.addEventListener("click", () => {
    const expanded = menuBtn2Ref.getAttribute("aria-expanded") === "true" || false
    document.body.classList.toggle("menu-open")
    menuBtn2Ref.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })
})()

