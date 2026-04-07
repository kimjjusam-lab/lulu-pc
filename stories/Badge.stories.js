/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['hot', 'sale', 'vip'],
    },
  },
};
export default meta;

export const ShopTagHot = {
  render: () => {
    const span = document.createElement('span');
    span.className = 'shop-item-tag hot';
    span.textContent = 'HOT';
    return span;
  },
};

export const ShopTagSale = {
  render: () => {
    const span = document.createElement('span');
    span.className = 'shop-item-tag sale';
    span.textContent = 'SALE';
    return span;
  },
};

export const ShopTagVip = {
  render: () => {
    const span = document.createElement('span');
    span.className = 'shop-item-tag vip';
    span.textContent = 'BEST';
    return span;
  },
};

export const AllShopTags = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '10px';
    div.style.alignItems = 'center';
    ['hot:HOT', 'sale:SALE', 'vip:BEST'].forEach(item => {
      const [cls, text] = item.split(':');
      const span = document.createElement('span');
      span.className = `shop-item-tag ${cls}`;
      span.textContent = text;
      div.appendChild(span);
    });
    return div;
  },
};

export const ComingBadge = {
  render: () => {
    const span = document.createElement('span');
    span.className = 'coming-badge';
    span.textContent = '오픈 준비 중';
    return span;
  },
};

export const TournamentBadges = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '10px';
    div.style.alignItems = 'center';
    [['registering', '참가 접수중'], ['ongoing', '진행중'], ['finished', '종료']].forEach(([cls, text]) => {
      const span = document.createElement('span');
      span.className = `tn-badge ${cls}`;
      span.textContent = text;
      div.appendChild(span);
    });
    return div;
  },
};

export const LiveIndicator = {
  render: () => {
    const span = document.createElement('span');
    span.className = 'table-live';
    span.innerHTML = '<span class="table-live-dot"></span> LIVE';
    return span;
  },
};
