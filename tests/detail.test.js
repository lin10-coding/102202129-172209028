const { shallowMount } = require('@vue/test-utils');
const PageComponent = require('./page.wxml'); 

describe('Page Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PageComponent);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render navbar correctly', () => {
    const navbar = wrapper.find('.top van-nav-bar');
    expect(navbar.exists()).toBe(true);
    expect(navbar.attributes('title')).toBe('YourProject');
    expect(navbar.attributes('left-text')).toBe('返回');
    expect(navbar.attributes('right-text')).toBe('按钮');
    expect(navbar.attributes('left-arrow')).toBeTruthy();
    expect(navbar.attributes('bind:click-left')).toBe('onBack');
    expect(navbar.attributes('bind:click-right')).toBe('onClickRight');
  });

  it('should render progress circle correctly', () => {
    const progressCircle = wrapper.find('.main van-circle');
    expect(progressCircle.exists()).toBe(true);
    expect(progressCircle.attributes('value')).toBe('66');
    expect(progressCircle.attributes('text')).toBe('进度:');
    expect(progressCircle.attributes('stroke-width')).toBe('6');
    expect(progressCircle.attributes('layer-color')).toBe('#DEDADA');
  });

  it('should render skeleton correctly', () => {
    const skeleton = wrapper.find('.main van-skeleton');
    expect(skeleton.exists()).toBe(true);
    expect(skeleton.attributes('title')).toBeTruthy();
    expect(skeleton.attributes('avatar')).toBeTruthy();
    expect(skeleton.attributes('row')).toBe('3');
    expect(skeleton.attributes('loading')).toBe('true');
  });

  it('should render steps correctly', () => {
    const steps = wrapper.find('.main van-steps');
    expect(steps.exists()).toBe(true);
    // 可以根据实际情况对 steps 的属性进行进一步断言
  });

  it('should render van-card correctly', () => {
    const card = wrapper.find('.main van-card');
    expect(card.exists()).toBe(true);
    expect(card.attributes('desc')).toBe('聊天群组');
    expect(card.attributes('title')).toBe('人类复兴计划');
    expect(card.attributes('thumb')).toBe('https://tse3-mm.cn.bing.net/th/id/OIP-C.BsbnwLoTgeNhaZiC1-XUfAHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7');
    const footerButton = card.find('.footer van-button');
    expect(footerButton.exists()).toBe(true);
    expect(footerButton.attributes('size')).toBe('mini');
    expect(footerButton.find('van-icon').attributes('name')).toBe('chat');
    expect(footerButton.find('van-icon').attributes('color')).toBe('grey');
    expect(footerButton.find('van-icon').attributes('size')).toBe('30px');
  });

  it('should render van-cells correctly', () => {
    const cells = wrapper.findAll('.main van-cell');
    expect(cells.length).toBe(4);
    cells.forEach((cell, index) => {
      expect(cell.attributes('is-link')).toBeTruthy();
      expect(cell.attributes('link-type')).toBe('navigateTo');
      expect(cell.attributes('url')).toBe('/pages/dashboard/index');
      expect(cell.attributes('size')).toBe('large');
      if (index === 0) {
        expect(cell.attributes('title')).toBe('项目成员');
      } else if (index === 1) {
        expect(cell.attributes('title')).toBe('项目情况');
      } else if (index === 2) {
        expect(cell.attributes('title')).toBe('项目文件');
      } else if (index === 3) {
        expect(cell.attributes('title')).toBe('项目代码');
      }
    });
  });
});