// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"roses","repository":"europe","path":"spain/catalonia/roses","depth":3,"parent":"spain/catalonia","children":["els-grecs","la-muntanyeta"]});
export const childModules = Object.freeze({"els-grecs":"./els-grecs/els-grecs.js","la-muntanyeta":"./la-muntanyeta/la-muntanyeta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
