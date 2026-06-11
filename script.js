
const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");



form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("form input");

    let name = inputs[0].value;
    let sap = inputs[1].value;
    let math = Number(inputs[2].value);
    let cs = Number(inputs[3].value);
    let english = Number(inputs[4].value);

    let total = math + cs + english;

    let grade = "";

    if (total >= 240) {
        grade = "A+";
    } else if (total >= 200) {
        grade = "A";
    } else if (total >= 150) {
        grade = "B";
    } else if (total >= 120) {
        grade = "C";
    } else {
        grade = "Fail";
    }

   
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${sap}</td>
        <td>${math}</td>
        <td>${cs}</td>
        <td>${english}</td>
        <td>${total}</td>
        <td>${grade}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(row);

    form.reset();
});



tableBody.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.parentElement.remove();
    }
});