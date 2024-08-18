const resultField = document.getElementById("result");
        const buttons = document.querySelectorAll(".numbtn");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                if (button.textContent === "=") {
                    try {
                        resultField.value = eval(resultField.value);
                    } catch (error) {
                        resultField.value = "Error";
                    }
                } else if (button.textContent === "AC") {
                    resultField.value = "";
                } else {
                    resultField.value += button.textContent;
                }
            });
        });