// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brest","repository":"europe","path":"france/brittany/brest","depth":3,"parent":"france/brittany","children":["keroriou","l-harteloire","le-carpon"]});
export const childModules = Object.freeze({"keroriou":"./keroriou/keroriou.js","l-harteloire":"./l-harteloire/l-harteloire.js","le-carpon":"./le-carpon/le-carpon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
