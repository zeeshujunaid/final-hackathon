import React, { useState } from 'react';

function ShadiLoan() {
  // State for form inputs
  const [formData, setFormData] = useState({
    subCategory: '',
    loanPeriod: '',
    initialDeposit: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const styles = {
    container: {
      Height: '100vh',
      width: '100vw',
      backgroundImage: "url('https://www.example.com/your-background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      padding: '0 16px',
    },
    formContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '16px',
      padding: '32px',
      width: '100%',
      maxWidth: '640px',
      marginTop: '40px',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '24px',
    },
    subHeading: {
      fontSize: '1.25rem',
      marginBottom: '32px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      backgroundColor: '#fff',
      color: '#333',
    },
    select: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      backgroundColor: '#fff',
      color: '#333',
    },
    button: {
      width: '100%',
      padding: '16px',
      fontSize: '1.125rem',
      backgroundColor: '#28a745',
      border: 'none',
      borderRadius: '8px',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Welcome to Shadi Loan</h1>
        <h2 style={styles.subHeading}>Please fill all the inputs to approve your loan</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Subcategory Dropdown */}
          <div>
            <label htmlFor="subCategory" style={{ fontWeight: 'bold' }}>Select Subcategory:</label>
            <select
              id="subCategory"
              name="subCategory"
              value={formData.subCategory}
              onChange={handleInputChange}
              style={styles.select}
              required
            >
              <option value="">Select</option>
              <option value="ruhksati">ruhksati</option>
              <option value="gifts">gifts</option>
              <option value="valima">valima</option>
              <option value="full shadi">full shadi</option>
            </select>
          </div>

          {/* Loan Period */}
          <div>
            <label htmlFor="loanPeriod" style={{ fontWeight: 'bold' }}>Loan Period (in months):</label>
            <input
              type="number"
              id="loanPeriod"
              name="loanPeriod"
              value={formData.loanPeriod}
              onChange={handleInputChange}
              placeholder="Enter loan period"
              style={styles.input}
              required
            />
          </div>

          {/* Initial Deposit */}
          <div>
            <label htmlFor="initialDeposit" style={{ fontWeight: 'bold' }}>Initial Deposit:</label>
            <input
              type="number"
              id="initialDeposit"
              name="initialDeposit"
              value={formData.initialDeposit}
              onChange={handleInputChange}
              placeholder="Enter initial deposit"
              style={styles.input}
              required
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label htmlFor="amount" style={{ fontWeight: 'bold' }}>Loan Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Enter loan amount"
              style={styles.input}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShadiLoan;
