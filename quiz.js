// 考古知识测验

const questionBank = {
    easy: [
        {q: "姜寨遗址属于哪个考古学文化？", options: ["龙山文化", "仰韶文化", "良渚文化", "大汶口文化"], answer: 1, explain: "姜寨遗址是仰韶文化半坡类型的典型代表，位于陕西临潼。"},
        {q: "半地穴式房屋主要流行于哪个时期？", options: ["商周时期", "新石器时代", "秦汉时期", "明清时期"], answer: 1, explain: "半地穴式房屋是新石器时代黄河流域常见的建筑形式。"},
        {q: "良渚古城位于哪个省份？", options: ["河南省", "陕西省", "浙江省", "山东省"], answer: 2, explain: "良渚古城位于浙江省杭州市余杭区，2019年列入世界文化遗产。"},
        {q: "下列哪个遗址以水稻种植闻名？", options: ["半坡遗址", "河姆渡遗址", "陶寺遗址", "石峁遗址"], answer: 1, explain: "河姆渡遗址发现了大量人工栽培稻遗存，是稻作农业起源地之一。"},
        {q: "彩陶艺术最发达的是哪个文化？", options: ["仰韶文化", "龙山文化", "红山文化", "良渚文化"], answer: 0, explain: "仰韶文化以精美的彩陶著称，如人面鱼纹盆、花瓣纹盆。"},
        {q: "史前聚落常见的防御设施是什么？", options: ["城墙", "环壕", "烽火台", "护城河"], answer: 1, explain: "环壕是史前聚落常见的防御和排水设施，如姜寨遗址就有完整的环壕系统。"},
        {q: "下列哪个遗址发现了最早的独木舟？", options: ["跨湖桥遗址", "良渚古城", "陶寺遗址", "城子崖遗址"], answer: 0, explain: "跨湖桥遗址出土了中国最早的独木舟，距今约8000年。"},
        {q: "龙山文化以什么器物最具特色？", options: ["彩陶", "黑陶", "玉器", "青铜器"], answer: 1, explain: "龙山文化以蛋壳黑陶著称，胎薄如纸，是制陶技术的巅峰之作。"},
        {q: "下列哪个遗址被称为尧都？", options: ["石峁遗址", "陶寺遗址", "良渚古城", "二里头遗址"], answer: 1, explain: "陶寺遗址发现了大型城址、观象台和礼乐器物，有学者认为可能是尧都平阳。"},
        {q: "新石器时代的主要生产工具是？", options: ["铁器", "青铜器", "石器", "骨器"], answer: 2, explain: "新石器时代以磨制石器为主要生产工具，故名新石器时代。"}
    ],
    medium: [
        {q: "Naroll法估算人口的公式是什么？", options: ["人口=房屋数x6", "人口=房屋面积x0.1", "人口=总面积/人均面积", "人口=房屋数x面积"], answer: 1, explain: "Naroll法由人类学家Naroll提出，公式为：人口=房屋地板面积x0.1。"},
        {q: "姜寨聚落的房屋布局呈现什么特征？", options: ["线性排列", "向心式布局", "棋盘式布局", "随机分布"], answer: 1, explain: "姜寨遗址五个房屋群围绕中央广场呈向心式布局，反映了氏族社会的组织结构。"},
        {q: "良渚古城的水利系统主要包括什么？", options: ["灌溉渠", "水坝和堤塘", "水井", "运河"], answer: 1, explain: "良渚古城外围有11条水坝组成的水利系统，用于防洪和运输。"},
        {q: "Kramer法估算史前聚落人口时，通常按每户几人计算？", options: ["3人", "4人", "5人", "6人"], answer: 3, explain: "Kramer法假设每座房屋居住6人，公式为：人口=房屋数x6。"},
        {q: "下列哪个遗址发现了大型木构建筑？", options: ["鸡叫城遗址", "半坡遗址", "姜寨遗址", "庙底沟遗址"], answer: 0, explain: "湖南鸡叫城遗址发现了F63大型木构建筑，距今约4700年。"},
        {q: "考古学上探方的标准尺寸通常是？", options: ["2x2米", "5x5米", "10x10米", "1x1米"], answer: 1, explain: "标准探方通常为5x5米，是田野考古发掘的基本工作单位。"},
        {q: "石峁遗址的石城面积大约是多少？", options: ["100万平方米", "200万平方米", "400万平方米", "600万平方米"], answer: 2, explain: "石峁遗址面积约400万平方米，是中国史前最大的石城遗址。"},
        {q: "仰韶文化向龙山文化的过渡，在考古学上被称为什么？", options: ["铜石并用时代", "早期青铜时代", "新石器晚期", "仰韶龙山过渡期"], answer: 3, explain: "仰韶文化晚期到龙山文化早期被称为仰韶龙山过渡期，代表了中国史前社会的重大变革。"},
        {q: "下列哪种墓葬形式常见于仰韶文化？", options: ["土坑竖穴墓", "瓮棺葬", "石棺墓", "洞室墓"], answer: 1, explain: "瓮棺葬是仰韶文化特有的葬俗，用陶瓮作为葬具埋葬婴幼儿。"},
        {q: "考古地层学的基本原理是？", options: ["年代越早的地层越深", "年代越早的地层越浅", "地层年代与深浅无关", "最上层年代最早"], answer: 0, explain: "考古地层学的基本原理是叠压关系：在没有扰动的情况下，越深的地层年代越早。"}
    ],
    hard: [
        {q: "王妙发在《考古地理论集》中提出的聚落人口估算方法，主要基于什么理论？", options: ["中心地理论", "遗址域分析", "民族志类比", "GIS空间分析"], answer: 1, explain: "王妙发主要运用遗址域（Site Catchment Analysis）分析方法，结合聚落面积和周边环境推算人口。"},
        {q: "姜寨遗址的F1大房屋面积约多少平方米？", options: ["50平方米", "80平方米", "120平方米", "160平方米"], answer: 2, explain: "姜寨遗址F1大房屋面积约120平方米，可能是氏族公共活动场所。"},
        {q: "良渚文化的玉琮上常见的神人兽面纹，学术界普遍认为代表什么？", options: ["图腾崇拜", "祖先崇拜", "自然崇拜", "王权神权结合"], answer: 3, explain: "神人兽面纹被认为是良渚社会王权与神权结合的象征，反映了早期国家的形成。"},
        {q: "在聚落考古中，遗址域（Site Catchment）分析主要研究什么？", options: ["遗址内部布局", "遗址与周边资源的关系", "遗址的年代序列", "遗址的防御体系"], answer: 1, explain: "遗址域分析研究遗址居民日常活动范围（通常步行1-2小时）内的资源获取与利用模式。"},
        {q: "陶寺遗址的观象台可以观测多少个节气？", options: ["12个", "20个", "24个", "36个"], answer: 1, explain: "陶寺观象台通过12道缝隙可以观测20个节令，是目前发现最早的观象授时建筑。"},
        {q: "石峁遗址的皇城台发现了什么特殊建筑遗迹？", options: ["大型宫殿", "祭祀坑", "石雕人面像", "青铜作坊"], answer: 2, explain: "石峁皇城台发现了大量石雕人面像，可能与宗教祭祀或权力象征有关。"},
        {q: "下列哪位学者提出了大房子理论来解释史前聚落的社会组织？", options: ["张光直", "苏秉琦", "严文明", "俞伟超"], answer: 2, explain: "严文明先生通过对仰韶文化聚落的研究，提出了以大房屋为中心的氏族社会组织理论。"},
        {q: "在考古人口学中，人均居住面积的取值范围通常是多少？", options: ["3-5平方米", "6-10平方米", "12-15平方米", "20-30平方米"], answer: 1, explain: "考古学中常用的人均居住面积参考值为6-10平方米/人，基于民族志类比得出。"},
        {q: "良渚古城的莫角山宫殿区面积约多少？", options: ["10万平方米", "20万平方米", "30万平方米", "50万平方米"], answer: 2, explain: "莫角山宫殿区面积约30万平方米，是良渚古城的核心区域，发现了大型建筑基址。"},
        {q: "下列哪种方法不是聚落人口估算的常用方法？", options: ["Naroll法", "Kramer法", "碳十四测年法", "面积密度法"], answer: 2, explain: "碳十四测年法是年代测定方法，不是人口估算方法。人口估算常用Naroll法、Kramer法和面积密度法。"}
    ]
};

