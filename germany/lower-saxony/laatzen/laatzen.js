// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laatzen","repository":"europe","path":"germany/lower-saxony/laatzen","depth":3,"parent":"germany/lower-saxony","children":["alt-laatzen"]});
export const childModules = Object.freeze({"alt-laatzen":"./alt-laatzen/alt-laatzen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
