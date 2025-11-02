document.body.style.fontFamily = 'Segoe UI, sans-serif';
document.body.style.background = 'linear-gradient(to right, #8ebdecff, #115098ff)';
document.body.style.margin = '0';
document.body.style.padding = '2rem';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

// Style container
const container = document.querySelector('.container');
Object.assign(container.style, {
  background: 'white',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: '400px'
});

// Style heading
const heading = container.querySelector('h2');
heading.style.textAlign = 'center';
heading.style.color = '#3a8dde';

// Style labels and inputs
const labels = container.querySelectorAll('label');
labels.forEach(label => {
  label.style.display = 'block';
  label.style.marginTop = '1rem';
  label.style.fontWeight = 'bold';
});

const inputs = container.querySelectorAll('input, select');
inputs.forEach(input => {
  input.style.width = '100%';
  input.style.padding = '0.5rem';
  input.style.marginTop = '0.3rem';
  input.style.border = '1px solid #ccc';
  input.style.borderRadius = '5px';
});

// Style button
const button = container.querySelector('button');
Object.assign(button.style, {
  marginTop: '1.5rem',
  width: '100%',
  padding: '0.7rem',
  backgroundColor: '#3a8dde',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
});
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#2f76c3';
});
button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '#3a8dde';
});

// Style table section
const tableSection = document.querySelector('.table-section');
Object.assign(tableSection.style, {
  background: 'white',
  marginTop: '3rem',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 0 15px rgba(0,0,0,0.05)',
  width: '100%',
  maxWidth: '800px'
});

const tableHeading = tableSection.querySelector('h3');
tableHeading.style.color = '#3a8dde';
tableHeading.style.marginBottom = '1rem';
tableHeading.style.textAlign = 'center';

// Style table
const table = document.getElementById('dataTable');
table.style.width = '100%';
table.style.borderCollapse = 'collapse';

const ths = table.querySelectorAll('th');
ths.forEach(th => {
  th.style.border = '1px solid #ccc';
  th.style.padding = '0.5rem';
  th.style.textAlign = 'center';
  th.style.backgroundColor = '#e6f0ff';
});

const tds = table.querySelectorAll('td');
tds.forEach(td => {
  td.style.border = '1px solid #ccc';
  td.style.padding = '0.5rem';
  td.style.textAlign = 'center';
});

// Hover effect for rows
table.addEventListener('mouseover', e => {
  if (e.target.tagName === 'TD') {
    e.target.parentElement.style.backgroundColor = '#f0f8ff';
  }
});
table.addEventListener('mouseout', e => {
  if (e.target.tagName === 'TD') {
    e.target.parentElement.style.backgroundColor = '';
  }
});

// Data logic
const userData = [];

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const idNumber = document.getElementById('idNumber').value;
  const firstName = document.getElementById('firstName').value;
  const middleName = document.getElementById('middleName').value;
  const lastName = document.getElementById('lastName').value;
  const gender = document.getElementById('gender').value;
  const birthday = document.getElementById('birthday').value;

  const user = {
    idNumber,
    firstName,
    middleName,
    lastName,
    gender,
    birthday
  };

  userData.push(user);
  updateTable();
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

  const tds = tbody.querySelectorAll('td');
  tds.forEach(td => {
    td.style.border = '1px solid #ccc';
    td.style.padding = '0.5rem';
    td.style.textAlign = 'center';
  });
}

const toggleButton = document.getElementById('toggleTheme');
Object.assign(toggleButton.style, {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '0.6rem 1rem',
  backgroundColor: '#ffffff',
  color: '#3a8dde',
  border: '2px solid #3a8dde',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  zIndex: '1000',
  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
});


let darkMode = false;

toggleButton.addEventListener('click', () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.background = '#382b57ff';
    container.style.background = '#2c2c3c';
    tableSection.style.background = '#280e38ff';
    heading.style.color = '#ffffff';
    tableHeading.style.color = '#ffffff';
    labels.forEach(label => label.style.color = '#ffffff');
    inputs.forEach(input => input.style.backgroundColor = '#f8f8f8ff');
    button.style.backgroundColor = '#555';
    button.style.color = '#fff';
    toggleButton.textContent = 'Light Mode';
    toggleButton.style.backgroundColor = '#3a8dde';
    toggleButton.style.color = '#ffffff';
  } else {
    document.body.style.background = 'linear-gradient(to right, #3a8dde, #6fb1fc)';
    container.style.background = 'white';
    tableSection.style.background = 'white';
    heading.style.color = '#3a8dde';
    tableHeading.style.color = '#3a8dde';
    labels.forEach(label => label.style.color = '#000');
    inputs.forEach(input => input.style.backgroundColor = '#fff');
    button.style.backgroundColor = '#3a8dde';
    button.style.color = '#fff';
    toggleButton.textContent = 'Dark Mode';
    toggleButton.style.backgroundColor = '#ffffff';
    toggleButton.style.color = '#3a8dde';
  }
});
