// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pitajanmaki","repository":"europe","path":"finland/uusimaa/pitajanmaki","depth":3,"parent":"finland/uusimaa","children":["pajamaki","reimarla"]});
export const childModules = Object.freeze({"pajamaki":"./pajamaki/pajamaki.js","reimarla":"./reimarla/reimarla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
