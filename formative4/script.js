// Array to store user data
const userData = [];

// Function to handle form submission
function saveData() {
  const id = document.getElementById('idNumber').value;
  const first = document.getElementById('firstName').value;
  const middle = document.getElementById('middleName').value;
  const last = document.getElementById('lastName').value;
  const gender = document.getElementById('gender').value;
  const birthday = document.getElementById('birthday').value;

  // Store data in an object
  const entry = {
    id,
    first,
    middle,
    last,
    gender,
    birthday
  };

  // Add to array
  userData.push(entry);

  // Update table
  updateTable();

  // Reset form
  document.getElementById('signupForm').reset();
}

// Function to update table
function updateTable() {
  const tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  tbody.innerHTML = ''; // Clear existing rows

  userData.forEach(user => {
    const row = tbody.insertRow();
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.first}</td>
      <td>${user.middle}</td>
      <td>${user.last}</td>
      <td>${user.gender}</td>
      <td>${user.birthday}</td>
    `;
  });
}

// Add event listener to Save button
document.getElementById('saveBtn').addEventListener('click', saveData);
