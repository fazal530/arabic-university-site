 document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".submenu-toggle").forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = this.closest(".has-submenu");

        // close others if you want accordion behavior
        document.querySelectorAll(".has-submenu.open").forEach(openItem => {
          if (openItem !== parent) {
            openItem.classList.remove("open");
            openItem.querySelector(".submenu-toggle").setAttribute("aria-expanded", "false");
          }
        });

        const isOpen = parent.classList.toggle("open");
        this.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  });
