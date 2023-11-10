export const NavBarEffect = () => {
  const list = document.querySelectorAll(".list");

  function activeLink(event) {
    list.forEach((item) => item.classList.remove("active"));
    const clickedListItem = event.currentTarget;
    clickedListItem.classList.add("active");
  }

  list.forEach((item) => item.addEventListener("click", activeLink));
};
