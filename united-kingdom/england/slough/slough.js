// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"slough","repository":"europe","path":"united-kingdom/england/slough","depth":3,"parent":"united-kingdom/england","children":["salt-hill","upton-park"]});
export const childModules = Object.freeze({"salt-hill":"./salt-hill/salt-hill.js","upton-park":"./upton-park/upton-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
