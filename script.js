const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "-", "+", "/", "="];
let output = "";

const calculate = (btnValue) => {
    display.focus();

    if (btnValue === "=" && output !== "") {
        // Evaluasi ekspresi
        try {
            output = eval(output.replace("%", "/100")); // Hitung persentase jika ada
        } catch (error) {
            output = "Error"; // Jika input tidak valid
        }
    } else if (btnValue === "C") {
        output = ""; // Hapus semua input
    } else if (btnValue === "AC") {
        output = output.toString().slice(0, -1); // Hapus karakter terakhir
    } else {
        // Cek jika karakter terakhir adalah special character
        const lastChar = output.slice(-1);
        if (specialChars.includes(lastChar) && specialChars.includes(btnValue)) {
            return; // Abaikan input jika special character sudah ada
        }
        output += btnValue;
    }

    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        calculate(e.target.dataset.value);
    });
});
