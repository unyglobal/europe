// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ripley","repository":"europe","path":"united-kingdom/england/ripley","depth":3,"parent":"united-kingdom/england","children":["marehay"]});
export const childModules = Object.freeze({"marehay":"./marehay/marehay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
