// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guarda","repository":"europe","path":"portugal/guarda","depth":2,"parent":"portugal","children":["custoias","sequeira"]});
export const childModules = Object.freeze({"custoias":"./custoias/custoias.js","sequeira":"./sequeira/sequeira.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
