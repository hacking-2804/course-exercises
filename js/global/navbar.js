function initListeners(){
    let parent, len;
    
    parent = document.getElementsByClassName('class-toggle');
    len = parent.length;
    for(var a = 0; a < len; a++){
        parent[a].addEventListener('click', function(){
            window.setCookie("course_selection", this.dataset.value, 365);
            location.reload();
        });
    }
}

function checkCookie(name) {
}

initListeners();