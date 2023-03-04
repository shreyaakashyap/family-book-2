var names = ["Book cover","Me","My Mom","My dad"];
var images = ["family.jpg","youngGirl.jpg","amom.jpg", "adad.jpg"];
var i = 0;
function changeimage(){
  document.getElementById("cover").src=images[i];
  document.getElementById("c1").innerHTML = names[i];
  
  i++;
  if (i == 4){
    i=0;
    
  }
}