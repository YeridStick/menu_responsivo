// Seleccionar la barra y el botón
const sidebar = document.querySelector(".sidebar");
const sidebar_open = document.querySelector("#sidebar-open");
const sidebar_lock = document.querySelector("#lock-icon");
const sidebar_close = document.querySelector("#sidebar-close");

console.log(sidebar, sidebar_open, sidebar_lock, sidebar_close);

// Funciones
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  // Si la barra está bloqueada o no
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebar_lock.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebar_lock.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
};

const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
};

const togglesidebaropen = () => {
  //console.log("Abrir menu");
  if (window.innerWidth < 800) {
    sidebar.style.left = "0px";
    sidebar.style.width = "100%";
    sidebar.style.background = "#ffffff54";
    sidebar_lock.style.display = "none";
    sidebar_close.style.display = "flex";
    sidebar.classList.remove("close");
  }
}

const toggleclose = () => {
  if (window.innerWidth < 800) {
    console.log("Cerrar menu");
    sidebar.style.left = "-235px";
    sidebar.style.width = "235px";
    sidebar_lock.style.display = "flex";
    sidebar_close.style.display = "none";
  }
}
// Eventos
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebar_lock.addEventListener("click", toggleLock);
sidebar_open.addEventListener("click", togglesidebaropen);
sidebar_close.addEventListener("click", toggleclose)