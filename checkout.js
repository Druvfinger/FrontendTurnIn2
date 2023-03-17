// Eventlistener for submit button
document.getElementById('userForm').addEventListener('submit', purchaseItem);

// Check if all fields are correct then -> 
function purchaseItem(e) {

 // Get form values
 var userName = document.getElementById('userName').value;
 var userPhone = document.getElementById('userPhone').value;
 var userAddress = document.getElementById('userAddress').value;
 var userEmail = document.getElementById('userEmail').value;

 if(!validateForm(userName, userPhone, userAddress, userEmail)){
    return false;
  }


  document.getElementById('#modalx').id=modal;
 

  var user = {name: userName, phone: userPhone, email: userEmail, adress: userAddress};

  alert(user.name);

}
 
// Validate Form
function validateForm(userName, userPhone, userAddress, userEmail){
    if(isObjEmpty(userName) || isObjEmpty(userPhone) || isObjEmpty(userAddress)|| isObjEmpty(userEmail)){
      alert('Please fill in the form');
      return false;
    }
    return true;
}

// Check if field is empty
function isObjEmpty (obj) {
    return Object.keys(obj).length === 0;
}