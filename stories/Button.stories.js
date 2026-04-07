/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '버튼 텍스트' },
    variant: {
      control: 'select',
      options: ['login-btn', 'pkg-buy-btn', 'table-join-btn', 'td-register-btn', 'shop-buy-btn', 'modal-apply-btn', 'sp-cancel-btn', 'sp-confirm-btn', 'date-range-btn'],
      description: '버튼 스타일 클래스',
    },
    fullWidth: { control: 'boolean', description: '전체 너비' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

function createButton({ variant = 'login-btn', label = '버튼', fullWidth = false, disabled = false }) {
  const btn = document.createElement('button');
  btn.className = variant;
  btn.textContent = label;
  if (fullWidth) { btn.style.width = '100%'; btn.style.display = 'block'; }
  if (disabled) { btn.disabled = true; btn.style.opacity = '0.5'; btn.style.pointerEvents = 'none'; }
  btn.style.position = 'static';
  return btn;
}

export const Primary = {
  args: { variant: 'login-btn', label: '로그인' },
  render: (args) => createButton(args),
};

export const Buy = {
  args: { variant: 'pkg-buy-btn', label: '구매하기' },
  render: (args) => createButton(args),
};

export const Join = {
  args: { variant: 'table-join-btn', label: '입장하기' },
  render: (args) => createButton(args),
};

export const Register = {
  args: { variant: 'td-register-btn', label: '참가 신청' },
  render: (args) => createButton(args),
};

export const ShopBuy = {
  args: { variant: 'shop-buy-btn', label: '구매' },
  render: (args) => createButton(args),
};

export const Cancel = {
  args: { variant: 'sp-cancel-btn', label: '취소' },
  render: (args) => createButton(args),
};

export const Confirm = {
  args: { variant: 'sp-confirm-btn', label: '구매' },
  render: (args) => createButton(args),
};

export const FullWidth = {
  args: { variant: 'modal-apply-btn', label: '저장', fullWidth: true },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '400px';
    wrapper.appendChild(createButton(args));
    return wrapper;
  },
};

export const DateRange = {
  args: { variant: 'date-range-btn', label: '조회' },
  render: (args) => createButton(args),
};

export const AllVariants = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '12px';
    div.style.flexWrap = 'wrap';
    div.style.alignItems = 'center';
    const variants = [
      ['login-btn', '로그인'],
      ['pkg-buy-btn', '구매하기'],
      ['table-join-btn', '입장하기'],
      ['td-register-btn', '참가 신청'],
      ['shop-buy-btn', '구매'],
      ['sp-cancel-btn', '취소'],
      ['sp-confirm-btn', '확인'],
      ['date-range-btn', '조회'],
    ];
    variants.forEach(([cls, text]) => {
      const btn = document.createElement('button');
      btn.className = cls;
      btn.textContent = text;
      btn.style.position = 'static';
      div.appendChild(btn);
    });
    return div;
  },
};
