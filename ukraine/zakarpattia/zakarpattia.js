// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zakarpattia","repository":"europe","path":"ukraine/zakarpattia","depth":2,"parent":"ukraine","children":["berehove","khust","mukachevo","rakhiv","svalyava","uzhhorod","vynohradiv"]});
export const childModules = Object.freeze({"berehove":"./berehove/berehove.js","khust":"./khust/khust.js","mukachevo":"./mukachevo/mukachevo.js","rakhiv":"./rakhiv/rakhiv.js","svalyava":"./svalyava/svalyava.js","uzhhorod":"./uzhhorod/uzhhorod.js","vynohradiv":"./vynohradiv/vynohradiv.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
