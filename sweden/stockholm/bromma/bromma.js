// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bromma","repository":"europe","path":"sweden/stockholm/bromma","depth":3,"parent":"sweden/stockholm","children":["abrahamsberg","akeshov","akeslund","olovslund"]});
export const childModules = Object.freeze({"abrahamsberg":"./abrahamsberg/abrahamsberg.js","akeshov":"./akeshov/akeshov.js","akeslund":"./akeslund/akeslund.js","olovslund":"./olovslund/olovslund.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
