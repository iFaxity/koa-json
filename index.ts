import { Context } from "koa";

/**
 * Pretty prints body if body is a object or an array
 *
 * @param {string|number} [indent=2]
 * The amount of spaces to indent the json body or the character to indent with.
 * For example '\t' for one tab indent or 2 for 2 spaces indent.
 * @returns {Function}
 */
export default function (indent: string|number = 2): (ctx, next: Function) => Promise<void> {
  // If indent is not of a valid type then throw error
  const type = typeof indent;
  if (type != 'number' && type != 'string') {
    throw new TypeError('[koa-render] Parameter "indent" has to be a number or a string');
  }
  if (type == 'number' && indent < 0) {
    throw new TypeError('[koa-render] Parameter "indent" only allows numbers larger than or equal to 0');
  }

  return async (ctx: Context, next: Function) => {
    await next();

    const bodyType = typeof ctx.body;
    if (bodyType != 'string' && bodyType != 'function' && typeof ctx.body.pipe != 'function') {
      ctx.type = 'json';
      ctx.body = JSON.stringify(ctx.body, null, indent);
    }
  };
}
