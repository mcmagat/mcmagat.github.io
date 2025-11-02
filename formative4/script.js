// Store user data
const userData = [];

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const idNumber = document.getElementById('idNumber').value;
  const firstName = document.getElementById('firstName').value;
  const middleName = document.getElementById('middleName').value;
  const lastName = document.getElementById('lastName').value;
  const gender = document.getElementById('gender').value;
  const birthday = document.getElementById('birthday').value;

  // Create user object
  const user = {
    idNumber,
    firstName,
    middleName,
    lastName,
    gender,
    birthday
  };

  // Add to array
  userData.push(user);

  // Update table
  updateTable();

  // Reset form
  this.reset();
});

function updateTable() {
  const tbody = document.querySelector('#dataTable tbody');
  tbody.innerHTML = '';

  userData.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.idNumber}</td>
      <td>${user.firstName}</td>
      <td>${user.middleName}</td>
      <td>${user.lastName}</td>
      <td>${user.gender}</td>
      <td>${user.birthday}</td>
    `;
    tbody.appendChild(row);
  });
}
