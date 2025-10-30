// ✅ JavaScript Fundamentals: Array to store user data
const userDataList = [];

// ✅ Apply styles using JavaScript
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.padding = '20px';
document.body.style.backgroundColor = '#eef2f3';
document.body.style.transition = 'background-color 0.5s ease';

const form = document.getElementById('signupForm');
form.style.backgroundColor = '#fff';
form.style.padding = '15px';
form.style.borderRadius = '8px';
form.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
form.style.marginBottom = '20px';

const inputs = form.querySelectorAll('input, select');
inputs.forEach(input => {
  input.style.padding = '8px';
  input.style.marginTop = '5px';
  input.style.width = '100%';
  input.style.border = '1px solid #ccc';
  input.style.borderRadius = '4px';

  // 🎨 Interactivity: Change background on focus
  input.addEventListener('focus', () => {
    input.style.backgroundColor = '#e0f7fa';
  });
  input.addEventListener('blur', () => {
    input.style.backgroundColor = '';
  });
});

const saveBtn = document.getElementById('saveBtn');
saveBtn.style.marginTop = '15px';
saveBtn.style.padding = '10px 20px';
saveBtn.style.backgroundColor = '#0078D4';
saveBtn.style.color = 'white';
saveBtn.style.border = 'none';
saveBtn.style.borderRadius = '4px';
saveBtn.style.cursor = 'pointer';

saveBtn.addEventListener('mouseover', () => {
  saveBtn.style.backgroundColor = '#005a9e';
});
saveBtn.addEventListener('mouseout', () => {
  saveBtn.style.backgroundColor = '#0078D4';
});

const toggleBtn = document.getElementById('toggleThemeBtn');
toggleBtn.style.margin = '10px 0';
toggleBtn.style.padding = '10px 20px';
toggleBtn.style.borderRadius = '4px';
toggleBtn.style.border = 'none';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.backgroundColor = '#444';
toggleBtn.style.color = '#fff';

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.style.backgroundColor === 'rgb(30, 30, 30)';
  document.body.style.backgroundColor = isDark ? '#eef2f3' : '#1e1e1e';
  document.body.style.color = isDark ? '#000' : '#f0f0f0';
});

// ✅ Function: Collect form data
function collectFormData() {
  return {
    idNumber: document.getElementById('idNumber').value,
    firstName: document.getElementById('firstName').value,
    middleName: document.getElementById('middleName').value,
    lastName: document.getElementById('lastName').value,
    gender: document.getElementById('gender').value,
    birthday: document.getElementById('birthday').value
  };
}

// ✅ Function: Save data and update table
function saveData() {
  const newUser = collectFormData();
  userDataList.push(newUser);
  updateTable();
  form.reset();
}

// ✅ Function: Update table with user data
function updateTable() {
  const tableBody = document.querySelector('#dataTable tbody');
  tableBody.innerHTML = '';

  userDataList.forEach(user => {
    const row = document.createElement('tr');

    for (let key in user) {
      const cell = document.createElement('td');
      cell.textContent = user[key];
      cell.style.padding = '10px';
      cell.style.border = '1px solid #ccc';
      row.appendChild(cell);
    }

    // 🖱️ Interactivity: Highlight row on hover
    row.addEventListener('mouseover', () => {
      row.style.backgroundColor = '#d0e7ff';
    });
    row.addEventListener('mouseout', () => {
      row.style.backgroundColor = '';
    });

    tableBody.appendChild(row);
  });

  // Apply table styles
  const table = document.getElementById('dataTable');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.backgroundColor = '#fff';

  const headers = table.querySelectorAll('th');
  headers.forEach(th => {
    th.style.padding = '10px';
    th.style.border = '1px solid #ccc';
    th.style.textAlign = 'left';
  });
}

// ✅ DOM Event: Save button
saveBtn.addEventListener('click', saveData);
