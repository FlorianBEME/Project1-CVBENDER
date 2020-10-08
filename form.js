document.getElementById("formu").addEventListener("submit", function (event) {
  let firstNameValue = document.getElementById('firstname').value;
    event.preventDefault();
    document.querySelector('.firstName').innerHTML= "Merci "+ firstNameValue.charAt(0).toUpperCase() + firstNameValue.substr(1).toLowerCase() + ", votre message à été envoyé avec succès."
  console.log(firstNameValue);
    document.getElementById("phrasingForm").style.display = "flex";
  });