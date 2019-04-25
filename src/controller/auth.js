const Base = require('./base.js');
const path = require('path');
var fs = require('fs');
module.exports = class extends Base {
  async loginAction() {
    const userId = this.post('userId');
    if (!userId) {
      return this.fail();
    } else {
      var userInfo = this.model('user').getUserInfo(userInfo);
      const TokenSerivce = this.service('token', 'api');
      const sessionKey = await TokenSerivce.create(userInfo);
      return this.success({
        token: sessionKey,
        userInfo: userInfo
      });
    }
  }
  async fileCopy(fromPath, toPath) {
    return new Promise((resolve, reject) => {
      var is = fs.createReadStream(fromPath);
      var os = fs.createWriteStream(toPath);
      is.pipe(os);
      is.on('end', function() {
        // console.log('copy end');
        resolve(true);
      });
      is.on('error', function() {
        reject(new Error('Error'));
        // console.log('copy error');
      });
    });
  }
  async signupAction() {
    const userId = this.post('userId');
    if (!userId) {
      return this.fail();
    } else {
      var userTemp = {
        userId: userId,
        gameTimes: 0,
        scort: 0
      };
      var a = await this.model('user').insertUser(userTemp);
      if (a.type === 'exist') {
        return this.fail({
          erro: '用户已存在'
        });
      } else {
        const file = this.file('icon');
        if (file) {
          const fileName = userId + path.extname(file.name);
          const fullPath = path.join(think.ROOT_PATH, 'www/static/image/', fileName);
          await this.fileCopy(file.path, fullPath);
        }
        this.success({
          sign: 'ok'
        });
      }
    };
  }
};
