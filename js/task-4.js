const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const emailInput = this.elements.email;
      const passwordInput = this.elements.password;

      const emailTrim = emailInput.value.trim();
      const passwordTrim = passwordInput.value.trim();

      if (!emailTrim || !passwordTrim) {
        alert('All form fields must be filled in');
        return;
      }

      const formData = {
        email: emailTrim,
        password: passwordTrim,
      };

      console.log(formData);

      this.reset();
    });
