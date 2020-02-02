var app = getApp()
Page({
  data: {
    _num:1
  },
  selectClick: function (e) {
    this.setData({
      _num: e.target.dataset.num
    })
  },
  modalcnt: function () {
    wx.showModal({
      title: '您确定要删除吗？',
      confirmColor: '#FE3615',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  compileAddress: function () {
    wx.navigateTo({
      url: '../compileAddress/compileAddress'
    })
  },
  newAddress: function () {
    wx.navigateTo({
      url: '../newAddress/newAddress'
    })
  }
})  