import axios from 'axios';

function performGetRequest1() {

  var resultElement = document.getElementById('getResult1');

  resultElement.innerHTML = '';
  
  axios("http://jsonstub.com/users", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "JsonStub-User-Key": "605f7a33-036b-4d09-af63-91e5f103ebaf", 
      "JsonStub-Project-Key": "6b96b772-8e99-402a-9108-7964013effab"},
    timeout: 20000,
    method: 'post',
    responseType: 'json'
  })
  .then(function (response) {
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
           resultElement.innerHTML = generateErrorHTMLOutput(error);
         });   
}

performGetRequest1();

