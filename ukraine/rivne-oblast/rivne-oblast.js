// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rivne-oblast","repository":"europe","path":"ukraine/rivne-oblast","depth":2,"parent":"ukraine","children":["dubno","kostopil","rivne","sarny","varash","zdolbuniv"]});
export const childModules = Object.freeze({"dubno":"./dubno/dubno.js","kostopil":"./kostopil/kostopil.js","rivne":"./rivne/rivne.js","sarny":"./sarny/sarny.js","varash":"./varash/varash.js","zdolbuniv":"./zdolbuniv/zdolbuniv.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
