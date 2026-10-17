// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cambridge","repository":"europe","path":"united-kingdom/england/cambridge","depth":3,"parent":"united-kingdom/england","children":["newnham","newnham-croft"]});
export const childModules = Object.freeze({"newnham":"./newnham/newnham.js","newnham-croft":"./newnham-croft/newnham-croft.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
