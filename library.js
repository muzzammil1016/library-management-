let currentRole = "";

function showPage(pageId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function showLogin(role) {
    currentRole = role;
    document.getElementById('login-title').innerText = role + " Login";
    showPage('login-page');
}

function handleLogin() {
    // Note: Add your MySQL/API validation logic here later
    const user = document.getElementById('username').value;
    if(user === "") {
        alert("Please enter a Username/ID");
        return;
    }
    
    document.getElementById('user-display').innerText = currentRole + ": " + user;
    renderMenu();
    showPage('home-page');
}

function renderMenu() {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = ""; 

    const studentItems = [
        { name: 'Profile', icon: '👤' },
        { name: 'Find Book', icon: '🔍' },
        { name: 'Take Book', icon: '📥' },
        { name: 'Return Book', icon: '📤' },
        { name: 'Donate Book', icon: '🎁' }
    ];

    const adminItems = [
        { name: 'Inventory', icon: '📚' },
        { name: 'Approvals', icon: '✅' },
        { name: 'User Logs', icon: '📋' },
        { name: 'Profile', icon: '🔑' }
    ];

    const items = currentRole === 'Student' ? studentItems : adminItems;

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `<span>${item.icon}</span> <p>${item.name}</p>`;
        div.onclick = () => alert("Opening " + item.name + " module...");
        grid.appendChild(div);
    });
}