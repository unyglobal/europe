// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cottbus","repository":"europe","path":"germany/brandenburg/cottbus","depth":3,"parent":"germany/brandenburg","children":["spremberger-vorstadt"]});
export const childModules = Object.freeze({"spremberger-vorstadt":"./spremberger-vorstadt/spremberger-vorstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
