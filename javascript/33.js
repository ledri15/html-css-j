// function validation(){
//     var name =document.getElementById('name').value;
//     var valid_name =/^[a-Za-z]+$/;

//     if(name.match(valid_name)){
//         return true;
//         }    else{
//             alert("Please enter a valid name");
// //             return false;     }
// }
if(name.match(valid_name)&& age.match(valid_age)){
    return true;
}else if(!(name.match(valid_name))){
    alert("Please enter a valid name");
    return false;

}else if(!(age.match(valid_age))){
    alert("Please enter a valid age");
    return false;
}
