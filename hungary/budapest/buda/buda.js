// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buda","repository":"europe","path":"hungary/budapest/buda","depth":3,"parent":"hungary/budapest","children":["budai-var"]});
export const childModules = Object.freeze({"budai-var":"./budai-var/budai-var.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
