// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"schenkel","repository":"europe","path":"netherlands/south-holland/capelle-aan-den-ijssel/schenkel","depth":4,"parent":"netherlands/south-holland/capelle-aan-den-ijssel","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
