
let testJSON =
  '[ "Abstandswarner","Blendfreies Fernlicht","Adaptives Kurvenlicht","Abstandswarner","Blendfreies Fernlicht", "Adaptives Kurvenlicht", "Abstandswarner","Blendfreies Fernlicht", "Adaptives Kurvenlicht","Abstandswarner", "Blendfreies Fernlicht","Adaptives Kurvenlicht", "Abstandswarner", "Blendfreies Fernlicht", "Adaptives Kurvenlicht","Abstandswarner","Blendfreies Fernlicht"," Adaptives Kurvenlicht","Abstandswarner","Blendfreies Fernlicht"," Adaptives Kurvenlicht","Abstandswarner","Blendfreies Fernlicht"," Adaptives Kurvenlicht"]';
let array = [
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Adaptives Kurvenlicht",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Adaptives Kurvenlicht",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Adaptives Kurvenlicht",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Adaptives Kurvenlicht",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Adaptives Kurvenlicht",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Adaptives Kurvenlicht",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Adaptives Kurvenlicht",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Adaptives Kurvenlicht",
];

const checkBoxes = document.querySelector(".popUp__checkBoxes-row");
const createCheckboxes = (data) => {
  checkBoxes.innerHTML = "";
  const array = typeof data === "string" ? JSON.parse(data) : data;
  array.forEach((element, index) => {
    let input = document.createElement("div");
    input.classList.add("input");
    input.classList.add("input--checkBox");
    input.innerHTML = `
      <input  id="${index}"  type="checkbox">
      <label for="${index}">
      <span class="checkBox">
      </span>
      ${element}
        </label>
   `;
    checkBoxes.appendChild(input);
  });
};
createCheckboxes(array);

const tabsLink = document.querySelectorAll(".tabsLink");
const sections = document.querySelectorAll(".anchor");
function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  tabsLink.forEach((link) => link.classList.remove("active"));
  tabsLink[index]?.classList.add("active");
}
tabsLink.forEach((e) => {
  // onLinkClick(e);
});

window.onscroll = function () {
  changeLinkState();
};

var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

const closeMenu = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
  sidebarSwitch.classList.remove("active");
};

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};

const header = document.getElementById("header");
if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
const siebarLinks = document.querySelectorAll(".sidebar__inner-link");
const sidebarSwitch = document.querySelector(".sidebar__inner-switch");
const sidebar = document.querySelector(".sidebar__inner");
sidebarSwitch.onclick = () => {
  const isActive = sidebarSwitch.classList.contains("active");
  menu.classList.toggle("active", !isActive);
  body.classList.toggle("active", !isActive);
  sidebarSwitch.classList.toggle("active", !isActive);
};
siebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      closeMenu();
    }
  });
});
const sidebarClose = () => {
  menu.classList.remove("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    sidebarClose();
    closeMenu();
  }
};
