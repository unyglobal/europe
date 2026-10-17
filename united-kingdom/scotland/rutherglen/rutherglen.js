// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rutherglen","repository":"europe","path":"united-kingdom/scotland/rutherglen","depth":3,"parent":"united-kingdom/scotland","children":["farm-cross","gallowflat"]});
export const childModules = Object.freeze({"farm-cross":"./farm-cross/farm-cross.js","gallowflat":"./gallowflat/gallowflat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
