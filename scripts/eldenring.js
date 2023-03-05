const headerVd = document.querySelector('.headerVd');
const frontDiv = document.querySelector('.frontDiv');

function prefix(){
    // set frontDiv's marginTop to headerVdDiv's height to have no gap between them
    frontDiv.style.marginTop = headerVd.offsetHeight + "px";
    console.log(headerVd.offsetHeight, frontDiv.style.marginTop);
}

// => if prefix is only run 
headerVd.addEventListener('loadedmetadata', prefix);