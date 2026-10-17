// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"markkleeberg","repository":"europe","path":"germany/saxony/markkleeberg","depth":3,"parent":"germany/saxony","children":["gautzsch","markkleeberg-west"]});
export const childModules = Object.freeze({"gautzsch":"./gautzsch/gautzsch.js","markkleeberg-west":"./markkleeberg-west/markkleeberg-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
