/**
 * Pretty prints body if body is a object or an array
 *
 * @param {string|number} [indent=2]
 * The amount of spaces to indent the json body or the character to indent with.
 * For example '\t' for one tab indent or 2 for 2 spaces indent.
 * @returns {Function}
 */
export default function (indent?: string | number): (ctx: any, next: Function) => Promise<void>;
//# sourceMappingURL=index.d.ts.map