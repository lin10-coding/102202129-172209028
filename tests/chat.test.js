
const { shallowMount } = require('@vue/test-utils');
const ChatPageComponent = require('./chatPage.wxml'); 

describe('Chat Page Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ChatPageComponent);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render navbar correctly', () => {
    const navbar = wrapper.find('.top van-nav-bar');
    expect(navbar.exists()).toBe(true);
    expect(navbar.attributes('title')).toBe('XXXX的聊天');
    expect(navbar.attributes('left-text')).toBe('返回');
    expect(navbar.attributes('left-arrow')).toBeTruthy();
    expect(navbar.attributes('bind:click-left')).toBe('onBack');
    expect(navbar.attributes('bind:click-right')).toBe('onClickRight');
  });

  it('should render chat containers correctly', () => {
    const chatContainers = wrapper.findAll('.chat-container');
    expect(chatContainers.length).toBe(4);
    chatContainers.forEach(container => {
      const avatar = container.find('.avatar');
      expect(avatar.exists()).toBe(true);
      expect(avatar.attributes('src')).toBeTruthy();
      expect(avatar.attributes('mode')).toBe('aspectFill');
      const messageBubble = container.find('.message-box.message-bubble');
      expect(messageBubble.exists()).toBe(true);
      const messageContent = messageBubble.find('.message-content');
      expect(messageContent.exists()).toBe(true);
      expect(messageContent.text()).toBe(wrapper.vm.message);
    });
  });

  it('should render input field correctly', () => {
    const inputField = wrapper.find('.van-cell-group van-field');
    expect(inputField.exists()).toBe(true);
    expect(inputField.attributes('value')).toBe(wrapper.vm.sms);
    expect(inputField.attributes('center')).toBeTruthy();
    expect(inputField.attributes('clearable')).toBeTruthy();
    expect(inputField.attributes('placeholder')).toBe('请输入');
    expect(inputField.attributes('border')).toBe('false');
    expect(inputField.attributes('use-button-slot')).toBeTruthy();
  });

  it('should render arrow icon correctly', () => {
    const arrowIcon = wrapper.find('.arrow');
    expect(arrowIcon.exists()).toBe(true);
    expect(arrowIcon.attributes('name')).toBe('arrow');
    expect(arrowIcon.attributes('size')).toBe('30px');
    expect(arrowIcon.element.style.top).toBe('290px');
    expect(arrowIcon.element.style.left).toBe('330px');
  });

  it('should render plus icon correctly', () => {
    const plusIcon = wrapper.find('.plus');
    expect(plusIcon.exists()).toBe(true);
    expect(plusIcon.attributes('name')).toBe('plus');
    expect(plusIcon.attributes('size')).toBe('30px');
    expect(plusIcon.element.style.top).toBe('290px');
    expect(plusIcon.element.style.left).toBe('350px');
  });
});