const togglers = document.querySelectorAll("input");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

togglers.forEach((t) => t.addEventListener("change", (e) => doTrick(e.target)));

function doTrick(clickedOne) {
  console.log("SOMETHING WAS CLICKED");
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedOne) {
      fast.checked = false;
    }
    if (cheap === clickedOne) {
      good.checked = false;
    }
    if (fast === clickedOne) {
      cheap.checked = false;
    }
  }
}
