// pages/my/binding/binding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '已绑定',
    binding_num: 1
  },
  binding: function (e) {
    var that = this;
    var type = that.data.type === '已绑定' ? '绑定店铺' : '已绑定';
    // var binding_num = that.data.binding_num===1?0:1;
    that.setData({
      type: type, 
      binding_num: !that.data.binding_num,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})