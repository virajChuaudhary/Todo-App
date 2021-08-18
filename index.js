// getting all elements for javascript an dput into in variables
const inputBox = document.querySelector(".inputField input");
const addbutton = document.querySelector(".inputField button");

inputBox.onkeyup = () => {
  if (inputBox.value.trim() != 0) {
    addbutton.classList.add("active");
  } else {
    addbutton.classList.remove("active");
  }
};

addbutton.onclick = () => {
  let taskLengthshow = document.querySelector(".footer");
  let ul = document.querySelector(".todoList");
  let length = ul.childElementCount ;
  length = length+1;
  // console.log(length);
  taskLengthshow.innerHTML = "<span> You have "+ length +" pending tasks </span>";

  //  console.log(ul);
  let taskname = inputBox.value;
  let li = document.createElement("li");
  li.innerHTML =  taskname + "<span class='button'><i class='fas fa-trash'></i></span>";
  // console.log(li);
  let pos = ul.firstElementChild;
  // console.log(pos);
  if (pos == null) {
    ul.append(li);
  } else {
    ul.insertBefore(li, pos);
  }
  document.querySelector(".inputField input").value = "";

  let button = document.querySelector(".button");
  button.addEventListener("click", (e) => {
    let parent = e.currentTarget.parentElement;
    parent.remove(parent);
    let length = ul.childElementCount;
    length = length;
    taskLengthshow.innerHTML = "<span> You have "+ length +" pending tasks </span>";
    
   

  });


  //   button2.addEventListener("click", (e) => {
  //   let parent = e.target.parentElement.parentElement;
  //   parent.remove(parent);
  //   let length = ul.childElementCount;
  //   length = length;
  //   taskLengthshow.innerHTML = "<span> You have "+ length +" pending tasks </span>";
    
   

  // });
};
