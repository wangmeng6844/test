// pages/components/title/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    mode: 'scaleToFill',
    list:[
      {"title":"品牌策划",
        "img":"http://12.s81i.faiusr.com/4/104/AFEIDBAEGAAgsYjv0wUoyNe_7wUwbDhsQGg.png"
      },
      {
        "title": "网站设计",
        "img": "http://12.s81i.faiusr.com/4/104/AFEIDBAEGAAgs4jv0wUomNbrugYwbDhsQGg.png"
      },
      {
        "title": "画册设计",
        "img": "http://12.s81i.faiusr.com/4/104/AFEIDBAEGAAgtYjv0wUo2LOMHDBsOGxAaA.png"
      },
      {
        "title": "产品拍摄",
        "img": "http://12.s81i.faiusr.com/4/104/AFEIDBAEGAAgtojv0wUo8Lm7xAMwbDhsQGg.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    btn () {
     wx.getSetting({
       success(res){
         if (res.authSetting['scope.userInfo']) {
           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
           wx.getUserInfo({
             success: res => {
              console.log(res)
             }
           })
         }
       }
     })
    }
  }
})
