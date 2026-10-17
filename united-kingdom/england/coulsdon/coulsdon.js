// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coulsdon","repository":"europe","path":"united-kingdom/england/coulsdon","depth":3,"parent":"united-kingdom/england","children":["coulsdon-west"]});
export const childModules = Object.freeze({"coulsdon-west":"./coulsdon-west/coulsdon-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
