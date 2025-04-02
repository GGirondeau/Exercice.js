const button = document.getElementById("addButton");

button.onclick = () => {
    const input = document.getElementById("taskInput");
    if (input.value === "") return;

    const li = document.createElement("li");
    li.innerText = input.value;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
};