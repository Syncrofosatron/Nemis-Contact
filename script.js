document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  const mailto = `mailto:nmcnemis@gmail.com` +
    `?subject=Message from ${encodeURIComponent(name)}` +
    `&body=From: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;

  window.location.href = mailto;
});
