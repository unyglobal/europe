// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kalundborg","repository":"europe","path":"denmark/zealand/kalundborg","depth":3,"parent":"denmark/zealand","children":["kalundborg-slots-ladegard"]});
export const childModules = Object.freeze({"kalundborg-slots-ladegard":"./kalundborg-slots-ladegard/kalundborg-slots-ladegard.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
