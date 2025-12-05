// recuperar.js (Frontend)

document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    try {
        const response = await fetch("http://localhost:8081/api/recuperar/solicitar-codigo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Correo enviado! Revisa tu bandeja.");
        } else {
            alert("Error: " + data.error);
        }

    } catch (error) {
        alert("Error conectando con el servidor.");
        console.error(error);
    }
});
