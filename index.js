// getting all elements for javascript an dput into in variables
const inputBox = document.querySelector(".inputField input");
const addbutton = document.querySelector(".inputField button");

inputBox.onkeyup = () => {
  if (userData.trim() != 0) {
    addbutton.classList.add("active");
  }
  else{
    addbutton.classList.remove("active");
  }
};

addbutton.onclick = () =>{
    
}