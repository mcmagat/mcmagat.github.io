window.addEventListener('DOMContentLoaded', () => {
  const userDataList = [];

  // 🌈 Gradient background (blue to green)
  document.body.style.background = 'linear-gradient(to right, #1e3c72, #2a9d8f)';
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.padding = '20px';
  document.body.style.margin = '0';
  document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';

  // ✨ Fade-in animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 1s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);

  // 🎯 Headings
  const heading2 = document.querySelector('h2');
  heading2.style.color = '#ffffff';
  heading2.style.fontSize = '32px';
  heading2.style.textAlign = 'center';
  heading2.style.marginBottom = '20px';
  heading2.style.transition = 'transform 0.3s ease';

  heading2.addEventListener('mouseover', () => heading2.style.transform = 'scale(1.05)');
  heading2.addEventListener('mouseout', () => heading2.style.transform = 'scale(1)');

  const heading3 = document.querySelector('h3');
  heading3.style.color = '#ffffff';
  heading3.style.fontSize = '24px';
  heading3.style.marginTop = '40px';
  heading3.style.transition = 'transform 0.3s ease';

  heading3.addEventListener('mouseover', () => heading3.style.transform = 'scale(1.05)');
  heading3.addEventListener('mouseout', () => heading3.style.transform = 'scale(1)');

  // 🧾 Form styling
  const form = document.getElementById('signupForm');
  form.style.backgroundColor = '#ffffff';
  form.style.borderRadius = '12px';
  form.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
  form.style.padding = '30px';
  form.style.maxWidth = '500px';
  form.style.margin = '0 auto';
  form.style.transition = 'transform 0.5s ease';
  form.style.transform = 'translateY(20px)';
  setTimeout(() => {
    form.style.transform = 'translateY(0)';
  }, 200);

  // 🏷️ Labels and Inputs
  const labels = form.querySelectorAll('label');
  labels.forEach(label => {
    label.style.display = 'block';
    label.style.marginTop = '10px';
    label.style.color = '#333';
    label.style.fontSize = '16px';
  });

  const inputs = form.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '6px';
    input.style.padding = '12px';
    input.style.marginTop = '8px';
    input.style.width = '100%';
    input.style.fontSize = '16px';
    input.style.backgroundColor = '#f9f9f9';
    input.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';

    input.addEventListener('focus', () => {
      input.style.boxShadow = '0 0 8px rgba(46,204,113,0.5)';
      input.style.transform = 'scale(1.02)';
    });
    input.addEventListener('blur', () => {
      input.style.boxShadow = 'none';
      input.style.transform = 'scale(1)';
    });
  });

  const birthdayInput = document.getElementById('birthday');
birthdayInput.type = 'date';
birthdayInput.style.color = '#333';
birthdayInput.style.backgroundColor = '#ffffff'; // white background
birthdayInput.style.border = '1px solid #ccc';
birthdayInput.style.borderRadius = '6px';
birthdayInput.style.padding = '12px';
birthdayInput.style.marginTop = '8px';
birthdayInput.style.width = '100%';
birthdayInput.style.fontSize = '16px';
birthdayInput.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';

birthdayInput.addEventListener('focus', () => {
  birthdayInput.style.boxShadow = '0 0 8px rgba(46,204,113,0.5)';
  birthdayInput.style.transform = 'scale(1.02)';
});
birthdayInput.addEventListener('blur', () => {
  birthdayInput.style.boxShadow = 'none';
  birthdayInput.style.transform = 'scale(1)';
});


  // 💾 Save Button
  const saveBtn = document.getElementById('saveBtn');
  styleButton(saveBtn);

  // 🌙 Toggle Theme Button
  const toggleBtn = document.getElementById('toggleThemeBtn');
  styleButton(toggleBtn);
  toggleBtn.style.display = 'block';
  toggleBtn.style.margin = '20px auto';

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.style.backgroundColor === 'rgb(30, 30, 30)';
    document.body.style.background = isDark
      ? 'linear-gradient(to right, #1e3c72, #2a9d8f)'
      : '#1e1e1e';
    document.body.style.color = isDark ? '#000' : '#f0f0f0';
    form.style.backgroundColor = isDark ? '#ffffff' : '#2c2c2c';
    heading2.style.color = isDark ? '#ffffff' : '#66ccff';
    heading3.style.color = isDark ? '#ffffff' : '#66ccff';
  });

  // 📥 Collect Form Data
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

  // 💾 Save and Update Table
  function saveData() {
    const newUser = collectFormData();
    userDataList.push(newUser);
    updateTable();
    form.reset();
  }

  // 📊 Update Table
  function updateTable() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

if (userDataList.length === 0) {
  const emptyRow = document.createElement('tr');
  const emptyCell = document.createElement('td');
  emptyCell.colSpan = 6;
  emptyCell.textContent = 'No data submitted yet';
  emptyCell.style.textAlign = 'center';
  emptyCell.style.color = '#888';
  emptyCell.style.padding = '12px';
  emptyRow.appendChild(emptyCell);
  tableBody.appendChild(emptyRow);
  return;
}


    userDataList.forEach(user => {
      const row = document.createElement('tr');

      for (let key in user) {
        const cell = document.createElement('td');
        cell.textContent = user[key];
        cell.style.padding = '10px';
        cell.style.borderBottom = '1px solid #eee';
        cell.style.color = '#333';
        cell.style.transition = 'transform 0.3s ease';
        cell.addEventListener('mouseover', () => cell.style.transform = 'scale(1.05)');
        cell.addEventListener('mouseout', () => cell.style.transform = 'scale(1)');
        row.appendChild(cell);
      }

      row.addEventListener('mouseover', () => {
        row.style.backgroundColor = '#eafaf1';
      });
      row.addEventListener('mouseout', () => {
        row.style.backgroundColor = '';
      });

      tableBody.appendChild(row);
    });

    const table = document.getElementById('dataTable');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '30px';
    table.style.backgroundColor = '#ffffff';
    table.style.border = '2px solid #2ecc71';
    table.style.borderRadius = '8px';
    table.style.overflow = 'hidden';

    const headers = table.querySelectorAll('th');
    headers.forEach(th => {
      th.style.backgroundColor = '#1e3c72';
      th.style.color = '#fff';
      th.style.padding = '12px';
      th.style.fontSize = '16px';
      th.style.borderBottom = '1px solid #ccc';
    });
  }

  // 🧠 Save Button Listener
  saveBtn.addEventListener('click', saveData);

  // 🎨 Button Styling Function
  function styleButton(btn) {
  btn.style.backgroundColor = '#2a9d8f';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.borderRadius = '6px';
  btn.style.padding = '12px 20px';
  btn.style.cursor = 'pointer';
  btn.style.fontSize = '16px';
  btn.style.transition = 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease';

  btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#1e3c72';
    btn.style.transform = 'scale(1.05)';
    btn.style.boxShadow = '0 0 10px rgba(42, 157, 143, 0.6)'; // 💡 glow effect
  });

  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#2a9d8f';
    btn.style.transform = 'scale(1)';
    btn.style.boxShadow = 'none';
  });
}


  // 📱 Responsive tweaks
  window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
      form.style.padding = '20px';
      heading2.style.fontSize = '24px';
      heading3.style.fontSize = '20px';
    } else {
      form.style.padding = '30px';
      heading2.style.fontSize = '32px';
      heading3.style.fontSize = '24px';
    }
  });
});