let currentDifficulty = '';
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let score = 0;
let startTime = 0;
let endTime = 0;

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    currentQuestions = questionBank[difficulty].slice();
    currentIndex = 0;
    userAnswers = [];
    score = 0;
    startTime = Date.now();

    var ds = document.getElementById('difficultySelect');
    var qa = document.getElementById('quizArea');
    var ra = document.getElementById('resultArea');

    if (ds) ds.style.display = 'none';
    if (qa) qa.style.display = 'block';
    if (ra) ra.style.display = 'none';

    var tq = document.getElementById('totalQ');
    if (tq) tq.textContent = currentQuestions.length;

    showQuestion();
}

function showQuestion() {
    var q = currentQuestions[currentIndex];
    var cq = document.getElementById('currentQ');
    var qt = document.getElementById('questionText');
    var od = document.getElementById('options');

    if (cq) cq.textContent = currentIndex + 1;
    if (qt) qt.textContent = (currentIndex + 1) + '. ' + q.q;

    if (od) {
        od.innerHTML = '';
        for (var i = 0; i < q.options.length; i++) {
            var btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = String.fromCharCode(65 + i) + '. ' + q.options[i];
            btn.onclick = (function(idx) {
                return function() { selectAnswer(idx); };
            })(i);

            if (userAnswers[currentIndex] === i) {
                btn.classList.add('selected');
            }

            od.appendChild(btn);
        }
    }

    var progress = ((currentIndex + 1) / currentQuestions.length) * 100;
    var qp = document.getElementById('quizProgress');
    if (qp) qp.style.width = progress + '%';

    var bp = document.getElementById('btnPrev');
    var bn = document.getElementById('btnNext');
    var bs = document.getElementById('btnSubmit');

    if (bp) bp.style.display = currentIndex > 0 ? 'inline-block' : 'none';

    if (currentIndex === currentQuestions.length - 1) {
        if (bn) bn.style.display = 'none';
        if (bs) bs.style.display = 'inline-block';
    } else {
        if (bn) bn.style.display = 'inline-block';
        if (bs) bs.style.display = 'none';
    }
}

