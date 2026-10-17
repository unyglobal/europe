// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lillehammer","repository":"europe","path":"norway/innlandet/lillehammer","depth":3,"parent":"norway/innlandet","children":["busmoen"]});
export const childModules = Object.freeze({"busmoen":"./busmoen/busmoen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
