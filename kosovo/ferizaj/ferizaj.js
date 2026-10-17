// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ferizaj","repository":"europe","path":"kosovo/ferizaj","depth":2,"parent":"kosovo","children":["shtime"]});
export const childModules = Object.freeze({"shtime":"./shtime/shtime.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
