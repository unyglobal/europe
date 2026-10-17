// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vas-county","repository":"europe","path":"hungary/vas-county","depth":2,"parent":"hungary","children":["sarvar","szombathely"]});
export const childModules = Object.freeze({"sarvar":"./sarvar/sarvar.js","szombathely":"./szombathely/szombathely.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
