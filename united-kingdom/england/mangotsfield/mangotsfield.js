// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mangotsfield","repository":"europe","path":"united-kingdom/england/mangotsfield","depth":3,"parent":"united-kingdom/england","children":["staple-hill"]});
export const childModules = Object.freeze({"staple-hill":"./staple-hill/staple-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
