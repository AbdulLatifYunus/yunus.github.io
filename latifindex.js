// Get elements
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');
const investmentSummary = document.querySelector('.card');
const investmentList = document.querySelector('#investments ul');
const accountBalance = document.querySelector('#account p:nth-child(2)');
const depositButton = document.querySelector('#account button:nth-child(3)');
const withdrawButton = document.querySelector('#account button:nth-child(4)');

// Add event listeners
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Investment data
const investments = [
  { id: 1, type: 'Stocks', amount: 5000, returns: 1000 },
  { id: 2, type: 'Bonds', amount: 3000, returns: 500 },
];

// Render investment summary
function renderInvestmentSummary() {
  const totalInvestments = investments.reduce((acc, investment) => acc + investment.amount, 0);
  const totalReturns = investments.reduce((acc, investment) => acc + investment.returns, 0);
  investmentSummary.innerHTML = `
    <h2>Investment Summary</h2>
    <p>Total Investments: $${totalInvestments}</p>
    <p>Returns: $${totalReturns}</p>
  `;
}

// Render investment list
function renderInvestmentList() {
  investmentList.innerHTML = '';
  investments.forEach((investment) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${investment.type}</h3>
      <p>Investment Amount: $${investment.amount}</p>
      <p>Returns: $${investment.returns}</p>
    `;
    investmentList.appendChild(li);
  });
}

// Update account balance
function updateAccountBalance() {
  const balance = 10000; // Replace with actual account balance
  accountBalance.textContent = `Account Balance: $${balance}`;
}

// Deposit and withdraw functionality
depositButton.addEventListener('click', () => {
  const amount = prompt('Enter deposit amount:');
  // Add deposit logic here
});

withdrawButton.addEventListener('click', () => {
  const amount = prompt('Enter withdrawal amount:');
  // Add withdrawal logic here
});

// Initialize
renderInvestmentSummary();
renderInvestmentList();
updateAccountBalance();
