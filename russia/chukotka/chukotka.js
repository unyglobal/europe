// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chukotka","repository":"europe","path":"russia/chukotka","depth":2,"parent":"russia","children":["anadyr"]});
export const childModules = Object.freeze({"anadyr":"./anadyr/anadyr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
