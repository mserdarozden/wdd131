
const button = document.querySelector('button');
const input = document.querySelector('#favchap');
input.focus();

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        
        const list = document.querySelector('#list');

        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = input.value;
        deleteButton.textContent = "❌";

        input.value = "";

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        deleteButton.addEventListener("click", function() {
            list.removeChild(listItem);
            input.focus();
        });
    } else {
        input.focus();
    }

});