module.exports = class extends think.Model {
  insertUser(userInfo) {
    // console.log(userInfo);
    return this.thenAdd(userInfo, {userId: userInfo.userId});
  }

  getUserInfo(userId) {
    return this.where({userId: userId}).find();
  }
};
