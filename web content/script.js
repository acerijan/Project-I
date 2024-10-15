function accountNumberValidate(){
    var accountNumber = prompt("Enter account number");
    var accountNumberPattern = /^[0-9]{11}$/;
    if(accountNumber == null){
        alert("Account number required");
        return false;
        }
    if(!accountNumber.match(accountNumberPattern)){
        alert("Invalid account number. Account number should be 11 digits");
        return false;
        }
        return true;

        
}

function confirmTransaction(confirmTransaction){
    return confirm("Do you want to proceed?");
    
 
 }

 function emailValidate(email){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(email == null){
        alert("Email required");
        return false;
        }
        if(!email.match(emailPattern)){
            alert("Invalid email address");
            return false;
            }
            return true;
}
function nameValidate(name){
    if(name==null ){
        alert("Name is required");
        return false;
    }return true;
    
}

 function passwordValidate(password){
    if(password== null ){
        alert("Password required");
        return false;
    } 
    if(password.length < 8){
        alert("Password should be at least 8 characters long.");
        return false;
    }
    return true;
}



function phoneValidate(phone){
    var phonePattern = /^[0-9]{10}$/;
    if(phone == null){
        alert("Phone number required");
        return false;
        }
    if(!phone.match(phonePattern)){
        alert("Phone number invalid. Please try again.");
        return false;
    }
    return true;
}
function pinCodeValidate(pin){
    if(pin==null){
        alert("Pin code required");
        return false;
    }
    if(pin.length!=4){
        alert("Enter 4 digit pin code!!");
        return false;
    }return true;
}
function resetPassword(){
    var newPassword = prompt("Enter new password");
    var confirmPassword = prompt("Reenter new password");
    if(newPassword == confirmPassword){
        alert("Password changed successfully");
        }else{
            alert("Passwords do not match");
            }
            

}

function transactionAmountValidate(amount){
    if(amount == null){
        alert("Cannot transfer 0 amount!!! Transaction amount required");
        return false;
        }
    if(amount<=0){
        alert("Amount should be greater than 0");
        return false;
    }
    return true;
}




function userIdValidate(userId){
    if(userId== null ){
        alert("User id required");
        return false;
    }return true;
 }

function dateValidate(){
    var date = prompt("Enter date in YYYY-MM-DD format");
    
    var datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if(date == null){
        alert("Date required");
        return false;
        }

    if(!datePattern.test(date)){
        alert("Invalid date format. Please enter date in YYYY-MM-DD format");
        return false;
        }
        return true;
        
    var today = new Date();
    var date1 = new Date(date);
    if(date1 > today){
        alert("Date cannot be in future");
        return false;
    }return true;
}