// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stalybridge","repository":"europe","path":"united-kingdom/england/stalybridge","depth":3,"parent":"united-kingdom/england","children":["cocker-hill"]});
export const childModules = Object.freeze({"cocker-hill":"./cocker-hill/cocker-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
