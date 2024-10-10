
const { shallowMount } = require('@vue/test-utils');
const LoginPageComponent = require('./loginPage.wxml'); 

describe('Login Page Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LoginPageComponent);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render login title correctly', () => {
    const loginTitle = wrapper.find('.container view:nth-child(2)');
    expect(loginTitle.text()).toBe('login');
    expect(loginTitle.element.style.fontSize).toBe('50px');
    expect(loginTitle.element.style.fontWeight).toBe('bold');
  });

  it('should render welcome message correctly', () => {
    const welcomeMessage = wrapper.find('.container view:nth-child(3)');
    expect(welcomeMessage.text()).toBe('Welcome to JZhero-1.0');
    expect(welcomeMessage.element.style.fontSize).toBe('30px');
    expect(welcomeMessage.element.style.fontWeight).toBe('bold');
  });

  it('should render username input field correctly', () => {
    const usernameField = wrapper.find('.container van-cell-group:nth-child(4) van-field');
    expect(usernameField.exists()).toBe(true);
    expect(usernameField.attributes('placeholder')).toBe('请输入用户名');
    expect(usernameField.attributes('border')).toBe('false');
  });

  it('should render password input field correctly', () => {
    const passwordField = wrapper.find('.container van-cell-group:nth-child(5) van-field');
    expect(passwordField.exists()).toBe(true);
    expect(passwordField.attributes('placeholder')).toBe('请输入密码');
    expect(passwordField.attributes('border')).toBe('false');
  });

  it('should render login button correctly', () => {
    const loginButton = wrapper.find('.auth-container.login-button');
    expect(loginButton.exists()).toBe(true);
    expect(loginButton.text()).toBe('登录');
  });

  it('should render register button correctly', () => {
    const registerButton = wrapper.find('.auth-container.register-button');
    expect(registerButton.exists()).toBe(true);
    expect(registerButton.text()).toBe('注册');
  });

  it('should render wechat icon correctly', () => {
    const wechatIcon = wrapper.find('.auth-container van-icon');
    expect(wechatIcon.exists()).toBe(true);
    expect(wechatIcon.attributes('name')).toBe('wechat');
    expect(wechatIcon.attributes('size')).toBe('50px');
  });
});