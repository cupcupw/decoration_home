Page({
  data: {
    typeList:[]
  },
  onLoad() {
    const _this = this
    wx.request({
      url: 'http://localhost:3000/queryRenovation',
      success(res){
        _this.setData({
          typeList:res.data
        })
        console.log(_this.data.typeList);
      }
    })
  },
  handlejump(e){
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/decoration_detail/index?id=${id}`,
    })
  }
})
