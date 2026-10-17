// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hodmezovasarhely","repository":"europe","path":"hungary/csongrad/hodmezovasarhely","depth":3,"parent":"hungary/csongrad","children":["katraszel","kincsestelep","kulsoerzsebet"]});
export const childModules = Object.freeze({"katraszel":"./katraszel/katraszel.js","kincsestelep":"./kincsestelep/kincsestelep.js","kulsoerzsebet":"./kulsoerzsebet/kulsoerzsebet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
