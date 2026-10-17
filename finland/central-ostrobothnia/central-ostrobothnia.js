// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-ostrobothnia","repository":"europe","path":"finland/central-ostrobothnia","depth":2,"parent":"finland","children":["kokkola"]});
export const childModules = Object.freeze({"kokkola":"./kokkola/kokkola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
