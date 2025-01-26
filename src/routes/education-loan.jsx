import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert
import { getAuth } from 'firebase/auth'; // Import Auth if needed for user authentication
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore'; // Import Firestore functions

function EducationLoan() {
  // State for form inputs
  const [formData, setFormData] = useState({
    subCategory: '',
    loanPeriod: '',
    initialDeposit: '',
    amount: '',
  });

  const [calculatedAmount, setCalculatedAmount] = useState(null); // State to store the calculated amount
  const [temporaryPassword, setTemporaryPassword] = useState(''); // State to store the generated temporary password

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save to database
  const saveToDatabase = async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cnic = document.getElementById('cnic').value;

    // Check if any input is empty
    if (!name || !email || !cnic) {
      Swal.showValidationMessage('Please fill all the inputs');
      return false;
    }

    try {
      // Get user loan data from local storage
      const loanData = JSON.parse(localStorage.getItem('userLoanData'));

      if (!loanData) {
        Swal.fire({
          title: 'Error',
          text: 'Loan data is missing in local storage. Please calculate the loan first.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        return false;
      }

      // Firebase Authentication: Create user with email and a temporary password
      const auth = getAuth();
      const temporaryPassword = Math.random().toString(36).slice(-8); // Generates a temporary 8-character password
      console.log('Temporary Password:', temporaryPassword); // Only for debugging, remove in production

      const userCredential = await createUserWithEmailAndPassword(auth, email, temporaryPassword); // Sign up user
      const user = userCredential.user;
      console.log('User created:', user);

      // Get Firestore instance
      const db = getFirestore();
      const userRef = doc(db, 'users', cnic); // Set the CNIC as the document ID

      // Save user details and loan data to Firestore with CNIC as the document ID
      await setDoc(userRef, {
        name,
        email,
        cnic,
        createdAt: new Date(),
        loanDetails: loanData, // Include loan data from local storage
      });

      // Set temporary password in state
      setTemporaryPassword(temporaryPassword);

      // Success message with temporary password
      Swal.fire({
        title: 'Application Submitted',
        text: `Your application has been submitted successfully. Your account has been created successfully. Temporary Password: ${temporaryPassword}`,
        icon: 'success',
        confirmButtonText: 'OK',
      });

      return true; // Return true to proceed
    } catch (error) {
      console.error('Error saving user data:', error);

      // Handle errors from Firebase Auth and Firestore
      let errorMessage = 'There was an error. Please try again later.';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'The email is already in use. Please use a different email.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak. Please use a stronger password.';
      }

      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK',
      });

      return false;
    }
  };

  const styles = {
    container: {
      height: '100vh',
      width: '100vw',
      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvRrKrDLvXTDFmPYEcaojO7OyysoikMRWmg&s')",
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
      backgroundColor: 'lightgreen',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { subCategory, loanPeriod, initialDeposit, amount } = formData;

    // Validate that all fields are filled
    if (!subCategory || !loanPeriod || !initialDeposit || !amount) {
      alert('Please fill all the inputs');
      return;
    } else {
      const totalAmount = parseInt(amount) - parseInt(initialDeposit);
      const monthlyInstallment = totalAmount / parseInt(loanPeriod);

      // Set the calculated amount state
      setCalculatedAmount(monthlyInstallment);

      // Save data to local storage
      const loanData = {
        subCategory,
        loanPeriod,
        initialDeposit,
        amount,
        monthlyInstallment,
      };
      localStorage.setItem('userLoanData', JSON.stringify(loanData));

      // Check if data is stored in localStorage
      const savedData = JSON.parse(localStorage.getItem('userLoanData'));
      if (savedData) {
        console.log('Loan data saved to local storage:', savedData);

        // Show SweetAlert with calculated amount and temporary password
        Swal.fire({
          title: `Your installment amount is ${monthlyInstallment} PKR per month`,
          text: `Temporary Password: ${temporaryPassword}\nPlease copy it for login.`,
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Proceed',
        }).then((result) => {
          if (result.isConfirmed) {
            // Open another SweetAlert popup after clicking 'Proceed'
            Swal.fire({
              title: 'Next Step',
              html: ` 
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <h3 style="margin-bottom: 16px;">Please provide your details to complete the loan process</h3>
                  <input type="text" id="name" placeholder="Enter your name" style="padding: 12px; border-radius: 8px; border: 1px solid #ddd;" required>
                  <input type="email" id="email" placeholder="Enter your email" style="padding: 12px; border-radius: 8px; border: 1px solid #ddd;" required>
                  <input type="text" id="cnic" placeholder="Enter your CNIC" style="padding: 12px; border-radius: 8px; border: 1px solid #ddd;" required>
                </div>
              `,
              confirmButtonText: 'Save',
              preConfirm: saveToDatabase, // Call saveToDatabase function on "Save" button click
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: 'Data Saved',
                  text: 'Your details have been saved successfully and your temporary password is generated plz copy that to login.',
                  icon: 'success',
                  confirmButtonText: 'OK',
                });
              }
            });
          }
        });
      } else {
        console.log('Error: Loan data not saved in local storage');
        // Show alert if data was not saved
        Swal.fire({
          title: 'Error!',
          text: 'Loan data could not be saved. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Welcome to Education Loan</h1>
        <h2 style={styles.subHeading}>Please fill all the details to approve your loan</h2>
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
              <option value="university fee">university fee</option>
              <option value="child fee">child fee</option>
            </select>
          </div>
          
          {/* Loan Period */}
          <div>
            <label htmlFor="loanPeriod" style={{ fontWeight: 'bold' }}>Loan Period (Months):</label>
            <input
              type="number"
              id="loanPeriod"
              name="loanPeriod"
              value={formData.loanPeriod}
              onChange={handleInputChange}
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
              style={styles.input}
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="amount" style={{ fontWeight: 'bold' }}>Total Loan Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>Calculate & Submit</button>
        </form>

        {/* Display Temporary Password */}
        {temporaryPassword && (
          <p>Your temporary password is: {temporaryPassword}</p>
        )}
      </div>
    </div>
  );
}

export default EducationLoan;
