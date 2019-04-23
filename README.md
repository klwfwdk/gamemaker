
Application created by [ThinkJS](http://www.thinkjs.org)

## Install dependencies

```
npm install
```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```


      wx.uploadFile({
        url: 'https://app.klwf1.xyz/api/oc/index',
        filePath: that.data.img,
        name: 'stu',
        header: {
          'content-type': 'multipart/form-data',
          'X-Nideshop-Token': wx.getStorageSync('token')
        },
        formData: {
          'name': wx.getStorageSync('token')
        },
        success: function(res) {
          wx.hideLoading()
          if (res.statusCode == 201) {
            var data = JSON.parse(res.data);
            console.log(data[0].word, data[1].word)
            let form = that.data.formdata
            form['realname'] = data[1].word
            form['stunum'] = data[0].word
            console.log(form)
            that.setData({
              formdata: form,
              hiddenName2: true
            })
            wx.showToast({
              title: '已经成功上传',
              duration: 3000
            });

          } else {
            wx.showToast({
              title: '上传失败请重试',
              duration: 3000
            });
          }
        }
      })"# gamemaker" 
