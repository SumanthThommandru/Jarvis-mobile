const chat = document.getElementById('chat');
const input = document.getElementById('msg');
const send = document.getElementById('send');

send.onclick = async () => {
    const question = input.value.trim();

    if (!question) return;

    add('YOU: ' + question, 'user');
    input.value = '';

    const processingMessage = add(
        'J.A.R.V.I.S: Processing...',
        'ai'
    );

    try {
        const response = await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: question
            })
        });

        const data = await response.json();

        processingMessage.innerText =
            'J.A.R.V.I.S: ' + data.response;

    } catch (error) {
        processingMessage.innerText =
            'J.A.R.V.I.S: Unable to connect to the AI system.';
    }

    chat.scrollTop = chat.scrollHeight;
};

function add(text, who) {
    const d = document.createElement('div');

    d.className = 'msg ' + who;
    d.innerText = text;

    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;

    return d;
}
