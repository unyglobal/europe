// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"castelo-branco","repository":"europe","path":"portugal/castelo-branco","depth":2,"parent":"portugal","children":["covilha"]});
export const childModules = Object.freeze({"covilha":"./covilha/covilha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
