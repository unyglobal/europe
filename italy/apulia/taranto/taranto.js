// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taranto","repository":"europe","path":"italy/apulia/taranto","depth":3,"parent":"italy/apulia","children":["citta-nuova"]});
export const childModules = Object.freeze({"citta-nuova":"./citta-nuova/citta-nuova.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
