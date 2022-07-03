// המבורגר
const bar = document.getElementById("burger");
// התפריט הרגיל
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

// אם המבורגר הופיע
if (bar != null) {
  // תחכה עד שיהיה קליק עליו
  bar.addEventListener("click", () => {
    // אחרי שלחצת עליו תוסיף לנאב בר אקטיב
    nav.classList.add("active");
    // bar.innerHTML="<div>X</div>";
    bar.replaceChild(bar.children(),"X");
    // bar.append();
  });
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
