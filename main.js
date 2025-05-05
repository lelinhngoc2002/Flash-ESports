const greenElements = document.querySelectorAll('.green-o, .green-square');

greenElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.transform = 'rotate(360deg)';
        element.style.transition = 'transform 0.5s ease';
    });

    element.addEventListener('mouseout', () => {
        element.style.transform = 'rotate(0deg)';
    });
});