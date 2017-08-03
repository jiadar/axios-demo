import axios from 'axios';

function performGetRequest1() {

  var resultElement = document.getElementById('getResult1');

  resultElement.innerHTML = '';
  
  axios.post('http://jsonstub.com/users')
  .then(function (response) {
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
           resultElement.innerHTML = generateErrorHTMLOutput(error);
         });   
}

performGetRequest1();

