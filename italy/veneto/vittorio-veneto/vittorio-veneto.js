// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vittorio-veneto","repository":"europe","path":"italy/veneto/vittorio-veneto","depth":3,"parent":"italy/veneto","children":["ceneda"]});
export const childModules = Object.freeze({"ceneda":"./ceneda/ceneda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
