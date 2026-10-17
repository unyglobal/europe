// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chesterfield","repository":"europe","path":"united-kingdom/england/chesterfield","depth":3,"parent":"united-kingdom/england","children":["stonegravels"]});
export const childModules = Object.freeze({"stonegravels":"./stonegravels/stonegravels.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
