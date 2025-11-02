
      const menuToggle = document.getElementById("menu-toggle");
      const closeDrawer = document.getElementById("close-drawer");
      const sideDrawer = document.getElementById("side-drawer");
      const drawerOverlay = document.getElementById("drawer-overlay");

      function toggleDrawer() {
        const isHidden = sideDrawer.classList.contains("translate-x-full");
        if (isHidden) {
          // Show drawer
          sideDrawer.classList.remove("translate-x-full");
          drawerOverlay.classList.remove("hidden");
          document.body.style.overflow = "hidden"; // Prevent scrolling background
        } else {
          // Hide drawer
          sideDrawer.classList.add("translate-x-full");
          drawerOverlay.classList.add("hidden");
          document.body.style.overflow = ""; // Restore scrolling
        }
      }

      menuToggle.addEventListener("click", toggleDrawer);
      closeDrawer.addEventListener("click", toggleDrawer);
      drawerOverlay.addEventListener("click", toggleDrawer);

      // Close drawer on link click
    //   document.querySelectorAll('#side-drawer a').forEach(link => {
    //     link.addEventListener('click', toggleDrawer);
    //   });