const addBtn = document.getElementById('addBtn');
const sortBtn = document.getElementById('sortBtn');
const sortIcon = document.getElementById('sortIcon');
const taskList = document.querySelector('ul');  // Siyahının elementini seçirik

let ascending = true;

let isHovered = false;

// Hover effektləri üçün icon dəyişməsi
sortBtn.addEventListener('mouseenter', () => {
    sortBtn.addEventListener('mouseenter', () => {
        isHovered = true;
        if (ascending) {
            sortIcon.src = 'down-hover.svg';
        } else {
            sortIcon.src = 'up-hover.svg';
        }
    });
    
    sortBtn.addEventListener('mouseleave', () => {
        isHovered = false;
        if (ascending) {
            sortIcon.src = 'down.svg';
        } else {
            sortIcon.src = 'up.svg';
        }
    });
    
    });
    
function applyDeleteHoverEffects() {
    const deleteBtns = document.querySelectorAll('.deleteBtn');
    deleteBtns.forEach(btn => {
        const icon = btn.querySelector('.deleteIcon');
        btn.addEventListener('mouseenter', () => {
            icon.src = 'x-hover.svg'; // Hover icon
        });
        btn.addEventListener('mouseleave', () => {
            icon.src = 'x.svg'; // Normal icon
        });
    });
}

addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'todo';

    const x = document.createElement('button');
    x.className = 'deleteBtn';

    const deleteImg = document.createElement('img');
    deleteImg.className = 'deleteIcon';
    deleteImg.src = 'x.svg';
    deleteImg.alt = 'Delete';

    x.appendChild(deleteImg);
    x.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(input);
    li.appendChild(x);
    taskList.appendChild(li);  // Yeni itemi siyahıya əlavə edirik

    applyDeleteHoverEffects();
});

sortBtn.addEventListener('click', () => {
    const items = Array.from(taskList.querySelectorAll('li'));

    items.sort((a, b) => {
        const valA = a.querySelector('input').value.toLowerCase();
        const valB = b.querySelector('input').value.toLowerCase();
        if (ascending) {
            return valA.localeCompare(valB);
        } else {
            return valB.localeCompare(valA); 
        }
    });

    items.forEach(item => taskList.appendChild(item));  // Siyahı elementlərini yenidən sıralayırıq
    ascending = !ascending;
});

applyDeleteHoverEffects();