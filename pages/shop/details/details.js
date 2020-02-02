Page({
  data: {
    imgUrls: [
      '../../../image/top_details.png',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorActiveColor: "#FE3615",
    nav: ['图文详情', '规格参数', '评价（60）'],
    currentTab: 0 ,
    carPop:1,
    buyPop:1
  },
  navTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  collectOk: function () {
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    })
  },
  carPopShow:function(){
    this.setData({
      carPop: 0
    })
  },
  buyPopShow:function(){
    this.setData({
      buyPop: 0
    })
  },
  addCarOk: function () {
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    }),
      this.setData({
        carPop: 1
      })
  },
  submitOrder: function () {
    wx.navigateTo({
      url: '../submitOrder/submitOrder'
    })
  },
  popHide:function(){
    this.setData({
      carPop: 1,
      buyPop:1
    }) 
  }    
})