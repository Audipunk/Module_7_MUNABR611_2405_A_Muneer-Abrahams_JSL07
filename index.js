document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById("personalMessage");
      const courseNameInput = document.getElementById("courseName"); 
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; 
  
      if (studentName.trim() === "" || personalMessage.trim() === "") {
        alert('Please fill in all fields');
        return;
      }
      certificateContent.innerHTML = `
      <h2>Certificate of Achievement</h2>
      <p>This is to certify that</p>
      <h3>${studentName}</h3>
      <p>has completed the</p>
      <h3>${courseName}</h3>
      <p>with legendary perseverance and world class bad-assery for never giving up💪</p>
      <p><img src = "logo.png" alt = "codespace logo"/></p>
      <p>${personalMessage}</p>
    `;
    
      modal.style.display = "block";
  
    
      studentNameInput.value = "";
      personalMessageInput.value = "";
      if(courseNameInput) courseNameInput.value = "";
    });
  
    
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
      
    });
  });
  
