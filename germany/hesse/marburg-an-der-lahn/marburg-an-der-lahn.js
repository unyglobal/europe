// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marburg-an-der-lahn","repository":"europe","path":"germany/hesse/marburg-an-der-lahn","depth":3,"parent":"germany/hesse","children":["weidenhausen"]});
export const childModules = Object.freeze({"weidenhausen":"./weidenhausen/weidenhausen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
