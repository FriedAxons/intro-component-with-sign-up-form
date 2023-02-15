const form = document.getElementById("form");
const inputs = Array.from(form.querySelectorAll("input")).filter(
  (input) => input.type !== "submit"
);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  inputs.forEach(function (input) {
    const value = input.value.trim();
    const type = input.getAttribute("type");

    if (value === "") {
    }
  });
});
