// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"poole","repository":"europe","path":"united-kingdom/england/poole","depth":3,"parent":"united-kingdom/england","children":["lower-hamworthy"]});
export const childModules = Object.freeze({"lower-hamworthy":"./lower-hamworthy/lower-hamworthy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
