// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heerlen","repository":"europe","path":"netherlands/limburg/heerlen","depth":3,"parent":"netherlands/limburg","children":["molenberg"]});
export const childModules = Object.freeze({"molenberg":"./molenberg/molenberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
