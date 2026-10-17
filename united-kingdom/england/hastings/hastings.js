// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hastings","repository":"europe","path":"united-kingdom/england/hastings","depth":3,"parent":"united-kingdom/england","children":["west-hill"]});
export const childModules = Object.freeze({"west-hill":"./west-hill/west-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
