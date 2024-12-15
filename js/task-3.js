const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", setOutput);

function setOutput(event) {
    const inputValue = event.currentTarget.value.trim();
    output.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
