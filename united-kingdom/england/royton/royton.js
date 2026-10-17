// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"royton","repository":"europe","path":"united-kingdom/england/royton","depth":3,"parent":"united-kingdom/england","children":["luzley-brook","thorp"]});
export const childModules = Object.freeze({"luzley-brook":"./luzley-brook/luzley-brook.js","thorp":"./thorp/thorp.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
