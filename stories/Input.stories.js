/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    type: { control: 'select', options: ['text', 'password', 'email'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;

export const TextInput = {
  args: { placeholder: '포커룰루 아이디', type: 'text', disabled: false },
  render: ({ placeholder, type, disabled }) => {
    const input = document.createElement('input');
    input.type = type;
    input.className = 'login-input';
    input.placeholder = placeholder;
    input.disabled = disabled;
    input.style.maxWidth = '360px';
    return input;
  },
};

export const PasswordInput = {
  args: { placeholder: '비밀번호', type: 'password' },
  render: ({ placeholder, type }) => {
    const input = document.createElement('input');
    input.type = type;
    input.className = 'login-input';
    input.placeholder = placeholder;
    input.style.maxWidth = '360px';
    return input;
  },
};

export const Select = {
  render: () => {
    const select = document.createElement('select');
    select.className = 'login-input';
    select.style.maxWidth = '360px';
    ['Level 5', 'Level 6', 'Level 7', 'Level 8', 'Level 9'].forEach((text, i) => {
      const opt = document.createElement('option');
      opt.textContent = text;
      if (i === 2) opt.selected = true;
      select.appendChild(opt);
    });
    return select;
  },
};

export const DateRange = {
  render: () => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '8px';
    div.style.alignItems = 'center';
    div.style.maxWidth = '500px';
    div.innerHTML = `
      <input type="date" class="date-input" value="2026-04-01">
      <span style="color:var(--text-muted);">~</span>
      <input type="date" class="date-input" value="2026-04-07">
      <button class="date-range-btn">조회</button>
    `;
    return div;
  },
};

export const LoginForm = {
  render: () => {
    const div = document.createElement('div');
    div.style.maxWidth = '360px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.gap = '12px';
    div.innerHTML = `
      <input type="text" class="login-input" placeholder="포커룰루 아이디">
      <input type="password" class="login-input" placeholder="비밀번호">
      <button class="login-btn" style="width:100%;">로그인</button>
    `;
    return div;
  },
};
