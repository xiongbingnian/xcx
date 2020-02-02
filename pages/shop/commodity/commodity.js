Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorActiveColor: "#FE3615"
  },
  commodityPage: function (event) {
    wx.navigateTo({
      url: '../commodityPage/commodityPage'
    })
  },
  details: function (event) {
    wx.navigateTo({
      url: '../details/details'
    })
  },
})