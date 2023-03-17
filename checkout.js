// Eventlistener for submit button
document.getElementById('userForm').addEventListener('submit', purchaseItem);
// Check if all fields are correct then -> 
function purchaseItem(e) {
 // Get form values

 let userName = document.getElementById('userName').value;
 let userPhone = document.getElementById('userPhone').value;
 let userAddress = document.getElementById('userAddress').value;
 let userEmail = document.getElementById('userEmail').value;
 let myModal = new bootstrap.Modal('#confirmation-modal');
 e.preventDefault();

 if(userName === "" || userPhone === "" || userAddress === ""|| userEmail=== ""){
    console.log('Please fill in the form');
  }else{
    myModal.show();
    console.log('success')
  }  
}



