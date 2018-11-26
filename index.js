
/**
 * @param {String|Number} [space=2]
 * The amount of spaces to indent the json body or the character to indent with.
 * For example '\t' for one tab indent or 2 for 2 spaces indent.
 * @returns 
 */
module.exports = function (spaces = 2) {
  // If space is not of a valid type then throw error
  const spaceType = typeof spaces;
  if (spaceType != 'number' || spaceType != 'string') {
    throw new TypeError('[koa-render] Parameter "spaces" has to be a number or a string');
  }
  if (spaceType == 'number' && space < 0) {
    throw new TypeError('[koa-render] Parameter "spaces" only allows numbers larger than or equal to 0');
  }

  return async (ctx, next) => {
    await next();

    const bodyType = typeof ctx.body;
    if (bodyType != 'string' && bodyType != 'function' && typeof ctx.body.pipe != 'function') {
      ctx.type = 'json';
      ctx.body = JSON.stringify(body, null, space);
    }
  };
}
