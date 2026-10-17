// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dolj","repository":"europe","path":"romania/dolj","depth":2,"parent":"romania","children":["bailesti","calafat","craiova","filiasi"]});
export const childModules = Object.freeze({"bailesti":"./bailesti/bailesti.js","calafat":"./calafat/calafat.js","craiova":"./craiova/craiova.js","filiasi":"./filiasi/filiasi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
