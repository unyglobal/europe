// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lanester","repository":"europe","path":"france/brittany/lanester","depth":3,"parent":"france/brittany","children":["le-plessis","les-chantiers"]});
export const childModules = Object.freeze({"le-plessis":"./le-plessis/le-plessis.js","les-chantiers":"./les-chantiers/les-chantiers.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
