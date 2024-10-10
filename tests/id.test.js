const { shallowMount } = require('@vue/test-utils');
const IdPageComponent = require('./pages/id/index.wxml'); 

describe('Id Page Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IdPageComponent);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render bottom navigation grid correctly', () => {
    const bottomGrid = wrapper.find('van-grid[clickable]');
    expect(bottomGrid.exists()).toBe(true);
    expect(bottomGrid.find('van-grid-item').length).toBe(4);
    bottomGrid.findAll('van-grid-item').forEach((item, index) => {
      if (index === 0) {
        expect(item.find('.text').text()).toBe('首页');
        expect(item.attributes('url')).toBe('/pages/index/index');
      } else if (index === 1) {
        // 对其他导航项进行断言
      }
    });
  });

  it('should render profile icon correctly', () => {
    const profileIcon = wrapper.find('.touxiang');
    expect(profileIcon.exists()).toBe(true);
    expect(profileIcon.attributes('size')).toBe('150px');
    expect(profileIcon.attributes('name')).toBe('https://b.yzcdn.cn/vant/icon-demo-1126.png');
  });

  it('should render personal info labels correctly', () => {
    const editLabel = wrapper.find('.test1');
    expect(editLabel.exists()).toBe(true);
    expect(editLabel.text()).toBe('编辑个人资料');
    const usernameLabel = wrapper.find('.test2');
    expect(usernameLabel.exists()).toBe(true);
    expect(usernameLabel.text()).toBe('用户名');
    // 对其他标签进行类似的断言
  });

  it('should render input fields correctly', () => {
    const usernameField = wrapper.find('.weizhi1 van-field');
    expect(usernameField.exists()).toBe(true);
    expect(usernameField.attributes('placeholder')).toBe('请输入用户名');
    expect(usernameField.attributes('border')).toBe('false');
    // 对其他输入字段进行类似的断言
  });

  it('should render save button correctly', () => {
    const saveIcon = wrapper.find('.mini-button');
    expect(saveIcon.exists()).toBe(true);
    expect(saveIcon.attributes('name')).toBe('certificate');
    expect(saveIcon.attributes('size')).toBe('40px');
    expect(saveIcon.attributes('bind:click')).toBe('tomy');
    expect(saveIcon.attributes('color')).toBe('purple');
    const saveText = wrapper.find('.test_keep');
    expect(saveText.exists()).toBe(true);
    expect(saveText.attributes('bind:tap')).toBe('tomy');
    expect(saveText.text()).toBe('保存');
  });
});