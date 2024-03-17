function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.contains("dark-mode");
  body.classList.toggle("dark-mode", !isDarkMode);
}
    