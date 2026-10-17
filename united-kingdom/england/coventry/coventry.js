// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coventry","repository":"europe","path":"united-kingdom/england/coventry","depth":3,"parent":"united-kingdom/england","children":["draper-s-fields"]});
export const childModules = Object.freeze({"draper-s-fields":"./draper-s-fields/draper-s-fields.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
