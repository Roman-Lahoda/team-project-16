;(() => {
    const menuBtnRef = document.querySelector("[data-btn]")
    const menuBtn2Ref = document.querySelector("[data-menu-button2]")
    const mobileMenuRef = document.querySelector("[more]")
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("more")
      menuBtnRef.classList.toggle("is-open")
    })
  
    menuBtn2Ref.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open")
    })
  })()