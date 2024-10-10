
const { shallowMount } = require('@vue/test-utils');
const NewProjectPageComponent = require('./newProjectPage.wxml'); 

describe('New Project Page Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NewProjectPageComponent);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render navbar correctly', () => {
    const navbar = wrapper.find('.top van-nav-bar');
    expect(navbar.exists()).toBe(true);
    expect(navbar.attributes('title')).toBe('新建项目');
    expect(navbar.attributes('left-text')).toBe('返回');
    expect(navbar.attributes('right-text')).toBe('按钮');
    expect(navbar.attributes('left-arrow')).toBeTruthy();
    expect(navbar.attributes('bind:click-left')).toBe('onBack');
    expect(navbar.attributes('bind:click-right')).toBe('onClickRight');
  });

  it('should render project name input field correctly', () => {
    const projectNameField = wrapper.find('.container van-cell-group van-field[label="项目名称"]');
    expect(projectNameField.exists()).toBe(true);
    expect(projectNameField.attributes('placeholder')).toBe('请输入项目名称');
    expect(projectNameField.attributes('border')).toBe('true');
    expect(projectNameField.attributes('bind:change')).toBe('onChange');
  });

  it('should render project introduction and requirement input fields correctly', () => {
    const projectIntroductionField = wrapper.find('.container van-cell-group van-field[label="项目简介"]');
    expect(projectIntroductionField.exists()).toBe(true);
    expect(projectIntroductionField.attributes('value')).toBe(wrapper.vm.username);
    expect(projectIntroductionField.attributes('required')).toBeTruthy();
    expect(projectIntroductionField.attributes('clearable')).toBeTruthy();
    expect(projectIntroductionField.attributes('icon')).toBe('question-o');
    expect(projectIntroductionField.attributes('placeholder')).toBe('请输入项目简介');
    expect(projectIntroductionField.attributes('bind:click-icon')).toBe('onClickIcon');

    const projectRequirementField = wrapper.find('.container van-cell-group van-field[label="项目需求"]');
    expect(projectRequirementField.exists()).toBe(true);
    expect(projectRequirementField.attributes('value')).toBe(wrapper.vm.password);
    expect(projectRequirementField.attributes('type')).toBe('password');
    expect(projectRequirementField.attributes('placeholder')).toBe('请输入项目需求');
    expect(projectRequirementField.attributes('required')).toBeTruthy();
    expect(projectRequirementField.attributes('border')).toBe('false');
  });

  it('should render checkboxes correctly', () => {
    const checkboxes = wrapper.find('.container van-checkbox-group');
    expect(checkboxes.exists()).toBe(true);
    expect(checkboxes.find('van-checkbox[name="a"]').text()).toBe('前端');
    expect(checkboxes.find('van-checkbox[name="b"]').text()).toBe('后端');
    expect(checkboxes.find('van-checkbox[name="c"]').text()).toBe('美工');
    expect(checkboxes.attributes('bind:change')).toBe('onChange');
  });

  it('should render steppers correctly', () => {
    const steppers = wrapper.findAll('.container van-stepper');
    expect(steppers.length).toBe(3);
    steppers.forEach(stepper => {
      expect(stepper.attributes('value')).toBe('1');
      expect(stepper.attributes('bind:change')).toBe('onChange');
    });
  });

  it('should render friends icon correctly', () => {
    const friendsIcon = wrapper.find('.container van-icon[name="friends-o"]');
    expect(friendsIcon.exists()).toBe(true);
    expect(friendsIcon.attributes('size')).toBe('70px');
    expect(friendsIcon.element.style.top).toBe('-160px');
    expect(friendsIcon.element.style.left).toBe('-150px');
  });

  it('should render date picker cell correctly', () => {
    const datePickerCell = wrapper.find('.container van-cell[title="选择项目时间区间"]');
    expect(datePickerCell.exists()).toBe(true);
    expect(datePickerCell.attributes('value')).toBe(wrapper.vm.date);
    expect(datePickerCell.attributes('bind:click')).toBe('onDisplay');
  });

  it('should render calendar correctly', () => {
    const calendar = wrapper.find('.container van-calendar');
    expect(calendar.exists()).toBe(true);
    expect(calendar.attributes('show')).toBe(wrapper.vm.show);
    expect(calendar.attributes('type')).toBe('range');
    expect(calendar.attributes('bind:close')).toBe('onClose');
    expect(calendar.attributes('bind:confirm')).toBe('onConfirm');
  });

  it('should render uploader correctly', () => {
    const uploader = wrapper.find('.mid van-uploader');
    expect(uploader.exists()).toBe(true);
    expect(uploader.attributes('file-list')).toBe(wrapper.vm.fileList);
    expect(uploader.attributes('bind:after-read')).toBe('afterRead');
  });

  it('should render upgrade icon and text correctly', () => {
    const upgradeIcon = wrapper.find('.mid van-icon[name="upgrade"]');
    expect(upgradeIcon.exists()).toBe(true);
    expect(upgradeIcon.attributes('size')).toBe('80px');
    expect(upgradeIcon.element.style.top).toBe('-120px');
    expect(upgradeIcon.element.style.left).toBe('170px');

    const createText = wrapper.find('.mid.text:contains("创建并发布项目")');
    expect(createText.exists()).toBe(true);
    expect(createText.text()).toBe('创建并发布项目');
  });
});