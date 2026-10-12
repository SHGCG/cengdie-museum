// 虚拟发掘体验

const gridSize = 25;
let dugCount = 0;

// 地层定义 + 遗物
const layers = [
    1,1,1,1,1,
    1,2,2,2,1,
    1,2,3,2,1,
    1,2,3,4,1,
    1,1,1,1,1
];

const layerNames = ['', '耕土层', '汉代文化层', '商周文化层', '新石器时代层'];
const layerColors = ['', '#c9b896', '#a08860', '#8b7355', '#6b5344'];

// 每个格子对应的遗物（用emoji简笔画）
const artifacts = [
    '', '\uD83D\uDCA5', '\u2694', '\uD83C\uDFA8', '\uD83C\uDF3E'
];
const artifactNames = [
    '', '现代瓷片', '汉代铜钱', '商周陶片', '仰韶彩陶'
];

// 更丰富的遗物配置（每个格子独立）
const cellArtifacts = [
    {emoji: '', name: ''},
    {emoji: '\uD83D\uDCA5', name: '碎瓷片'},
    {emoji: '\uD83D\uDCA5', name: '瓦片'},
    {emoji: '', name: ''},
    {emoji: '\uD83D\uDCA5', name: '玻璃片'},
    {emoji: '', name: ''},
    {emoji: '\u2694', name: '五铢钱'},
    {emoji: '\uD83C\uDFA8', name: '汉代陶片'},
    {emoji: '\u2694', name: '铁钉'},
    {emoji: '', name: ''},
    {emoji: '\uD83D\uDCA5', name: '砖块'},
    {emoji: '\uD83C\uDFA8', name: '灰陶片'},
    {emoji: '\uD83C\uDFA8', name: '商代陶片'},
    {emoji: '\uD83C\uDFA8', name: '绳纹陶'},
    {emoji: '', name: ''},
    {emoji: '', name: ''},
    {emoji: '\u2694', name: '石斧'},
    {emoji: '\uD83C\uDF3E', name: '彩陶片'},
    {emoji: '\uD83C\uDFA8', name: '黑陶片'},
    {emoji: '', name: ''},
    {emoji: '\uD83D\uDCA5', name: '植物根系'},
    {emoji: '', name: ''},
    {emoji: '\uD83C\uDF3E', name: '石铲'},
    {emoji: '\uD83C\uDF3E', name: '骨针'},
    {emoji: '', name: ''}
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

        // 初始显示土层颜色
        cell.style.background = 'linear-gradient(180deg, ' + layerColors[layers[i]] + ' 0%, ' + 
            adjustColor(layerColors[layers[i]], -20) + ' 100%)';

        // 添加土层标识
        const indicator = document.createElement('span');
        indicator.className = 'layer-indicator';
        indicator.textContent = '?';
        cell.appendChild(indicator);

        cell.addEventListener('click', function() {
            digCell(this, i);
        });

        grid.appendChild(cell);
    }
}

function adjustColor(hex, amount) {
    // 简单的颜色调整
    return hex;
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

    // 显示发掘信息
    const result = document.getElementById('digResult');
    if (artifact.emoji) {
        result.innerHTML = '发掘到 <strong>' + layerNames[layer] + '</strong>，出土 <strong>' + artifact.name + '</strong> ' + artifact.emoji;
    } else {
        result.innerHTML = '发掘到 <strong>' + layerNames[layer] + '</strong>，未发现遗物';
    }

    dugCount++;
    updateProgress();

    if (dugCount === gridSize) {
        result.innerHTML = '<strong style="color:#8b6914;">&#x1F389; 恭喜！探方发掘完成！</strong> 共发现4个文化层，出土各类遗物。';
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
