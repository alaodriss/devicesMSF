
let form = document.getElementById("formDevices");

//////////////////////////////version/////////////////////////////////

form.search.addEventListener('change',function(){
    valideSearch(this);
  });
  
  const valideSearch = function(searchElt){
  
    let search = searchElt.value;
    let searchRegExp = new RegExp(/^[0-9a-zA-Z ]+$/);
    let msgErreurSearch = document.getElementById("dev_error");
    
    msgErreurSearch.textContent = ""; 
  
    searchElt.dataset.errorVisible = "false"; 
  
      if (searchRegExp.test(search) === false) {
          msgErreurSearch.textContent = "Saisissez un device";
          searchElt.dataset.errorVisible = "true";
          return false;
      }
  
    return true;
  
  }
  
//////////////////////////////version/////////////////////////////////

form.version.addEventListener('change',function(){
  valideVersion(this);
});

const valideVersion = function(versionElt){

  let version = versionElt.value;
  let versionRegExp = new RegExp(/^-?(\d+\.?\d*)$|(\d*\.?\d+)$/);
  let msgErreurVersion = document.getElementById("first_error");
  
  msgErreurVersion.textContent = ""; 

  versionElt.dataset.errorVisible = "false"; 

    if (versionRegExp.test(version) === false) {
        msgErreurVersion.textContent = "Saisissez le numero de version";
        versionElt.dataset.errorVisible = "true";
        return false;
    }

  return true;

}

//////////////////////////////name/////////////////////////////////

form.name.addEventListener('change',function(){
    valideName(this);
  });
  
  const valideName = function(nameElt){
  
    let name = nameElt.value;
    let nameRegExp = new RegExp("^[a-zA-Z]{2,}$");
    let msgErreurName = document.getElementById("name_error");
    
    msgErreurName.textContent = ""; 
  
    nameElt.dataset.errorVisible = "false"; 
  
      if (nameRegExp.test(name) === false) {
          msgErreurName.textContent = "Saisissez votre nom";
          nameElt.dataset.errorVisible = "true";
          return false;
      }
  
    return true;
  
  }


  //////////////////////////////commentaire/////////////////////////////////

form.commentaire.addEventListener('change',function(){
    valideCommentaire(this);
  });
  
  const valideCommentaire = function(comElt){
  
    let commentaire = comElt.value;
    let comRegExp = new RegExp(/^[A-Za-z0-9.]{5,100}$/);
    let msgErreurCom = document.getElementById("comt_error");
    
    msgErreurCom.textContent = ""; 
  
    comElt.dataset.errorVisible = "false"; 
  
      if (comRegExp.test(commentaire) === false) {
        msgErreurCom.textContent = "Saisissez un commentaire";
        comElt.dataset.errorVisible = "true";
          return false;
      }
  
    return true;
  
  }

    //////////////////////////////commentaire/////////////////////////////////

form.day.addEventListener('change',function(){
    valideDay(this);
  });
  
  const valideDay = function(dayElt){
  
    let day = dayElt.value;
    let dayRegExp = new RegExp("^[0-9]+$", "g");
    let msgErreurday = document.getElementById("day_error");
    
    msgErreurday.textContent = ""; 
  
    dayElt.dataset.errorVisible = "false"; 
  
      if (dayRegExp.test(day) === false) {
        msgErreurday.textContent = "Saisissez les nombre des jours";
        dayElt.dataset.errorVisible = "true";
          return false;
      }
  
    return true;
  
  }




// function de validation de formilaire 

function validate(form) {
    let isValidateVersion = valideVersion(form.version);
    let isValidateName = valideName(form.name);
    let isValidateCommentaire = valideCommentaire(form.commentaire);
    let isValidateDay = valideDay(form.day);
    let isValidateSearch = valideSearch(form.search);

    return (isValidateVersion && isValidateName && isValidateCommentaire && isValidateDay && isValidateSearch);
     }
    
  //Ecouter la modification de  submit 
form.addEventListener('submit',function(event){
  event.preventDefault();
  console.log(event);
  if (validate(this)){
    
    form.reset();

  } else{
  
  }


});
