const chat = document.getElementById('chat');
const input = document.getElementById('msg');
const send = document.getElementById('send');

send.onclick = () => {
    const t = input.value.trim();

    if (!t) return;

    add('YOU: ' + t, 'user');
    input.value = '';

    const processingMessage = add(
        'J.A.R.V.I.S: Processing...',
        'ai'
    );

    setTimeout(() => {
        processingMessage.innerText =
            'J.A.R.V.I.S: Systems online. How may I assist you, Boss?';

        chat.scrollTop = chat.scrollHeight;
    }, 1000);
};

function add(text, who) {
    const d = document.createElement('div');

    d.className = 'msg ' + who;
    d.innerText = text;

    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;

    return d;
}
