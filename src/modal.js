;(() => {
    const modalBtnRef = document.querySelector("[data-modal-open]")
    const modalBtn2Ref = document.querySelector("[data-modal-close]")
    const modalBtn3Ref = document.querySelector("[data-modal-close2]")
    const modalRef = document.querySelector("[data-modal]")
    modalBtnRef.addEventListener("click", menu);
    modalBtn2Ref.addEventListener("click", menu);
    modalBtn3Ref.addEventListener("click", menu);
    // modalRef.addEventListener("click", menu);
    function menu() {
    //   const expanded = menuBtn2Ref.getAttribute("aria-expanded") === "true" || false
      document.body.classList.toggle("modal-open")
    //   menuBtn2Ref.setAttribute("aria-expanded", !expanded)
      modalRef.classList.toggle("hidden")
    }
  })()