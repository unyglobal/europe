// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"smethwick","repository":"europe","path":"united-kingdom/england/smethwick","depth":3,"parent":"united-kingdom/england","children":["cape-hill"]});
export const childModules = Object.freeze({"cape-hill":"./cape-hill/cape-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
