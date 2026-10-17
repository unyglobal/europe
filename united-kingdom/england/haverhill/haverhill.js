// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haverhill","repository":"europe","path":"united-kingdom/england/haverhill","depth":3,"parent":"united-kingdom/england","children":["chalkstone","clements"]});
export const childModules = Object.freeze({"chalkstone":"./chalkstone/chalkstone.js","clements":"./clements/clements.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
