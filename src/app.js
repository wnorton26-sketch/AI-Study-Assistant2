document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to AI Study Tool!');
});

document.querySelectorAll('.resource-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
    });
});
