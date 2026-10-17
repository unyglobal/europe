// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harlow","repository":"europe","path":"united-kingdom/england/harlow","depth":3,"parent":"united-kingdom/england","children":["mark-hall-north","mark-hall-south","netteswell","temple-fields"]});
export const childModules = Object.freeze({"mark-hall-north":"./mark-hall-north/mark-hall-north.js","mark-hall-south":"./mark-hall-south/mark-hall-south.js","netteswell":"./netteswell/netteswell.js","temple-fields":"./temple-fields/temple-fields.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
