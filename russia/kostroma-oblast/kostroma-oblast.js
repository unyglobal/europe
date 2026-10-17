// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kostroma-oblast","repository":"europe","path":"russia/kostroma-oblast","depth":2,"parent":"russia","children":["buy","galich","kostroma","manturovo","nerekhta","shar-ya","volgorechensk"]});
export const childModules = Object.freeze({"buy":"./buy/buy.js","galich":"./galich/galich.js","kostroma":"./kostroma/kostroma.js","manturovo":"./manturovo/manturovo.js","nerekhta":"./nerekhta/nerekhta.js","shar-ya":"./shar-ya/shar-ya.js","volgorechensk":"./volgorechensk/volgorechensk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
