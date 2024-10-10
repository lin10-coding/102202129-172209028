// pages/register/index.js


Page({

  data: {
    date: '',
    show: false,
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
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
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
},


goToRegister: function() {

  wx.showToast({
    title: "注册成功",
    icon: 'none', // 'success'、'loading', 'none'
    duration: 2000 // 提示的延迟时间
  });
  wx.navigateTo({
    url: '/pages/logs/logs' // 替换为你的注册页面路径
  });

  
}
})