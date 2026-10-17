// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"comanesti","repository":"europe","path":"romania/bacau-county/comanesti","depth":3,"parent":"romania/bacau-county","children":["chiricel","lunca","zavoi"]});
export const childModules = Object.freeze({"chiricel":"./chiricel/chiricel.js","lunca":"./lunca/lunca.js","zavoi":"./zavoi/zavoi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
