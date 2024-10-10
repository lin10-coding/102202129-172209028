
const { shallowMount } = require('@vue/test-utils');
const YourProjectsPageComponent = require('./yourProjectsPage.wxml'); 

describe('Your Projects Page Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(YourProjectsPageComponent);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render navbar correctly', () => {
    const navbar = wrapper.find('.top van-nav-bar');
    expect(navbar.exists()).toBe(true);
    expect(navbar.attributes('title')).toBe('YourProjects');
    expect(navbar.attributes('left-text')).toBe('返回');
    expect(navbar.attributes('right-text')).toBe('按钮');
    expect(navbar.attributes('left-arrow')).toBeTruthy();
    expect(navbar.attributes('bind:click-left')).toBe('onBack');
    expect(navbar.attributes('bind:click-right')).toBe('onClickRight');
  });

  it('should render search bar correctly', () => {
    const searchBar = wrapper.find('van-search');
    expect(searchBar.exists()).toBe(true);
    expect(searchBar.attributes('value')).toBe(wrapper.vm.value);
    expect(searchBar.attributes('shape')).toBe('round');
    expect(searchBar.attributes('background')).toBe('#D2F3F7');
    expect(searchBar.attributes('placeholder')).toBe('搜索项目关键词');
  });

  it('should render van-cards correctly', () => {
    const cards = wrapper.findAll('van-card');
    expect(cards.length).toBe(3);
    cards.forEach(card => {
      expect(card.attributes('desc')).toBe('xxxxxx');
      expect(card.attributes('title')).toBe('人类复兴计划');
      expect(card.attributes('thumb')).toBe('https://tse3-mm.cn.bing.net/th/id/OIP-C.BsbnwLoTgeNhaZiC1-XUfAHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7');
      const footerButton = card.find('.footer van-button');
      expect(footerButton.exists()).toBe(true);
      expect(footerButton.attributes('size')).toBe('mini');
      expect(footerButton.find('van-icon').attributes('name')).toBe('chat');
      expect(footerButton.find('van-icon').attributes('color')).toBe('grey');
      expect(footerButton.find('van-icon').attributes('size')).toBe('30px');
    });
  });

  it('should render new project cell correctly', () => {
    const newProjectCell = wrapper.find('van-cell[title="新建项目"]');
    expect(newProjectCell.exists()).toBe(true);
    expect(newProjectCell.attributes('is-link')).toBeTruthy();
    expect(newProjectCell.attributes('link-type')).toBe('navigateTo');
    expect(newProjectCell.attributes('url')).toBe('/pages/newproject/index');
    expect(newProjectCell.attributes('size')).toBe('large');
  });

  it('should render more operations cell correctly', () => {
    const moreOpsCell = wrapper.find('van-cell[title="更多操作"]');
    expect(moreOpsCell.exists()).toBe(true);
    expect(moreOpsCell.attributes('bind:click')).toBe('onClick');
    expect(moreOpsCell.attributes('size')).toBe('large');
  });

  it('should render share sheet correctly', () => {
    const shareSheet = wrapper.find('van-share-sheet');
    expect(shareSheet.exists()).toBe(true);
    expect(shareSheet.attributes('show')).toBe(wrapper.vm.showShare);
    expect(shareSheet.attributes('title')).toBe('更多操作');
    expect(shareSheet.attributes('options')).toBe(wrapper.vm.options);
    expect(shareSheet.attributes('bind:select')).toBe('onSelect');
    expect(shareSheet.attributes('bind:close')).toBe('onClose');
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
});