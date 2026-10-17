// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vukovar","repository":"europe","path":"croatia/vukovar-srijem/vukovar","depth":3,"parent":"croatia/vukovar-srijem","children":["centar"]});
export const childModules = Object.freeze({"centar":"./centar/centar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
