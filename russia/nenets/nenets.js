// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nenets","repository":"europe","path":"russia/nenets","depth":2,"parent":"russia","children":["nar-yan-mar","narian-mar"]});
export const childModules = Object.freeze({"nar-yan-mar":"./nar-yan-mar/nar-yan-mar.js","narian-mar":"./narian-mar/narian-mar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
