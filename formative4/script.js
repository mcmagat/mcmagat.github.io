// ✅ JavaScript Fundamentals: Array to store user data
const userDataList = [];

// ✅ Apply base styles with light blue palette
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.padding = '20px';
document.body.style.margin = '32px'; // Slightly reduced margin for better laptop fit
document.body.style.backgroundColor = '#e6f2ff';
document.body.style.transition = 'background-color 0.5s ease';

// 🎨 Headings
const heading2 = document.querySelector('h2');
heading2.style.color = '#005b96';
heading2.style.fontSize = '28px';
heading2.style.transition = 'transform 0.3s ease';
heading2.addEventListener('mouseover', () => heading2.style.transform = 'scale(1.05)');
heading2.addEventListener('mouseout', () => heading2.style.transform = 'scale(1)');

const heading3 = document.querySelector('h3');
heading3.style.color = '#0074d9';
heading3.style.fontSize = '24px';
heading3.style.marginTop = '30px';
heading3.style.transition = 'transform 0.3s ease';
heading3.addEventListener('mouseover', () => heading3.style.transform = 'scale(1.05)');
heading3.addEventListener('mouseout', () => heading3.style.transform = 'scale(1)');

// 🎨 Form styling
const form = document.getElementById('signupForm');
form.style.backgroundColor = '#ffffff';
form.style.padding = '15px';
form.style.borderRadius = '8px';
form.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
form.style.marginBottom = '20px';
form.style.maxWidth = '6000px'; // Wider form for laptop screens
form.style.margin = '0 auto';  // Center the form horizontally

// 🎨 Labels and inputs
const labels = form.querySelectorAll('label');
labels.forEach(label => {
  label.style.display = 'block';
  label.style.marginTop = '10px';
  label.style.color = '#003366';
  label.style.fontSize = '18px';
  label.style.transition = 'transform 0.3s ease';
  label.addEventListener('mouseover', () => label.style.transform = 'scale(1.05)');
  label.addEventListener('mouseout', () => label.style.transform = 'scale(1)');
});

const inputs = form.querySelectorAll('input, select');
inputs.forEach(input => {
  input.style.padding = '10px';
  input.style.marginTop = '5px';
  input.style.width = '90%';
  input.style.border = '1px solid #99ccff';
  input.style.borderRadius = '4px';
  input.style.fontSize = '16px';
  input.style.backgroundColor = '#f0f8ff';
  input.style.transition = 'background-color 0.3s ease, transform 0.3s ease';

  input.addEventListener('focus', () => {
    input.style.backgroundColor = '#d6eaff';
    input.style.transform = 'scale(1.02)';
  });
  input.addEventListener('blur', () => {
    input.style.backgroundColor = '#f0f8ff';
    input.style.transform = 'scale(1)';
  });
});

// 🎨 Save button
const saveBtn = document.getElementById('saveBtn');
saveBtn.style.marginTop = '15px';
saveBtn.style.padding = '10px 20px';
saveBtn.style.backgroundColor = '#3399ff';
saveBtn.style.color = 'white';
saveBtn.style.border = 'none';
saveBtn.style.borderRadius = '4px';
saveBtn.style.cursor = 'pointer';
saveBtn.style.fontSize = '16px';
saveBtn.style.transition = 'transform 0.3s ease, background-color 0.3s ease';

saveBtn.addEventListener('mouseover', () => {
  saveBtn.style.backgroundColor = '#0074d9';
  saveBtn.style.transform = 'scale(1.05)';
});
saveBtn.addEventListener('mouseout', () => {
  saveBtn.style.backgroundColor = '#3399ff';
  saveBtn.style.transform = 'scale(1)';
});

// 🎨 Toggle button
const toggleBtn = document.getElementById('toggleThemeBtn');
toggleBtn.style.margin = '10px 0';
toggleBtn.style.padding = '10px 20px';
toggleBtn.style.borderRadius = '4px';
toggleBtn.style.border = 'none';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.backgroundColor = '#005b96';
toggleBtn.style.color = '#fff';
toggleBtn.style.fontSize = '16px';
toggleBtn.style.transition = 'transform 0.3s ease';

toggleBtn.addEventListener('mouseover', () => toggleBtn.style.transform = 'scale(1.05)');
toggleBtn.addEventListener('mouseout', () => toggleBtn.style.transform = 'scale(1)');
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.style.backgroundColor === 'rgb(30, 30, 30)';
  document.body.style.backgroundColor = isDark ? '#e6f2ff' : '#1e1e1e';
  document.body.style.color = isDark ? '#000' : '#f0f0f0';
});

// ✅ Collect form data
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

// ✅ Save data and update table
function saveData() {
  const newUser = collectFormData();
  userDataList.push(newUser);
  updateTable();
  form.reset();
}

// ✅ Update table
function updateTable() {
  const tableBody = document.querySelector('#dataTable tbody');
  tableBody.innerHTML = '';

  userDataList.forEach(user => {
    const row = document.createElement('tr');

    for (let key in user) {
      const cell = document.createElement('td');
      cell.textContent = user[key];
      cell.style.padding = '10px';
      cell.style.border = '1px solid #3399ff';
      cell.style.fontSize = '16px';
      cell.style.color = '#003366';
      cell.style.transition = 'transform 0.3s ease';
      cell.addEventListener('mouseover', () => cell.style.transform = 'scale(1.05)');
      cell.addEventListener('mouseout', () => cell.style.transform = 'scale(1)');
      row.appendChild(cell);
    }

    row.addEventListener('mouseover', () => {
      row.style.backgroundColor = '#d6eaff';
    });
    row.addEventListener('mouseout', () => {
      row.style.backgroundColor = '';
    });

    tableBody.appendChild(row);
  });

  const table = document.getElementById('dataTable');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.backgroundColor = '#ffffff';
  table.style.marginTop = '20px';
  table.style.border = '2px solid #3399ff';

  const headers = table.querySelectorAll('th');
  headers.forEach(th => {
    th.style.padding = '12px';
    th.style.border = '1px solid #3399ff';
    th.style.textAlign = 'left';
    th.style.fontSize = '18px';
    th.style.color = '#005b96';
    th.style.backgroundColor = '#cce6ff';
    th.style.transition = 'transform 0.3s ease';
    th.addEventListener('mouseover', () => th.style.transform = 'scale(1.05)');
    th.addEventListener('mouseout', () => th.style.transform = 'scale(1)');
  });
}

// ✅ Event listener
saveBtn.addEventListener('click', saveData);
