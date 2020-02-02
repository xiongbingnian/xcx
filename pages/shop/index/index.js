Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorActiveColor: "#FE3615"
  },
  information: function (event) {
    wx.navigateTo({
      url: '../information/information'
    })
  },
  commodity: function (event) {
    wx.navigateTo({
      url: '../commodity/commodity'
    })
  },
  details: function (event) {
    wx.navigateTo({
      url: '../details/details'
    })
  },
  seaech: function (event) {
    console.log("dsds")
    wx.navigateTo({
      url: '../search/search'
    })
  },
  accreditPophide: function () {
    this.setData({
      accreditPop: 1
    })
  },
})


