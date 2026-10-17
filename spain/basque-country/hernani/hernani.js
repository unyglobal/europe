// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hernani","repository":"europe","path":"spain/basque-country/hernani","depth":3,"parent":"spain/basque-country","children":["antziola","elizatxo","florida","karobieta","latsunbe","marieluts","portu","sagastialde","sorgintxulo"]});
export const childModules = Object.freeze({"antziola":"./antziola/antziola.js","elizatxo":"./elizatxo/elizatxo.js","florida":"./florida/florida.js","karobieta":"./karobieta/karobieta.js","latsunbe":"./latsunbe/latsunbe.js","marieluts":"./marieluts/marieluts.js","portu":"./portu/portu.js","sagastialde":"./sagastialde/sagastialde.js","sorgintxulo":"./sorgintxulo/sorgintxulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
