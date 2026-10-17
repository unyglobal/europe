// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"exeter","repository":"europe","path":"united-kingdom/england/exeter","depth":3,"parent":"united-kingdom/england","children":["barnfield","the-quay"]});
export const childModules = Object.freeze({"barnfield":"./barnfield/barnfield.js","the-quay":"./the-quay/the-quay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
