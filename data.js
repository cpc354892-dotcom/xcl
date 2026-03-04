document.addEventListener('DOMContentLoaded', () => {
    // Tab switching
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Update active button
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update active content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Render Main List
    renderLevels('main-list', mainLevels, true);
    
    // Render Legacy List
    renderLevels('legacy-list', legacyLevels, false);
    
    // Render Pack
    renderLevels('pack-list', packLevels, false);
    
    // Render Leaderboard
    renderLeaderboard();
    
    // Populate level dropdown in submit record form
    populateLevelDropdown();

    // Form submissions
    document.getElementById('record-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for submitting your record! The moderation team will review it soon.');
        e.target.reset();
    });

    document.getElementById('level-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for suggesting a level! The moderation team will review it soon.');
        e.target.reset();
    });
});

function renderLevels(containerId, levels, showPoints) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = levels.map(level => `
        <div class="level-card">
            <div class="level-header">
                <span class="level-number">#${level.number}</span>
                <span class="level-name">${level.name}</span>
            </div>
            
            <div class="level-details">
                <div class="detail-item">
                    <span class="detail-label">ID</span>
                    <span class="detail-value">${level.id}</span>
                </div>
                
                ${showPoints ? `
                <div class="detail-item">
                    <span class="detail-label">Points</span>
                    <span class="detail-value">${level.points}</span>
                </div>
                ` : ''}
                
                <div class="detail-item">
                    <span class="detail-label">Verified by</span>
                    <span class="detail-value">${level.verifiedBy}</span>
                </div>
            </div>
            
            ${level.victors && level.victors.length > 0 ? `
            <div class="victors-section">
                <div class="victors-title">Victors</div>
                <div class="victors-list">
                    ${level.victors.map(victor => `<span class="victor-item">${victor}</span>`).join('')}
                </div>
            </div>
            ` : ''}
        </div>
    `).join('');
}

function renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-body');
    if (!tbody) return;

    tbody.innerHTML = leaderboardData.map((player, index) => `
        <tr>
            <td>#${index + 1}</td>
            <td><strong>${player.player}</strong></td>
            <td>${player.points}</td>
            <td>${player.hardest}</td>
        </tr>
    `).join('');
}

function populateLevelDropdown() {
    const select = document.getElementById('record-level');
    if (!select) return;

    allLevels.forEach(level => {
        const option = document.createElement('option');
        option.value = level.name;
        option.textContent = level.name;
        select.appendChild(option);
    });
}