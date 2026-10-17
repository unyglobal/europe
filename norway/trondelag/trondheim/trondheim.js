// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trondheim","repository":"europe","path":"norway/trondelag/trondheim","depth":3,"parent":"norway/trondelag","children":["midtbyen","ya"]});
export const childModules = Object.freeze({"midtbyen":"./midtbyen/midtbyen.js","ya":"./ya/ya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
