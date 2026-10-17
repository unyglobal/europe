// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gosforth","repository":"europe","path":"united-kingdom/england/gosforth","depth":3,"parent":"united-kingdom/england","children":["west-jesmond"]});
export const childModules = Object.freeze({"west-jesmond":"./west-jesmond/west-jesmond.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
