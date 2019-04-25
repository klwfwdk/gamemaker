module.exports = class extends think.Controller {
  async __before() {
    this.ctx.state.token = this.ctx.header['x-Game-token'] || '';
    const tokenSerivce = think.service('token', 'api');
    this.ctx.state.userId = await tokenSerivce.getUserId(this.ctx.state.token);
    // const publicController = this.config('publicController');
    // const publicAction = this.config('publicAction');
  }
};
