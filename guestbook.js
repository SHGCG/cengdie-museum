// 留言板功能
var selectedAvatar = '\uD83E\uDDD1';

document.addEventListener('DOMContentLoaded', function() {
    var avatarOptions = document.querySelectorAll('.avatar-option');
    for (var i = 0; i < avatarOptions.length; i++) {
        avatarOptions[i].addEventListener('click', function() {
            for (var j = 0; j < avatarOptions.length; j++) {
                avatarOptions[j].classList.remove('selected');
            }
            this.classList.add('selected');
            selectedAvatar = this.getAttribute('data-avatar');
        });
    }

    var textarea = document.getElementById('gbContent');
    if (textarea) {
        textarea.addEventListener('input', function() {
            var cc = document.getElementById('charCount');
            if (cc) cc.textContent = this.value.length;
        });
    }

    loadMessages();
});

function submitMessage() {
    var nameInput = document.getElementById('gbName');
    var contentInput = document.getElementById('gbContent');

    var name = nameInput ? nameInput.value.trim() : '';
    var content = contentInput ? contentInput.value.trim() : '';

    if (!name) { alert('请输入昵称'); return; }
    if (!content) { alert('请输入留言内容'); return; }
    if (name.length > 15) { alert('昵称不能超过15个字符'); return; }
    if (content.length > 300) { alert('留言内容不能超过300个字符'); return; }

    var message = {
        id: Date.now(),
        avatar: selectedAvatar,
        name: name,
        content: content,
        time: new Date().toLocaleString('zh-CN', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit'
        })
    };

    var messages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');
    messages.unshift(message);
    if (messages.length > 50) messages = messages.slice(0, 50);
    localStorage.setItem('guestbookMessages', JSON.stringify(messages));

    if (nameInput) nameInput.value = '';
    if (contentInput) contentInput.value = '';
    var cc = document.getElementById('charCount');
    if (cc) cc.textContent = '0';

    loadMessages();

    var gbList = document.querySelector('.guestbook-list');
    if (gbList) gbList.scrollIntoView({ behavior: 'smooth' });
}

function loadMessages() {
    var messages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');
    var listDiv = document.getElementById('messageList');
    var countSpan = document.getElementById('msgCount');

    if (countSpan) countSpan.textContent = '(' + messages.length + '条)';

    if (messages.length === 0) {
        if (listDiv) listDiv.innerHTML = '<div class="empty-msg">还没有留言，来做第一个访客吧！</div>';
        return;
    }

    if (listDiv) {
        listDiv.innerHTML = '';
        for (var i = 0; i < messages.length; i++) {
            var msg = messages[i];
            var msgDiv = document.createElement('div');
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
        }
    }
}
