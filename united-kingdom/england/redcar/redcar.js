// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"redcar","repository":"europe","path":"united-kingdom/england/redcar","depth":3,"parent":"united-kingdom/england","children":["west-dyke"]});
export const childModules = Object.freeze({"west-dyke":"./west-dyke/west-dyke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
