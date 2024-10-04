document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
        animateElements();
    }, 2000);

    initPerformanceChart();
});

function animateElements() {
    anime({
        targets: '.logo, h1, p, .btn',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(200)
    });
}

function toggleSubButtons(id) {
    const subButtons = document.getElementById(id + '-sub');
    subButtons.style.display = subButtons.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatContainer = document.getElementById('chat-container');
    if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('p');
        userMessage.textContent = `You: ${userInput.value}`;
        chatContainer.appendChild(userMessage);
        
        // Simulate bot response (replace with actual bot logic)
        setTimeout(() => {
            const botMessage = document.createElement('p');
            botMessage.textContent = `Bot: Thanks for your message! I'm processing it.`;
            chatContainer.appendChild(botMessage);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 1000);

        userInput.value = '';
    }
}

function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{
                label: 'Response Time (ms)',
                data: [12, 19, 3, 5, 2],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Simulate real-time data updates
setInterval(() => {
    // Update your performance metrics here
}, 5000);
