// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"donaustadt","repository":"europe","path":"austria/vienna/donaustadt","depth":3,"parent":"austria/vienna","children":["hirschstetten","stadlau"]});
export const childModules = Object.freeze({"hirschstetten":"./hirschstetten/hirschstetten.js","stadlau":"./stadlau/stadlau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
