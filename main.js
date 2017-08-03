function performGetRequest1() {
  var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = '';
  
 axios.get('http://jsonstub.com/users',
          { headers: {
            "JsonStub-User-Key": "605f7a33-036b-4d09-af63-91e5f103ebaf",
            "JsonStub-Project-Key": "6b96b772-8e99-402a-9108-7964013effab"
          }
          })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    });   
}