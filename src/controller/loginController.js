class LoginController {
  async login (ctx, next) {
    const { name } = ctx.request.body;
    ctx.body = `Welcome back ${name}`;
    await next();
  }
}


module.exports = new LoginController();