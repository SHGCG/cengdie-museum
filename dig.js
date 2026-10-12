// 虚拟发掘体验

const gridSize = 25; // 5x5 探方
let dugCount = 0;

// 地层定义：0=未发掘, 1=耕土层(浅), 2=汉代层, 3=商周层, 4=新石器层
const layers = [
    1,1,1,1,1,
    1,2,2,2,1,
    1,2,3,2,1,
    1,2,3,4,1,
    1,1,1,1,1
];

const layerNames = ['', '耕土层', '汉代文化层', '商周文化层', '新石器时代层'];
const layerColors = ['', '#c9b896', '#a08860', '#8b7355', '#6b5344'];
const finds = [
    '', '现代瓷片', '汉代瓦当', '商周陶片', '仰韶彩陶片'
];

function initDig() {
    const grid = document.getElementById('digGrid');
    if (!grid) return;

    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'dig-cell';
        cell.dataset.index = i;
        cell.dataset.layer = layers[i];

        const indicator = document.createElement('span');
        indicator.className = 'layer-indicator';
        indicator.textContent = '?';
        cell.appendChild(indicator);

        cell.addEventListener('click', function() {
            digCell(this);
        });

        grid.appendChild(cell);
    }
}

function digCell(cell) {
    if (cell.classList.contains('dug')) return;

    const layer = parseInt(cell.dataset.layer);
    const index = parseInt(cell.dataset.index);

    cell.classList.add('dug');
    cell.style.background = '#f0ebe3';
    cell.style.borderColor = '#c9b896';

    const indicator = cell.querySelector('.layer-indicator');
    indicator.textContent = layer;
    indicator.style.color = '#5c4a3a';
    indicator.style.background = 'rgba(212,165,116,0.3)';

    // 显示出土信息
    const result = document.getElementById('digResult');
    result.innerHTML = '发掘到 <strong>' + layerNames[layer] + '</strong>，出土 <strong>' + finds[layer] + '</strong>';

    dugCount++;
    updateProgress();

    if (dugCount === gridSize) {
        result.innerHTML = '<strong style="color:#8b6914;">&#x1F389; 恭喜！探方发掘完成！</strong> 共发现4个文化层，出土各类遗物' + dugCount + '件。';
    }
}

function updateProgress() {
    const percent = Math.round((dugCount / gridSize) * 100);
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('progressText').textContent = percent + '%';
}

document.addEventListener('DOMContentLoaded', initDig);
