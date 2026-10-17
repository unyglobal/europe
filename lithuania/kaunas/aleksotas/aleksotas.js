// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aleksotas","repository":"europe","path":"lithuania/kaunas/aleksotas","depth":3,"parent":"lithuania/kaunas","children":["freda"]});
export const childModules = Object.freeze({"freda":"./freda/freda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
