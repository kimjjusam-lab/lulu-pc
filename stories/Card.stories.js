/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
};
export default meta;

export const GameCard = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'grid';
    div.style.gridTemplateColumns = 'repeat(auto-fill, minmax(160px, 1fr))';
    div.style.gap = '16px';
    div.style.maxWidth = '600px';

    const games = [
      { name: '홀덤', desc: '텍사스 홀덤의 정석', img: 'images/game_holdem.png' },
      { name: '오마하', desc: '4장 카드로 승부', img: 'images/game_72.png', coming: true },
    ];

    games.forEach(g => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.style.cursor = 'pointer';
      card.innerHTML = `
        <div class="game-card-visual">
          <div class="card-visual-glow"></div>
          <div class="card-visual-icon"><img src="${g.img}" alt="${g.name}" style="width:100px;height:100px;object-fit:contain;"></div>
        </div>
        <div class="game-card-info">
          <div class="game-card-name">${g.name}</div>
          <div class="game-card-desc">${g.desc}</div>
        </div>
        ${g.coming ? '<span class="coming-badge">오픈 준비 중</span>' : ''}
      `;
      div.appendChild(card);
    });
    return div;
  },
};

export const TableCard = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '320px';
    div.innerHTML = `
      <div class="table-card">
        <div class="table-header">
          <span class="table-name">홀덤</span>
          <span class="table-live"><span class="table-live-dot"></span> LIVE</span>
        </div>
        <div class="table-meta">
          <div class="table-meta-row"><span class="table-meta-label">블라인드</span><span class="table-meta-value">10/20</span></div>
          <div class="table-meta-row"><span class="table-meta-label">플레이어</span><span class="table-meta-value">4/9</span></div>
          <div class="table-meta-row"><span class="table-meta-label">스택</span><span class="table-meta-value">32,450</span></div>
        </div>
        <button class="table-join-btn">입장하기</button>
      </div>
    `;
    return div;
  },
};

export const StatCard = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'grid';
    div.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    div.style.gap = '16px';
    div.style.maxWidth = '700px';

    const stats = [
      { value: '128', label: '참가 경기 수', img: 'images/stat_games.png' },
      { value: '42회', label: '1위 횟수', img: 'images/stat_winrate.png' },
      { value: '1,250억', label: '총 상금', img: 'images/stat_profit.png' },
    ];

    stats.forEach(s => {
      const card = document.createElement('div');
      card.className = 'stat-card';
      card.style.cursor = 'pointer';
      card.innerHTML = `
        <div class="stat-icon"><img src="${s.img}" alt="" style="width:44px;height:44px;object-fit:contain;"></div>
        <div class="stat-info"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>
      `;
      div.appendChild(card);
    });
    return div;
  },
};

export const PackageCard = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '300px';
    div.innerHTML = `
      <div class="pkg-card pkg-tier-a">
        <div class="pkg-image" style="display:flex;align-items:center;justify-content:center;min-height:160px;">
          <img src="images/shop_a.png" alt="Package A" style="max-height:120px;object-fit:contain;">
        </div>
        <div class="pkg-body">
          <div class="pkg-name">스타터 패키지 A</div>
          <ul class="pkg-contents">
            <li><span class="pkg-icon"><img src="images/shop_avatar.png" alt="" style="width:20px;height:20px;"></span><span>아바타 A (15일)</span></li>
            <li><span class="pkg-icon"><img src="images/icon_gold.png" alt="" style="width:20px;height:20px;"></span><span>5억 골드</span></li>
          </ul>
          <div class="pkg-bottom">
            <div class="pkg-price">₩1,000</div>
            <button class="pkg-buy-btn">구매하기</button>
          </div>
        </div>
      </div>
    `;
    return div;
  },
};
