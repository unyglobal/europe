// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"magadan-oblast","repository":"europe","path":"russia/magadan-oblast","depth":2,"parent":"russia","children":["magadan"]});
export const childModules = Object.freeze({"magadan":"./magadan/magadan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
