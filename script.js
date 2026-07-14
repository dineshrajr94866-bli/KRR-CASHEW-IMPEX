function sendToWhatsApp(event) {
    event.preventDefault();

    const phone = "918220070867";

    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const grade = document.getElementById("grade").value;
    const qty = document.getElementById("qty").value;
    const message = document.getElementById("message").value;

    const text =
`*New Bulk Inquiry*

Name: ${name}
Company: ${company}
Email: ${email}
Country: ${country}
Grade: ${grade}
Quantity: ${qty}

Message:
${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    return false;
}