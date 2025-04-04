// JavaScript to toggle between light and dark theme
function toggleTheme() {
    // Toggle light-mode class on body
    document.body.classList.toggle('light-mode');

    // Change the icon (moon/sun) based on current theme
    let icon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}
