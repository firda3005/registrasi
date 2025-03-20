document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const submitBtn = document.getElementById("submitBtn");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const dob = document.getElementById("dob");
    const phone = document.getElementById("phone");

    function validateForm() {
        let isValid = true;

        // Validasi Nama Lengkap (min 3 karakter)
        if (fullName.value.length < 3) {
            document.getElementById("nameError").textContent = "Nama harus minimal 3 karakter.";
            isValid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        // Validasi Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            document.getElementById("emailError").textContent = "Format email tidak valid.";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // Validasi Password (min 8 karakter)
        if (password.value.length < 8) {
            document.getElementById("passwordError").textContent = "Password minimal 8 karakter.";
            isValid = false;
        } else {
            document.getElementById("passwordError").textContent = "";
        }

        // Validasi Konfirmasi Password
        if (confirmPassword.value !== password.value) {
            document.getElementById("confirmPasswordError").textContent = "Password tidak cocok.";
            isValid = false;
        } else {
            document.getElementById("confirmPasswordError").textContent = "";
        }

        // Validasi Tanggal Lahir (maksimal tahun 2006)
        const birthYear = new Date(dob.value).getFullYear();
        if (birthYear > 2006) {
            document.getElementById("dobError").textContent = "Anda harus berusia minimal 18 tahun.";
            isValid = false;
        } else {
            document.getElementById("dobError").textContent = "";
        }

        // Validasi Nomor HP (+62 format Indonesia)
        const phonePattern = /^\+62[0-9]{9,13}$/;
        if (!phonePattern.test(phone.value)) {
            document.getElementById("phoneError").textContent = "Gunakan format nomor Indonesia (+62xxxx).";
            isValid = false;
        } else {
            document.getElementById("phoneError").textContent = "";
        }

        // Aktifkan tombol submit jika semua validasi terpenuhi
        submitBtn.disabled = !isValid;
    }

    form.addEventListener("input", validateForm);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Registrasi berhasil!");
        form.reset();
        submitBtn.disabled = true;
    });
});
