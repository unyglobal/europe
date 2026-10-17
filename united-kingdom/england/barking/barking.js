// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barking","repository":"europe","path":"united-kingdom/england/barking","depth":3,"parent":"united-kingdom/england","children":["gascoigne"]});
export const childModules = Object.freeze({"gascoigne":"./gascoigne/gascoigne.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
