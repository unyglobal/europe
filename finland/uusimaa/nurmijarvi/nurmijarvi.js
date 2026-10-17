// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nurmijarvi","repository":"europe","path":"finland/uusimaa/nurmijarvi","depth":3,"parent":"finland/uusimaa","children":["krannila","lumpperinmaki","maaniittu","parkkimaki","toreeni"]});
export const childModules = Object.freeze({"krannila":"./krannila/krannila.js","lumpperinmaki":"./lumpperinmaki/lumpperinmaki.js","maaniittu":"./maaniittu/maaniittu.js","parkkimaki":"./parkkimaki/parkkimaki.js","toreeni":"./toreeni/toreeni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
