
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

  it('should render search bar correctly', () => {
    const searchBar = wrapper.find('.container van-search');
    expect(searchBar.exists()).toBe(true);
    expect(searchBar.attributes('placeholder')).toBe('请输入搜索关键词');
    expect(searchBar.attributes('show-action')).toBeTruthy();
    expect(searchBar.attributes('bind:search')).toBe('onSearch');
    expect(searchBar.attributes('bind:cancel')).toBe('onCancel');
  });

  it('should render swiper correctly', () => {
    const swiper = wrapper.find('.container.sw swiper');
    expect(swiper.exists()).toBe(true);
    expect(swiper.attributes('autoplay')).toBe('true');
    expect(swiper.attributes('interval')).toBe('3000');
    expect(swiper.attributes('duration')).toBe('1000');
    expect(swiper.attributes('circular')).toBe('true');
    expect(swiper.attributes('indicator-dots')).toBe('true');
    expect(swiper.attributes('indicator-color')).toBe('rgba(0, 0, 0,.3)');
    expect(swiper.attributes('indicator-active-color')).toBe('#000000');
    const swiperItems = swiper.findAll('swiper-item');
    expect(swiperItems.length).toBe(3);
    swiperItems.forEach(item => {
      expect(item.find('image').exists()).toBe(true);
    });
  });

  it('should render van-cards correctly', () => {
    const cards = wrapper.findAll('.container van-card');
    expect(cards.length).toBe(3);
    cards.forEach((card, index) => {
      expect(card.find('.tag').text()).toBe(`NO.${index + 1}  `);
      expect(card.find('.desc').text()).toBe('我们先选择想要使用的 aigc 工具，输入具体需求。。。。。');
      expect(card.find('.title').text()).toBe('如何用 ai 一天写完国庆的所有作业');
      expect(card.find('van-button').length).toBe(2);
    });
  });

  it('should render bottom van-grid correctly', () => {
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