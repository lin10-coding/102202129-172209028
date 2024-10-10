
Page({
  data: {
    result: ['a', 'b'],
    date: '',
    show: false,
    fileList: [],
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    const [start, end] = event.detail;
    this.setData({
      show: false,
      date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
    });
  },


  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
  },

  creat() {
    wx.showToast({
      title: '创建成功',
      icon: 'success',
      duration: 2000
    });
    wx.navigateTo({
      url: '/pages/project/index'
    });
 
  },

  onChange(event) {
    this.setData({
      result: event.detail,
    });
  },
  onChange(event) {
    console.log(event.detail);
  },
  onBack: function() {
    // 返回上一页面
    wx.navigateBack({
      delta: 1, // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
      success: function(res) {
        // 返回成功
      },
      fail: function(res) {
        // 返回失败
      }
    });

   
    
}})