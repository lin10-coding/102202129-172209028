Page({
  data: {
    chatHistory: [],
    inputValue: ''
  },
  onInputChange(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  sendMessage() {
    const { inputValue } = this.data;
    if (inputValue.trim()!== '') {
      this.data.chatHistory.push({
        sender: 'me',
        content: inputValue
      });
      this.setData({
        chatHistory: this.data.chatHistory,
        inputValue: ''
      });
    }
  },
  goBack() {
    // 这里可以根据你的实际导航逻辑进行返回上一层的操作
    wx.navigateBack();
  }
});