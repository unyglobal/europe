// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kalundborg-slots-ladegard","repository":"europe","path":"denmark/zealand/kalundborg/kalundborg-slots-ladegard","depth":4,"parent":"denmark/zealand/kalundborg","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
