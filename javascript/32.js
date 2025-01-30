var input1 = document.querySelector('#input_id');
var input2 = document.querySelector('#input2_id');
var button = document.getElementById('#btn_id');
// var ans = document.querySelector('#answer');

// button.addEventListener('click', function() {
// ans.innerHTML = parseInt(input1.value) + parseInt(input2.value );

// })

var text = "the best school in the world is digital school";
var result = text.replace("Digital School" , "another School");
console.log(result);

var text2 = 'adcdef';
var regex = new RegExp('abc');
document.getElementById('answer').innerHTML = regex.test(text2);