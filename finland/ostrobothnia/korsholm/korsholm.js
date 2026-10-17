// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"korsholm","repository":"europe","path":"finland/ostrobothnia/korsholm","depth":3,"parent":"finland/ostrobothnia","children":["brannbacken"]});
export const childModules = Object.freeze({"brannbacken":"./brannbacken/brannbacken.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
