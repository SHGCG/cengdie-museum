// 人口估算计算器

function calculate() {
    // 获取输入值
    const area = parseFloat(document.getElementById('area').value) || 0;
    const houses = parseFloat(document.getElementById('houses').value) || 0;
    const houseArea = parseFloat(document.getElementById('houseArea').value) || 0;
    const perPerson = parseFloat(document.getElementById('perPerson').value) || 0;

    if (area <= 0 || houses <= 0 || houseArea <= 0 || perPerson <= 0) {
        alert('请填写所有参数，且数值必须大于0');
        return;
    }

    // 计算房屋总面积
    const totalHouseArea = houses * houseArea;

    // 方法1: Naroll法 - 人口 = 房屋面积 × 0.1
    const narollResult = Math.round(totalHouseArea * 0.1);

    // 方法2: Kramer法 - 人口 = 房屋数 × 6
    const kramerResult = Math.round(houses * 6);

    // 方法3: 面积密度法 - 人口 = 总面积 ÷ 人均面积
    const densityResult = Math.round(area / perPerson);

    // 方法4: 综合估算 - 多方法加权平均
    // 权重: Naroll 30%, Kramer 30%, 面积密度 40%
    const combinedResult = Math.round(narollResult * 0.3 + kramerResult * 0.3 + densityResult * 0.4);

    // 房屋容纳人数（按人均居住面积）
    const houseCapacity = Math.round(totalHouseArea / perPerson);

    // 面积容纳人数
    const areaCapacity = densityResult;

    // 显示结果
    document.getElementById('resultPop').textContent = combinedResult;
    document.getElementById('resultHouse').textContent = houseCapacity;
    document.getElementById('resultArea').textContent = areaCapacity;

    document.getElementById('naroll').textContent = narollResult + ' 人';
    document.getElementById('kramer').textContent = kramerResult + ' 人';
    document.getElementById('density').textContent = densityResult + ' 人';
    document.getElementById('combined').textContent = combinedResult + ' 人';

    // 添加动画效果
    animateResult();
}

function resetData() {
    document.getElementById('area').value = 19000;
    document.getElementById('houses').value = 100;
    document.getElementById('houseArea').value = 20;
    document.getElementById('perPerson').value = 6;

    document.getElementById('resultPop').textContent = '-';
    document.getElementById('resultHouse').textContent = '-';
    document.getElementById('resultArea').textContent = '-';
    document.getElementById('naroll').textContent = '-';
    document.getElementById('kramer').textContent = '-';
    document.getElementById('density').textContent = '-';
    document.getElementById('combined').textContent = '-';
}

function animateResult() {
    const cards = document.querySelectorAll('.result-value');
    cards.forEach(card => {
        card.style.transform = 'scale(1.2)';
        card.style.transition = 'transform 0.3s';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 300);
    });
}

// 页面加载时自动计算一次示例
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('resultPop')) {
        calculate();
    }
});
