// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  // only set background here — layout handled by CSS for reliable responsiveness
  document.body.style.background = 'linear-gradient(to right, #8ebdecff, #115098ff)';
  document.body.style.minHeight = '100vh';

  // Elements
  const container = document.querySelector('.container');
  const tableSection = document.querySelector('.table-section');
  const table = document.getElementById('dataTable');
  const toggleButton = document.getElementById('toggleTheme');
  const signupForm = document.getElementById('signupForm');

  if (!container || !tableSection || !table || !toggleButton || !signupForm) {
    console.error('Missing required elements: .container, .table-section, #dataTable, #toggleTheme or #signupForm');
    return;
  }

  // keep JS-driven fine-grain styles that don't conflict with layout
  const heading = container.querySelector('h2');
  heading.style.margin = '0 0 0.5rem 0';
  heading.style.fontSize = '1.5rem';

  const labels = container.querySelectorAll('label');
  labels.forEach(label => {
    label.style.display = 'block';
    label.style.marginTop = '0.9rem';
    label.style.fontWeight = '600';
    label.style.fontSize = '0.95rem';
  });

  const inputs = container.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    Object.assign(input.style, {
      boxSizing: 'border-box'
    });
  });

  // Submit button hover
  const button = container.querySelector('button[type="submit"]');
  button.addEventListener('mouseover', () => button.style.backgroundColor = '#2f76c3');
  button.addEventListener('mouseout', () => button.style.backgroundColor = '#3a8dde');

  // Table basic JS styles (visual only)
  table.querySelectorAll('th').forEach(th => {
    Object.assign(th.style, {
      fontWeight: '600'
    });
  });

  // Row hover using JS (keeps same behavior)
  table.addEventListener('mouseover', e => {
    const td = e.target.closest('td');
    if (td) td.parentElement.style.backgroundColor = '#f7fbff';
  });
  table.addEventListener('mouseout', e => {
    const td = e.target.closest('td');
    if (td) td.parentElement.style.backgroundColor = '';
  });

  // Responsive tweaks that adjust only element-level styles (not core layout)
  function applyResponsiveTweaks() {
    if (!container || !tableSection || !heading) return;
    if (window.innerWidth < 600) {
      heading.style.fontSize = '1.25rem';
    } else {
      heading.style.fontSize = '1.5rem';
    }
  }
  window.addEventListener('resize', applyResponsiveTweaks);
  applyResponsiveTweaks(); // initial

  // Data logic
  const userData = [];
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const idNumber = (document.getElementById('idNumber') || {}).value?.trim() || '';
    const firstName = (document.getElementById('firstName') || {}).value?.trim() || '';
    const middleName = (document.getElementById('middleName') || {}).value?.trim() || '';
    const lastName = (document.getElementById('lastName') || {}).value?.trim() || '';
    const gender = (document.getElementById('gender') || {}).value || '';
    const birthday = (document.getElementById('birthday') || {}).value || '';

    if (!idNumber && !firstName && !lastName) return;

    userData.push({ idNumber, firstName, middleName, lastName, gender, birthday });
    updateTable();
    this.reset();
  });

  let darkMode = false;
  function updateTable() {
    const tbody = table.querySelector('tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    userData.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${escapeHtml(user.idNumber)}</td>
        <td>${escapeHtml(user.firstName)}</td>
        <td>${escapeHtml(user.middleName)}</td>
        <td>${escapeHtml(user.lastName)}</td>
        <td>${escapeHtml(user.gender)}</td>
        <td>${escapeHtml(user.birthday)}</td>
      `;
      tbody.appendChild(row);
    });
    tbody.querySelectorAll('td').forEach(td => {
      td.style.fontSize = '0.9rem';
      td.style.color = darkMode ? '#f9f9f9' : '#000';
    });
  }

  function escapeHtml(str = '') {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  // Theme toggle positioning & behavior
  Object.assign(toggleButton.style, {
    right: '20px',
    bottom: '20px'
  });
  toggleButton.title = "Switch between light and dark themes";

  toggleButton.addEventListener('click', () => {
    darkMode = !darkMode;
    toggleButton.setAttribute('aria-pressed', String(darkMode));
    if (darkMode) {
      document.body.style.background = '#1f1630';
      container.style.background = '#2c2c3c';
      tableSection.style.background = '#241528';
      heading.style.color = '#fff';
      tableSection.querySelectorAll('th').forEach(th => { th.style.backgroundColor = '#3b2a4a'; th.style.color = '#fff'; });
      tableSection.querySelectorAll('td').forEach(td => td.style.color = '#f9f9f9');
      labels.forEach(l => l.style.color = '#fff');
      inputs.forEach(i => { i.style.backgroundColor = '#3a3a3a'; i.style.color = '#fff'; i.style.border = '1px solid #555'; });
      button.style.backgroundColor = '#555';
      button.style.color = '#fff';
      toggleButton.textContent = 'Light Mode';
      toggleButton.style.backgroundColor = '#3a8dde';
      toggleButton.style.color = '#fff';
    } else {
      document.body.style.background = 'linear-gradient(to right, #8ebdecff, #115098ff)';
      container.style.background = '#fff';
      tableSection.style.background = '#fff';
      heading.style.color = '#3a8dde';
      tableSection.querySelectorAll('th').forEach(th => { th.style.backgroundColor = '#e6f0ff'; th.style.color = '#000'; });
      tableSection.querySelectorAll('td').forEach(td => td.style.color = '#000');
      labels.forEach(l => l.style.color = '#000');
      inputs.forEach(i => { i.style.backgroundColor = '#fff'; i.style.color = '#000'; i.style.border = '1px solid #ccc'; });
      button.style.backgroundColor = '#3a8dde';
      button.style.color = '#fff';
      toggleButton.textContent = 'Dark Mode';
      toggleButton.style.backgroundColor = '#fff';
      toggleButton.style.color = '#3a8dde';
    }
    updateTable();
  });

  // initial render
  updateTable();
});
// ...existing code...