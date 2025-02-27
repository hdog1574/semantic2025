document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element, img');
    const dropAreas = document.querySelectorAll('.drop-area');
    const checkBtn = document.getElementById('check-btn');
    const resultMessage = document.getElementById('result-message');

    elements.forEach(element => {
        element.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', event.target.id);
        });
    });

    dropAreas.forEach(dropArea => {
        dropArea.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        dropArea.addEventListener('drop', (event) => {
            event.preventDefault();
            const data = event.dataTransfer.getData('text');
            const draggedElement = document.getElementById(data);
            event.target.appendChild(draggedElement);
        });
    });

    checkBtn.addEventListener('click', () => {
        const answer = Array.from(dropAreas).map(area => area.textContent).join('');
        if (answer === 'H2O') {
            resultMessage.textContent = 'Correct! You formed H₂O.';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'Incorrect. Please try again.';
            resultMessage.style.color = 'red';
        }
    });
});
