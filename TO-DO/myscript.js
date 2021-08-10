var myList = document.getElementsByTagName('li');
for (var i = 0; i < myList.length; i++) {
    var del=document.createElement("img");
    del.src="delete.png";
    del.alt="Delete"
    del.width="30";
    del.className="close";
    myList[i].appendChild(del);
    }

    var closeList = document.getElementsByClassName('close');
    for (var i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function(){
            var el=this.parentElement;
            el.style.display = 'none';
        }
    }
function removeAll(){
    if(confirm("Are you sure you want to remove all the items?")){

    var all = document.getElementsByTagName('ul');
    all[0].innerHTML = '';
    }
}

function addNewElement(){
    var newElement = document.createElement('li');
    var inputText = document.getElementById('item').value;
    
    if (inputText===''){
        alert('Please enter an item');
    }
    else{
        var text=document.createTextNode(inputText);
    newElement.appendChild(text);
    document.getElementById('mylist').appendChild(newElement);
    document.getElementById('item').value='';
    
}
    var del=document.createElement("img");
    del.src="delete.png";
    del.alt="Delete"
    del.width="30";
    del.className="close";
    newElement.appendChild(del);
    for (var i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function(){
            var el=this.parentElement;
            el.style.display = 'none';
        }
    }
}