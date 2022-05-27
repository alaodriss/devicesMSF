

 function filterFunction(){
  let filterListe, filter,li, i;
  filterListe = document.getElementById("filter");
  filter = filterListe.value.toUpperCase();
  console.log(filter)
  li = document.getElementsByTagName("li");
  console.log(li)

  for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerText ;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
 
      li[i].style.display = "none";
      
    }
  }

 
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

  let cardsList = document.querySelector("ul");

  let listes = "";

   listes += `

        <button onclick="myFunction()" class="dropbtn">Listes Decives   <i class="fa-solid fa-caret-down"></i></button>
        <div id="myDropdown" class="dropdown-content ">
           <input type="text" placeholder="Search..." id="filter" onkeyup="filterFunction()">
        </div>
          `;
 

  for(let i=0; i < devices.length; i++){
      let item = devices[i];
      // console.log(item)
         listes += `
        <li  class="listDevs">${item} <i class="fa-regular fa-circle-check"></i></li> 
          
  `; 

  }

  cardsList.innerHTML=listes;


 