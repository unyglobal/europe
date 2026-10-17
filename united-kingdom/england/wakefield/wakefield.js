// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wakefield","repository":"europe","path":"united-kingdom/england/wakefield","depth":3,"parent":"united-kingdom/england","children":["brooks-bank","new-brighton","primrose-hill","st-johns"]});
export const childModules = Object.freeze({"brooks-bank":"./brooks-bank/brooks-bank.js","new-brighton":"./new-brighton/new-brighton.js","primrose-hill":"./primrose-hill/primrose-hill.js","st-johns":"./st-johns/st-johns.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
