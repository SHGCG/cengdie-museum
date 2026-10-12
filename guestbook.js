// 留言板功能
let selectedAvatar = '\uD83E\uDDD1';

document.addEventListener('DOMContentLoaded', function() {
    const avatarOptions = document.querySelectorAll('.avatar-option');
    avatarOptions.forEach(opt => {
        opt.addEventListener('click', function() {
            avatarOptions.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            selectedAvatar = this.dataset.avatar;
        });
    });

    const textarea = document.getElementById('gbContent');
    if (textarea) {
        textarea.addEventListener('input', function() {
            document.getElementById('charCount').textContent = this.value.length;
        });
    }

    loadMessages();
});

function submitMessage() {
    const nameInput = document.getElementById('gbName');
    const contentInput = document.getElementById('gbContent');

    const name = nameInput.value.trim();
    const content = contentInput.value.trim();

    if (!name) { alert('请输入昵称'); return; }
    if (!content) { alert('请输入留言内容'); return; }
    if (name.length > 15) { alert('昵称不能超过15个字符'); return; }
    if (content.length > 300) { alert('留言内容不能超过300个字符'); return; }

    const message = {
        id: Date.now(),
        avatar: selectedAvatar,
        name: name,
        content: content,
        time: new Date().toLocaleString('zh-CN', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit'
        })
    };

    let messages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');
    messages.unshift(message);
    if (messages.length > 50) messages = messages.slice(0, 50);
    localStorage.setItem('guestbookMessages', JSON.stringify(messages));

    nameInput.value = '';
    contentInput.value = '';
    document.getElementById('charCount').textContent = '0';
    loadMessages();
    document.querySelector('.guestbook-list').scrollIntoView({ behavior: 'smooth' });
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');
    const listDiv = document.getElementById('messageList');
    const countSpan = document.getElementById('msgCount');

    countSpan.textContent = '(' + messages.length + '条)';

    if (messages.length === 0) {
        listDiv.innerHTML = '<div class="empty-msg">还没有留言，来做第一个访客吧！</div>';
        return;
    }

    listDiv.innerHTML = '';
    messages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message-item';
        msgDiv.innerHTML = '<div class="message-avatar">' + msg.avatar + '</div>' +
            '<div class="message-body">' +
            '<div class="message-meta">' +
            '<span class="message-name">' + msg.name + '</span>' +
            '<span class="message-time">' + msg.time + '</span>' +
            '</div>' +
            '<div class="message-content">' + msg.content + '</div>' +
            '</div>';
        listDiv.appendChild(msgDiv);
    });
}
