// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lorca","repository":"europe","path":"spain/murcia/lorca","depth":3,"parent":"spain/murcia","children":["santa-quiteria"]});
export const childModules = Object.freeze({"santa-quiteria":"./santa-quiteria/santa-quiteria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
