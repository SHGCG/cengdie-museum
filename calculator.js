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

    // 更新动态示意图
    updateVisual(houses, combinedResult);

    // 添加动画效果
    animateResult();
}

function updateVisual(houses, population) {
    const housesDiv = document.getElementById('visualHouses');
    const peopleDiv = document.getElementById('visualPeople');
    const vHouses = document.getElementById('vHouses');
    const vPop = document.getElementById('vPop');

    // 限制显示数量（太多会挤不下）
    const displayHouses = Math.min(houses, 20);
    const displayPeople = Math.min(population, 50);

    // 生成房屋
    let houseHTML = '';
    for (let i = 0; i < displayHouses; i++) {
        const left = (i % 7) * 14 + 5;
        const bottom = Math.floor(i / 7) * 25 + 10;
        houseHTML += '<div class="v-house" style="left:' + left + '%;bottom:' + bottom + '%;"></div>';
    }
    housesDiv.innerHTML = houseHTML;

    // 生成小人
    let peopleHTML = '';
    for (let i = 0; i < displayPeople; i++) {
        const left = (i % 10) * 10 + 2;
        const bottom = Math.floor(i / 10) * 20 + 5;
        peopleHTML += '<div class="v-person" style="left:' + left + '%;bottom:' + bottom + '%;"></div>';
    }
    peopleDiv.innerHTML = peopleHTML;

    // 更新数字
    vHouses.textContent = houses;
    vPop.textContent = population;

    // 添加动画
    housesDiv.style.animation = 'none';
    peopleDiv.style.animation = 'none';
    setTimeout(() => {
        housesDiv.style.animation = 'popIn 0.5s ease';
        peopleDiv.style.animation = 'popIn 0.5s ease 0.2s';
    }, 10);
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

    // 重置示意图
    document.getElementById('visualHouses').innerHTML = '';
    document.getElementById('visualPeople').innerHTML = '';
    document.getElementById('vHouses').textContent = '0';
    document.getElementById('vPop').textContent = '0';
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
