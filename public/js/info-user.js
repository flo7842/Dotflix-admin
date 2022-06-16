// Modal
let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
    modal.style.display = "block"
}
closeBtn.onclick = function(){
    modal.style.display = "none"
}
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none"
    }
}

// Table
let trashIcons = document.querySelectorAll(".btn-remove")

function deleteRow(btn, table) {

    let typeTable;

    if(table == "client"){
        typeTable = "ce client"
    } else {
        typeTable = "cette facture"
    }

    var result = confirm(`Etes-vous sur de vouloir supprimer ${typeTable} ? Attention cette action est irreversible`);

    if(result)  {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    } else {
        return
    }
}