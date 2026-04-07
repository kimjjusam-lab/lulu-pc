/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
};
export default meta;

function addTabInteraction(container, tabClass) {
  container.querySelectorAll(`.${tabClass}`).forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll(`.${tabClass}`).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

export const ShopTabs = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '500px';
    div.innerHTML = `
      <div class="shop-tabs" style="position:static;">
        <button class="shop-tab active">추천 상품</button>
        <button class="shop-tab">보석</button>
        <button class="shop-tab">아바타</button>
        <button class="shop-tab">아이템</button>
      </div>
    `;
    addTabInteraction(div, 'shop-tab');
    return div;
  },
};

export const TournamentTabs = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '500px';
    div.innerHTML = `
      <div class="tn-tabs" style="position:static;">
        <button class="tn-tab active">전체</button>
        <button class="tn-tab">이벤트A</button>
        <button class="tn-tab">이벤트B</button>
        <button class="tn-tab">이벤트C</button>
      </div>
    `;
    addTabInteraction(div, 'tn-tab');
    return div;
  },
};

export const SegmentButtons = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '8px';
    div.innerHTML = `
      <button class="gs-segment-btn active">일반</button>
      <button class="gs-segment-btn">프로</button>
      <button class="gs-segment-btn">VIP</button>
    `;
    div.querySelectorAll('.gs-segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        div.querySelectorAll('.gs-segment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    return div;
  },
};
