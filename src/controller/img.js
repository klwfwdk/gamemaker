const Base = require('./base.js');
var fs = require('fs');
var md5 = require('md5');
module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async fileCopy(fromPath,toPath){
    return new Promise((resolve,reject)=>{
      var is = fs.createReadStream(fromPath)
      var os = fs.createWriteStream(toPath);
      is.pipe(os);
      is.on('end', function () {
        console.log('copy end');
        resolve(true)
    });
    is.on('error', function () {
      reject('copy error')
        console.log('copy error');
    });
    })
  }

  async uploadAction() {
    
    const file = this.file('fileparam');
    console.log(this.post('param1'))
    return this.success();
    // fs.readFile('example.txt', function(err, buf) {
    //   console.log(md5(buf));
    // });
    // const file_name =file.name;
    // console.log(file_name)
    // const fullPath = path.join(think.ROOT_PATH, "www/static/image/", file_name)
    // //移动文件并且重命名
    // var isCopyEnd= await fileCopy(file.path,fullPath);
    // return  this.success({
    //   fileNme:
    // })
    // await think.timeout(500);
    // if (think.isExist(file.path)) {
    //     let stuData = await OcrService.getStuInfo(file.path)
    //     stuData = JSON.parse(stuData)
    //     this.ctx.response.status = 201
    //     this.ctx.response.body = stuData.data.ret
    //     return { statusCode: 0, data: stuData.data }
    // } else {
    //     this.ctx.response.status = 405
    //     return { statusCode: 0, data: '上传失败' }
    // }


};
};
