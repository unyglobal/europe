// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sutton-in-ashfield","repository":"europe","path":"united-kingdom/england/sutton-in-ashfield","depth":3,"parent":"united-kingdom/england","children":["new-cross"]});
export const childModules = Object.freeze({"new-cross":"./new-cross/new-cross.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
