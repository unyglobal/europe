// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"graz","repository":"europe","path":"austria/styria/graz","depth":3,"parent":"austria/styria","children":["innere-stadt"]});
export const childModules = Object.freeze({"innere-stadt":"./innere-stadt/innere-stadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
