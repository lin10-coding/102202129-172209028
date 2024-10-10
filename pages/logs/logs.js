Page({
  data: {
    value: '',
  },

  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },


  handleLogin: function() {
    // 登录逻辑
    wx.navigateTo({
      url: '/pages/index/index' // 跳转到登录页面
    });
  },
  // 处理注册按钮点击事件
  handleRegister: function() {
    // 注册逻辑
    wx.navigateTo({
      url: '/pages/register/index' // 跳转到注册页面
    });
  }

});