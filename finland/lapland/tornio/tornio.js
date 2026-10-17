// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tornio","repository":"europe","path":"finland/lapland/tornio","depth":3,"parent":"finland/lapland","children":["juhannussaari","suensaari","torpinmaki"]});
export const childModules = Object.freeze({"juhannussaari":"./juhannussaari/juhannussaari.js","suensaari":"./suensaari/suensaari.js","torpinmaki":"./torpinmaki/torpinmaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
