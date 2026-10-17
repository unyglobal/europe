// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"capelle-aan-den-ijssel","repository":"europe","path":"netherlands/south-holland/capelle-aan-den-ijssel","depth":3,"parent":"netherlands/south-holland","children":["schenkel"]});
export const childModules = Object.freeze({"schenkel":"./schenkel/schenkel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
