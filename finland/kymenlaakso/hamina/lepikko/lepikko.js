// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lepikko","repository":"europe","path":"finland/kymenlaakso/hamina/lepikko","depth":4,"parent":"finland/kymenlaakso/hamina","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
