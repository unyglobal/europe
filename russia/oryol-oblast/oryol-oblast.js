// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oryol-oblast","repository":"europe","path":"russia/oryol-oblast","depth":2,"parent":"russia","children":["livny","mtsensk","orel"]});
export const childModules = Object.freeze({"livny":"./livny/livny.js","mtsensk":"./mtsensk/mtsensk.js","orel":"./orel/orel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
