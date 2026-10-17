// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"olbia","repository":"europe","path":"italy/sardinia/olbia","depth":3,"parent":"italy/sardinia","children":["olbia-marittima"]});
export const childModules = Object.freeze({"olbia-marittima":"./olbia-marittima/olbia-marittima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
