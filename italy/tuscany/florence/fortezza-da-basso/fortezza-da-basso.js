// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fortezza-da-basso","repository":"europe","path":"italy/tuscany/florence/fortezza-da-basso","depth":4,"parent":"italy/tuscany/florence","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
