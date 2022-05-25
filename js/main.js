
let search = document.getElementById('search');
let version = document.getElementById('version');
let name = document.getElementById('name');
let commentaire = document.getElementById('commentaire');
let day = document.getElementById('day');
let submit = document.getElementById('submit');

// console.log(search,version,name,commentaire,submit)

let mood = 'create';
let tmp;


function autocomplete(inp, arr) {
   
    let currentFocus;
    
    inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value;
       
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
       
        for (i = 0; i < arr.length; i++) {
          
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
       
            b = document.createElement("div");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
           
                b.addEventListener("click", function(e) {
                
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {

          currentFocus++;
         
          addActive(x);
        } else if (e.keyCode == 38) { 

          currentFocus--;
  
          addActive(x);
        } else if (e.keyCode == 13) {
          
          e.preventDefault();
          if (currentFocus > -1) {
           
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;

      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
 
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  let devices = ["iphone X","iphone 6 32Go","iphone 6 16Go","iphone 6s Plus 64Go","iphone 5S","iphone 5MSTV","iphone 5C",
  "iphone Xr","iPad Air 2 16Go","Samsung Galaxy A5","Nexus 5X","Pixel 4","Pixel 3A XL",
  "Huawei Mate 10 Pro","Nexus 6P","Samsung S10","Samsung Galaxy S7","Samsung Galaxy S4","Samsung Galaxy Note 2","Huawei Honor 7",
  "Samsung Galaxy J7","Samsung Galaxy Tab A7","Samsung Galaxy Tab A","Redmi Note 8 2021 64Go"]


  autocomplete(document.getElementById("search"), devices);


 
function table() {

    let cardsList = document.querySelector(".listeDevices");

    let listes = 
     `<table>
        <tbody>` ;
  
    for(let i=0; i < devices.length; i++){
        let item = devices[i];
        // console.log(item)
           listes += `
                    <tr>
                        <td>${item} <i class="fa-regular fa-circle-check"></i></td>
                    </tr>
            
    `; 
     listes += `   
      </tbody>
     </table>`


    }

    cardsList.innerHTML=listes;

 
}

table();

// create infos 

let dataDevice;

    if(localStorage.infos != null){

        dataDevice = JSON.parse(localStorage.infos);

    }else {

        dataDevice = [];
    }

submit.onclick = function(){

    let infosDevices = {
        search:search.value.toUpperCase(),
        version:version.value,
        name:name.value.toUpperCase(),
        commentaire:commentaire.value.toUpperCase(),
        day:day.value.toUpperCase(),
    }

    if(search.value != "" && version.value != "" && version.value != "" && commentaire.value != "" &&  infosDevices.day < 10){
       
        if( mood === 'create'){

            if(infosDevices.day > 1){

                dataDevice.push(infosDevices);
            }else {

                dataDevice.push(infosDevices);
                
            }
        }else {
            dataDevice[tmp]=infosDevices;
            mood = 'create';
            submit.innerHTML='Create';
            day.style.display ='block';
        }

        clearInput();
    }

    
    localStorage.setItem('infos', JSON.stringify(dataDevice));
    console.log(dataDevice)

    displayinfos()
}


// Clear input 

function clearInput(){
    search.value = '';
    version.value = '';
    name.value = '';
    commentaire.value = '';
    day.value = '';
    
}


// Read 


function displayinfos(){

    let table = "";
    for(let i = 0 ; i < dataDevice.length; i++){
   
      if(devices.includes(dataDevice)){
        console.log("itemTable")
      }else{
      }
     
        table += `
        <tr>
             <th>${dataDevice[i].search}</th>
             <th>${dataDevice[i].version} </th>
             <th>${dataDevice[i].name}</th>
             <th>${dataDevice[i].commentaire}</th>
             <th>${dataDevice[i].day}</th>
             <hr>
             <div class ="btnCadr">
                <td id="btn"><button onclick="upDate(${i})" id="update">Update</button>
                <td id="btn"><button onclick="deleteUser(${i})" id="deleteUser">Delete</button>
             </div>
         </tr>

         
      
        `    
        
    
    }

        document.getElementById('tbodyInfos').innerHTML= table;

       
 
      // if(table.search == indexOf(devices)){
       
      //   listes.display='none'
      // }
    
   
        

}

displayinfos()


// deleteUser 

function deleteUser(i) {
    dataDevice.splice(i,1);
    localStorage.infos = JSON.stringify(dataDevice);
    displayinfos()
}

// UpdateUser 


function upDate(i) {
    search.value = dataDevice[i].search;
    version.value = dataDevice[i].version;
    name.value = dataDevice[i].name;
    commentaire.value = dataDevice[i].commentaire;
    day.value = dataDevice[i].day;
    submit.innerHTML = 'Update';
    mood = 'update'
    tmp = i ;

}

//Delete element table 

// function myfilter() {
//   let inputList, fListes, table, tr, td, i, txtValueLi;
//   inputList = document.getElementById("filter");
//   console.log(inputList)
//   fListes = inputList.value.toUpperCase();
//   table = document.querySelector(".listeDevices");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValueLi = td.textContent || td.innerText;
//       if (txtValueLi.toUpperCase().indexOf(fListes) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }