// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basilicate","repository":"europe","path":"italy/basilicate","depth":2,"parent":"italy","children":["matera","potenza"]});
export const childModules = Object.freeze({"matera":"./matera/matera.js","potenza":"./potenza/potenza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
