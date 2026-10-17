// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"felling","repository":"europe","path":"united-kingdom/england/felling","depth":3,"parent":"united-kingdom/england","children":["old-fold"]});
export const childModules = Object.freeze({"old-fold":"./old-fold/old-fold.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