function selectAnswer(index) {
    userAnswers[currentIndex] = index;

    var buttons = document.querySelectorAll('.option-btn');
    for (var i = 0; i < buttons.length; i++) {
        if (i === index) {
            buttons[i].classList.add('selected');
        } else {
            buttons[i].classList.remove('selected');
        }
    }
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        showQuestion();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
    }
}

function submitQuiz() {
    endTime = Date.now();
    score = 0;

    for (var i = 0; i < currentQuestions.length; i++) {
        if (userAnswers[i] === currentQuestions[i].answer) score++;
    }

    var qa = document.getElementById('quizArea');
    var ra = document.getElementById('resultArea');

    if (qa) qa.style.display = 'none';
    if (ra) ra.style.display = 'block';

    var sn = document.getElementById('scoreNum');
    if (sn) sn.textContent = score;

    var st = document.getElementById('scoreText');
    var text = '';
    if (score >= 9) text = '太厉害了！考古学家的潜质！';
    else if (score >= 7) text = '很不错！对史前聚落有深入了解！';
    else if (score >= 5) text = '还可以，继续加油！';
    else text = '别灰心，去首页多学习一下再来挑战！';
    if (st) st.textContent = text;

    var rd = document.getElementById('resultDetail');
    if (rd) {
        var html = '<h4>答案解析</h4>';
        for (var i = 0; i < currentQuestions.length; i++) {
            var isCorrect = userAnswers[i] === currentQuestions[i].answer;
            var userAns = userAnswers[i] !== undefined ? currentQuestions[i].options[userAnswers[i]] : '未作答';
            var correctAns = currentQuestions[i].options[currentQuestions[i].answer];

            html += '<div class="result-item ' + (isCorrect ? 'correct' : 'wrong') + '">';
            html += '<p><strong>' + (i+1) + '. ' + currentQuestions[i].q + '</strong></p>';
            html += '<p>你的答案：' + userAns + ' ' + (isCorrect ? '✓' : '✗') + '</p>';
            if (!isCorrect) html += '<p>正确答案：' + correctAns + '</p>';
            html += '<p class="explain">💡 ' + currentQuestions[i].explain + '</p>';
            html += '</div>';
        }
        rd.innerHTML = html;
    }
}

function saveScore() {
    var nickname = prompt('请输入你的昵称（2-10个字符）：') || '匿名用户';
    var timeUsed = Math.round((endTime - startTime) / 1000);
    var minutes = Math.floor(timeUsed / 60);
    var seconds = timeUsed % 60;

    var record = {
        name: nickname.substring(0, 10),
        score: score,
        time: minutes + '分' + seconds + '秒',
        date: new Date().toLocaleString('zh-CN'),
        difficulty: currentDifficulty
    };

    var leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    leaderboard.push(record);
    leaderboard.sort(function(a, b) {
        if (b.score !== a.score) return b.score - a.score;
        return a.time.localeCompare(b.time);
    });
    leaderboard = leaderboard.slice(0, 20);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    alert('成绩已保存！');
    showLeaderboard(currentDifficulty);
}

function restartQuiz() {
    var ra = document.getElementById('resultArea');
    var ds = document.getElementById('difficultySelect');
    if (ra) ra.style.display = 'none';
    if (ds) ds.style.display = 'block';
}

function showLeaderboard(difficulty) {
    var tabs = document.querySelectorAll('.leaderboard-tabs .tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    var tabIndex = difficulty === 'easy' ? 0 : difficulty === 'medium' ? 1 : 2;
    if (tabs[tabIndex]) tabs[tabIndex].classList.add('active');

    var leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    var filtered = [];
    for (var i = 0; i < leaderboard.length; i++) {
        if (leaderboard[i].difficulty === difficulty) filtered.push(leaderboard[i]);
    }

    var table = document.getElementById('leaderboardTable');
    if (table) {
        var html = '<tr><th>排名</th><th>昵称</th><th>得分</th><th>用时</th><th>时间</th></tr>';

        if (filtered.length === 0) {
            html += '<tr><td colspan="5" style="text-align:center;color:#8b7355;padding:20px;">暂无记录，快来挑战吧！</td></tr>';
        } else {
            for (var i = 0; i < filtered.length; i++) {
                var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1);
                html += '<tr><td>' + medal + '</td><td>' + filtered[i].name + '</td><td><strong>' + filtered[i].score + '/10</strong></td><td>' + filtered[i].time + '</td><td>' + filtered[i].date + '</td></tr>';
            }
        }
        table.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showLeaderboard('easy');
});
