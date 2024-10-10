Page({
  data: {
    // 这里可以放置页面的数据，比如轮播图的图片列表等
    autoplay: true, // 是否自动播放
    interval: 4000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
  },
  onLoad: function() {
    // 页面加载时执行的初始化操作
    this.initSwiper();
  },
  initSwiper: function() {
    // 初始化轮播图的数据，这里可以是本地数据或者从服务器获取
    const swiperData = [
      '/images/slide1.jpg',
      '/images/slide2.jpg',
      '/images/slide3.jpg',
    ];
    // 设置轮播图数据
    this.setData({
      swiperData: swiperData,
    });
  },
  // 以下可以添加更多的页面逻辑，比如事件处理函数等
  onSwiperTap: function(e) {
    // 当用户点击轮播图时执行的操作
    console.log('轮播图被点击', e);
  },
  data: {
    // 默认图标颜色为灰色
    iconColor: 'gray'
  },
  toggleIconColor: function() {
    // 切换图标颜色
    if (this.data.iconColor === 'gray') {
      this.setData({
        iconColor: 'red'
      });
    } else {
      this.setData({
        iconColor: 'gray'
      });
    }
  },

  todetail: function(){
    wx.navigateTo({
      url: '/pages/detail/index' // 确保这个路径是你的帖子详细页面的路径
    });
  }



});