// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vestland","repository":"europe","path":"norway/vestland","depth":2,"parent":"norway","children":["asane","bergen","nesttun","ytrebygda"]});
export const childModules = Object.freeze({"asane":"./asane/asane.js","bergen":"./bergen/bergen.js","nesttun":"./nesttun/nesttun.js","ytrebygda":"./ytrebygda/ytrebygda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
