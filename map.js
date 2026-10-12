// 时空地图

// 遗址数据
const sites = [
    // 仰韶文化
    { name: '半坡遗址', lat: 34.28, lng: 109.05, culture: '仰韶文化', period: 0, color: '#E57373', desc: '面积约50000㎡，发现房屋200余座' },
    { name: '姜寨遗址', lat: 34.38, lng: 109.12, culture: '仰韶文化', period: 1, color: '#E57373', desc: '面积约19000㎡，房屋100余座，环壕聚落' },
    { name: '庙底沟遗址', lat: 34.80, lng: 111.20, culture: '仰韶文化', period: 2, color: '#E57373', desc: '仰韶文化庙底沟类型命名地' },
    { name: '大河村遗址', lat: 34.80, lng: 113.65, culture: '仰韶文化', period: 2, color: '#E57373', desc: '发现连间房屋，仰韶向龙山过渡' },

    // 龙山文化
    { name: '城子崖遗址', lat: 36.45, lng: 117.35, culture: '龙山文化', period: 3, color: '#81C784', desc: '中国首个发现龙山文化的遗址' },
    { name: '陶寺遗址', lat: 35.88, lng: 111.50, culture: '龙山文化', period: 3, color: '#81C784', desc: '大型城址，可能为尧都' },
    { name: '石峁遗址', lat: 38.30, lng: 110.20, culture: '龙山文化', period: 4, color: '#81C784', desc: '史前最大石城，面积约400万㎡' },

    // 良渚文化
    { name: '良渚古城', lat: 30.42, lng: 119.98, culture: '良渚文化', period: 4, color: '#64B5F6', desc: '大型水利系统，面积约300万㎡' },
    { name: '玉架山遗址', lat: 30.45, lng: 120.25, culture: '良渚文化', period: 3, color: '#64B5F6', desc: '环壕聚落，浙江省首座专题考古博物馆' },

    // 大汶口文化
    { name: '大汶口遗址', lat: 35.95, lng: 117.05, culture: '大汶口文化', period: 2, color: '#FFB74D', desc: '大汶口文化命名地' },
    { name: '花厅遗址', lat: 34.60, lng: 118.35, culture: '大汶口文化', period: 3, color: '#FFB74D', desc: '大汶口与良渚文化交流的见证' },

    // 河姆渡文化
    { name: '河姆渡遗址', lat: 29.95, lng: 121.48, culture: '河姆渡文化', period: 1, color: '#BA68C8', desc: '干栏式建筑，稻作农业起源地' },
    { name: '跨湖桥遗址', lat: 30.15, lng: 120.25, culture: '跨湖桥文化', period: 0, color: '#BA68C8', desc: '距今约8000年，最早的独木舟' },
];

const periodLabels = ['公元前7000年', '公元前6000年', '公元前5000年', '公元前4000年', '公元前3000年'];

let map;
let markers = [];

function initMap() {
    // 初始化地图，中心定位在中国中部
    map = L.map('map').setView([35.0, 110.0], 5);

    // 添加底图
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 10
    }).addTo(map);

    // 初始显示所有遗址
    updateMap();
}

function updateMap() {
    const period = parseInt(document.getElementById('timeline').value);
    document.getElementById('yearLabel').textContent = periodLabels[period];

    // 清除旧标记
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    // 显示当前时期及之前的遗址
    sites.forEach(site => {
        if (site.period <= period) {
            const marker = L.circleMarker([site.lat, site.lng], {
                radius: 10,
                fillColor: site.color,
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map);

            // 弹出信息
            marker.bindPopup(`
                <div style="font-family:sans-serif;min-width:200px">
                    <h4 style="margin:0 0 8px 0;color:#1a237e">${site.name}</h4>
                    <p style="margin:4px 0;font-size:13px"><strong>文化：</strong>${site.culture}</p>
                    <p style="margin:4px 0;font-size:13px"><strong>年代：</strong>${periodLabels[site.period]}</p>
                    <p style="margin:4px 0;font-size:12px;color:#666">${site.desc}</p>
                </div>
            `);

            // 点击显示详情
            marker.on('click', function() {
                showSiteInfo(site);
            });

            markers.push(marker);
        }
    });
}

function showSiteInfo(site) {
    const infoDiv = document.getElementById('siteInfo');
    infoDiv.innerHTML = `
        <h3>${site.name}</h3>
        <p><strong>文化类型：</strong>${site.culture}</p>
        <p><strong>年代：</strong>${periodLabels[site.period]}</p>
        <p><strong>简介：</strong>${site.desc}</p>
        <p style="color:#78909c;font-size:13px;margin-top:10px">点击地图上的其他遗址点查看更多信息</p>
    `;
    infoDiv.style.textAlign = 'left';
    infoDiv.style.color = '#333';
}

// 页面加载完成后初始化地图
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('map')) {
        initMap();
    }
});
