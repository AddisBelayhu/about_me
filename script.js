
let icons = document.getElementBy('icons');

for(var i=0; i <= icons.length; i++){
    icons[i].addEventListener('click', function(){
        //alert("icons " + this.textContent);
        alert('icons hovered' + this.icons);
    });
}

