(() => {
    const input = document.getElementById("inputText");
    const reversedText = document.getElementById("reversedText");
    const placeholder = document.getElementById("placeholder");
    const resultBox = document.getElementById("resultBox");
    const copyBtn = document.getElementById("copyBtn");

    if (!input || !reversedText || !placeholder || !resultBox || !copyBtn) {
        return;
    }

    const MIN_CHARS_FOR_BUTTON = 3;
    const COPY_FEEDBACK_MS = 1500;
    const COPY_DEFAULT_LABEL = copyBtn.textContent;
    let copyFeedbackTimeoutId = null;

    function reverseString(str) {
        return Array.from(str).reverse().join("");
    }

    function render() {
        const value = input.value;
        const hasText = value.length > 0;

        if (hasText) {
            reversedText.textContent = reverseString(value);
            reversedText.hidden = false;
            placeholder.hidden = true;
            resultBox.classList.remove("empty");
        } else {
            reversedText.textContent = "";
            reversedText.hidden = true;
            placeholder.hidden = false;
            resultBox.classList.add("empty");
        }

        const showButton = value.length > MIN_CHARS_FOR_BUTTON;
        copyBtn.classList.toggle("visible", showButton);
        copyBtn.disabled = !showButton;
    }

    async function copyToClipboard() {
        const text = reversedText.textContent;
        if (!text) return;

        try {
            await navigator.clipboard.writeText(text);
            copyBtn.textContent = "¡Copiado!";
            if (copyFeedbackTimeoutId) {
                clearTimeout(copyFeedbackTimeoutId);
            }
            copyFeedbackTimeoutId = setTimeout(() => {
                copyBtn.textContent = COPY_DEFAULT_LABEL;
                copyFeedbackTimeoutId = null;
            }, COPY_FEEDBACK_MS);
        } catch {
            // Si la API del portapapeles falla (permisos, http, etc.)
            // no rompemos la experiencia: el usuario sigue viendo el resultado.
        }
    }

    input.addEventListener("input", render);
    copyBtn.addEventListener("click", copyToClipboard);

    render();
})();
