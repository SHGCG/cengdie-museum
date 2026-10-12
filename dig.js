// 虚拟发掘体验

const gridSize = 25; // 5x5 探方
let dugCount = 0;

// 地层定义：从上到下分层
// 第0-4行(上)=耕土层(1), 第5-9行=汉代层(2), 第10-14行=商周层(3), 第15-24行(下)=新石器时代层(4)
const layers = [
    1,1,1,1,1,  // 第1行：耕土层（最浅，最上面）
    1,1,1,1,1,  // 第2行：耕土层
    2,2,2,2,2,  // 第3行：汉代层
    2,2,2,2,2,  // 第4行：汉代层
    3,3,3,3,3,  // 第5行：商周层
    3,3,3,3,3,  // 第6行：商周层
    4,4,4,4,4,  // 第7行：新石器时代层（最深，最下面）
    4,4,4,4,4,  // 第8行：新石器时代层
    4,4,4,4,4,  // 第9行：新石器时代层
    4,4,4,4,4   // 第10行：新石器时代层
];

const layerNames = ['', '耕土层', '汉代文化层', '商周文化层', '新石器时代层'];
const layerColors = ['', '#c9b896', '#a08860', '#8b7355', '#6b5344'];
const layerDeepColors = ['', '#b8a078', '#8f7850', '#7a6550', '#5a4a3a'];

// 每个格子对应的遗物
const cellArtifacts = [
    {emoji: '\uD83D\uDCA5', name: '碎瓷片'}, {emoji: '\uD83D\uDCA5', name: '瓦片'}, {emoji: '', name: ''}, {emoji: '\uD83D\uDCA5', name: '玻璃片'}, {emoji: '', name: ''},
    {emoji: '', name: ''}, {emoji: '\uD83D\uDCA5', name: '砖块'}, {emoji: '', name: ''}, {emoji: '\uD83D\uDCA5', name: '植物根系'}, {emoji: '', name: ''},
    {emoji: '\u2694', name: '五铢钱'}, {emoji: '\uD83C\uDFA8', name: '汉代陶片'}, {emoji: '\u2694', name: '铁钉'}, {emoji: '', name: ''}, {emoji: '\u2694', name: '铜钱'},
    {emoji: '\uD83C\uDFA8', name: '灰陶片'}, {emoji: '\uD83C\uDFA8', name: '商代陶片'}, {emoji: '\uD83C\uDFA8', name: '绳纹陶'}, {emoji: '\u2694', name: '石斧'}, {emoji: '', name: ''},
    {emoji: '\uD83C\uDF3E', name: '彩陶片'}, {emoji: '\uD83C\uDF3E', name: '石铲'}, {emoji: '\uD83C\uDF3E', name: '骨针'}, {emoji: '\uD83C\uDF3E', name: '仰韶彩陶'}, {emoji: '\uD83C\uDF3E', name: '陶片'}
];

function initDig() {
    const grid = document.getElementById('digGrid');
    if (!grid) return;

    grid.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'dig-cell';
        cell.dataset.index = i;
        cell.dataset.layer = layers[i];

        // 根据层位设置颜色（从上到下颜色逐渐变深）
        const layer = layers[i];
        cell.style.background = 'linear-gradient(180deg, ' + layerColors[layer] + ' 0%, ' + layerDeepColors[layer] + ' 100%)';
        cell.style.borderColor = layerDeepColors[layer];

        // 添加土层标识
        const indicator = document.createElement('span');
        indicator.className = 'layer-indicator';
        indicator.textContent = layer;
        cell.appendChild(indicator);

        cell.addEventListener('click', function() {
            digCell(this, i);
        });

        grid.appendChild(cell);
    }
}

function digCell(cell, index) {
    if (cell.classList.contains('dug')) return;

    const layer = parseInt(cell.dataset.layer);
    const artifact = cellArtifacts[index];

    cell.classList.add('dug');

    // 发掘后显示遗物
    if (artifact.emoji) {
        cell.innerHTML = '<span class="artifact-emoji">' + artifact.emoji + '</span>';
        cell.style.background = '#f5f0e8';
        cell.style.borderColor = '#d4c4a8';
    } else {
        cell.innerHTML = '<span class="dug-mark">&#x2713;</span>';
        cell.style.background = '#e8e0d5';
        cell.style.borderColor = '#c9b896';
    }

    // 更新顶部醒目提示
    const resultDiv = document.getElementById('digResult');
    if (artifact.emoji) {
        resultDiv.innerHTML = '<span style="font-size:28px;">' + artifact.emoji + '</span> ' +
            '发掘到 <strong style="color:#8b6914;">' + layerNames[layer] + '</strong>，出土 <strong style="color:#8b6914;">' + artifact.name + '</strong>';
    } else {
        resultDiv.innerHTML = '发掘到 <strong style="color:#8b6914;">' + layerNames[layer] + '</strong>，未发现遗物';
    }

    // 给提示添加动画
    const banner = document.getElementById('digResultBanner');
    banner.style.animation = 'none';
    setTimeout(() => {
        banner.style.animation = 'highlightPulse 0.6s ease';
    }, 10);

    dugCount++;
    updateProgress();

    if (dugCount === gridSize) {
        document.getElementById('digResult').innerHTML = '<strong style="color:#8b6914;font-size:22px;">&#x1F389; 恭喜！探方发掘完成！</strong><br>共发现4个文化层，出土各类遗物';
    }
}

function updateProgress() {
    const percent = Math.round((dugCount / gridSize) * 100);
    const fill = document.getElementById('progressFill');
    const text = document.getElementById('progressText');
    if (fill) fill.style.width = percent + '%';
    if (text) text.textContent = percent + '%';
}

document.addEventListener('DOMContentLoaded', initDig);
