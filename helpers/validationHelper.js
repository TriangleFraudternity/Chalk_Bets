function validateEmail(email) {
    // Email validation using a simple regex pattern
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    // Password validation according to Google Firebase standards
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  // Export functions for use in other files
module.exports = {
    validateEmail,
    validatePassword,
  };