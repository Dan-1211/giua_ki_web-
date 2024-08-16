document.addEventListener("DOMContentLoaded", function() {
    console.log("Trang web đã được tải thành công!");
});


// check form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const request = document.getElementById("request").value.trim();
      const subject = document.getElementById("subject").value.trim();
  
      if (!name) {
        alert("Request for full name");
        return;
      }
  
      if (!email) {
        alert("Email Entry Requirements");
        return;
      }
  
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        alert("Requires the correct email format");
        return;
      }
  
      if (!subject){
        alert("Enter subject");
        return;
      }
  
      if (!request) {
        alert("Content entry requirements");
        return;
      }
  
      alert("Thank you for contacting me! ...");
    });
  
  });
  // check form
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  