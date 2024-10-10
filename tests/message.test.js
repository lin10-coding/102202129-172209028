const { mount } = require('@vue/test-utils');
const PageComponent = require('./page.wxml'); 

describe('Page Component', () => {
  it('should render van-grid at top correctly', () => {
    const wrapper = mount(PageComponent);
    const topGrid = wrapper.find('.container van-grid');
    expect(topGrid.exists()).toBe(true);
    expect(topGrid.find('van-grid-item').length).toBe(3);
  });

  it('should render van-cards correctly', () => {
    const wrapper = mount(PageComponent);
    const cards = wrapper.findAll('.main van-card');
    expect(cards.length).toBe(4);
    cards.forEach((card, index) => {
      expect(card.find('van-icon[name="chat"]').exists()).toBe(true);
      // 根据不同的卡片索引进行不同的断言
      if (index === 0) {
        expect(card.find('.tag').text()).toBe('3条未读 ');
        expect(card.find('.desc').text()).toBe('软工作业好难');
        expect(card.find('.title').text()).toBe('好友A');
      } else if (index === 1) {
        // 对第二个卡片进行断言
      } // 以此类推对其他卡片进行断言
    });
  });

  it('should render bottom van-grid correctly', () => {
    const wrapper = mount(PageComponent);
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
});