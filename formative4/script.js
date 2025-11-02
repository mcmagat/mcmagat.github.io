// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  // Base layout
  document.body.style.background = 'linear-gradient(to right, #8ebdecff, #115098ff)';
  document.body.style.padding = '2rem';
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.alignItems = 'center';
  document.body.style.justifyContent = 'center';
  document.body.style.minHeight = '100vh';
  document.body.style.boxSizing = 'border-box';

  // Elements
  const container = document.querySelector('.container');
  const tableSection = document.querySelector('.table-section');
  const table = document.getElementById('dataTable');
  const toggleButton = document.getElementById('toggleTheme');
  const signupForm = document.getElementById('signupForm');

  // Safety check
  if (!container || !tableSection || !table || !toggleButton || !signupForm) {
    console.error('Missing required elements: .container, .table-section, #dataTable, #toggleTheme or #signupForm');
    return;
  }

  // Container styles
  Object.assign(container.style, {
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0,0,0,0.08)',
    width: '90%',
    maxWidth: '520px',
    padding: '2rem',
    boxSizing: 'border-box'
  });

  // Heading
  const heading = container.querySelector('h2');
  heading.style.textAlign = 'center';
  heading.style.color = '#3a8dde';
  heading.style.margin = '0 0 0.5rem 0';
  heading.style.fontSize = '1.5rem';

  // Labels and inputs
  const labels = container.querySelectorAll('label');
  labels.forEach(label => {
    label.style.display = 'block';
    label.style.marginTop = '1rem';
    label.style.fontWeight = '600';
    label.style.fontSize = '0.95rem';
  });
  const inputs = container.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    Object.assign(input.style, {
      width: '100%',
      padding: '0.5rem',
      marginTop: '0.3rem',
      border: '1px solid #ccc',
      borderRadius: '6px',
      boxSizing: 'border-box',
      backgroundColor: '#fff'
    });
  });

  // Submit button
  const button = container.querySelector('button[type="submit"]');
  Object.assign(button.style, {
    marginTop: '1.25rem',
    width: '100%',
    padding: '0.7rem',
    backgroundColor: '#3a8dde',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem'
  });
  button.addEventListener('mouseover', () => button.style.backgroundColor = '#2f76c3');
  button.addEventListener('mouseout', () => button.style.backgroundColor = '#3a8dde');

  // Table section styles
  Object.assign(tableSection.style, {
    background: 'white',
    marginTop: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.05)',
    width: '95%',
    maxWidth: '720px',
    padding: '1.2rem',
    boxSizing: 'border-box'
  });

  const tableHeading = tableSection.querySelector('h3');
  tableHeading.style.color = '#3a8dde';
  tableHeading.style.margin = '0 0 0.5rem 0';
  tableHeading.style.fontSize = '1.1rem';
  tableHeading.style.textAlign = 'center';

  // Table basic styles
  Object.assign(table.style, {
    width: '100%',
    borderCollapse: 'collapse',
    display: 'block',
    overflowX: 'auto',
    whiteSpace: 'nowrap'
  });

  table.querySelectorAll('th').forEach(th => {
    Object.assign(th.style, {
      border: '1px solid #ddd',
      padding: '0.5rem',
      backgroundColor: '#e6f0ff',
      fontWeight: '600',
      textAlign: 'left'
    });
  });
  table.querySelectorAll('td').forEach(td => {
    Object.assign(td.style, {
      border: '1px solid #ddd',
      padding: '0.5rem',
      textAlign: 'left'
    });
  });

  // Row hover
  table.addEventListener('mouseover', e => {
    const td = e.target.closest('td');
    if (td) td.parentElement.style.backgroundColor = '#f7fbff';
  });
  table.addEventListener('mouseout', e => {
    const td = e.target.closest('td');
    if (td) td.parentElement.style.backgroundColor = '';
  });

  // Responsive tweaks
  function applyResponsiveTweaks() {
    if (window.innerWidth < 500) {
      container.style.padding = '1rem';
      tableSection.style.padding = '0.75rem';
      heading.style.fontSize = '1.15rem';
      tableHeading.style.fontSize = '1rem';
      toggleButton.style.right = '10px';
      toggleButton.style.bottom = '10px';
      toggleButton.style.padding = '0.45rem 0.6rem';
    } else {
      container.style.padding = '2rem';
      tableSection.style.padding = '1.2rem';
      heading.style.fontSize = '1.5rem';
      tableHeading.style.fontSize = '1.1rem';
      toggleButton.style.right = '20px';
      toggleButton.style.bottom = '20px';
      toggleButton.style.padding = '0.6rem 1rem';
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

    if (!idNumber && !firstName && !lastName) {
      // minimal validation: require at least one identifying value
      return;
    }

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
    // restyle newly added cells
    tbody.querySelectorAll('td').forEach(td => {
      td.style.color = darkMode ? '#f9f9f9' : '#000';
      td.style.fontSize = '0.9rem';
    });
  }

  // small HTML escape util
  function escapeHtml(str = '') {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  // Theme toggle styling & behavior
  Object.assign(toggleButton.style, {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    padding: '0.6rem 1rem',
    backgroundColor: '#ffffff',
    color: '#3a8dde',
    border: '2px solid #3a8dde',
    borderRadius: '6px',
    cursor: 'pointer',
    zIndex: 1000,
    fontWeight: 700
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
      tableHeading.style.color = '#fff';
      labels.forEach(l => l.style.color = '#fff');
      inputs.forEach(i => { i.style.backgroundColor = '#3a3a3a'; i.style.color = '#fff'; i.style.border = '1px solid #555'; });
      button.style.backgroundColor = '#555';
      button.style.color = '#fff';
      toggleButton.textContent = 'Light Mode';
      toggleButton.style.backgroundColor = '#3a8dde';
      toggleButton.style.color = '#fff';
      table.querySelectorAll('th').forEach(th => { th.style.backgroundColor = '#3b2a4a'; th.style.color = '#fff'; });
      table.querySelectorAll('td').forEach(td => td.style.color = '#f9f9f9');
    } else {
      document.body.style.background = 'linear-gradient(to right, #8ebdecff, #115098ff)';
      container.style.background = '#fff';
      tableSection.style.background = '#fff';
      heading.style.color = '#3a8dde';
      tableHeading.style.color = '#3a8dde';
      labels.forEach(l => l.style.color = '#000');
      inputs.forEach(i => { i.style.backgroundColor = '#fff'; i.style.color = '#000'; i.style.border = '1px solid #ccc'; });
      button.style.backgroundColor = '#3a8dde';
      button.style.color = '#fff';
      toggleButton.textContent = 'Dark Mode';
      toggleButton.style.backgroundColor = '#fff';
      toggleButton.style.color = '#3a8dde';
      table.querySelectorAll('th').forEach(th => { th.style.backgroundColor = '#e6f0ff'; th.style.color = '#000'; });
      table.querySelectorAll('td').forEach(td => td.style.color = '#000');
    }
    updateTable();
  });

  // initial table render (if any)
  updateTable();
});
// ...existing code...