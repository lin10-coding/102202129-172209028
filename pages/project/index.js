Page({
  data: {
    showShare: false,
    options: [
      { name: '分享项目', icon: 'wechat', openType: 'share' },
      { name: '管理项目', icon: 'weibo' },
      { name: '加入项目', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],
  },

  onClick(event) {
    this.setData({ showShare: true });
  },

  onClose() {
    this.setData({ showShare: false });
  },

  onSelect(event) {
    Toast(event.detail.name);
    this.onClose();
  },

  todetail: function(){
    wx.navigateTo({
      url: '/pages/detail/index' // 确保这个路径是你的帖子详细页面的路径
    });
  }
});