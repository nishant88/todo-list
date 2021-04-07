function getValue(){
    let inputValue = document.getElementById("taskValue").value;
    if(inputValue.value !=="") {
        let node = document.createElement('li');
        node.innerHTML = inputValue;
        inputValue.value = "";
        document.getElementById('list').appendChild(node);
        document.getElementById('taskValue').value = '';
    } else {
        inputValue.value = '';
        alert('No Value!!');
    }
}