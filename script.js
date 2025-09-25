document.getElementById('clickBtn').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = "Hello! You clicked the button!";
    message.style.color = "green";
});
