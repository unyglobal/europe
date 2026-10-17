// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"livoberezhnyi","repository":"europe","path":"ukraine/donetsk/livoberezhnyi","depth":3,"parent":"ukraine/donetsk","children":["pervomaisk"]});
export const childModules = Object.freeze({"pervomaisk":"./pervomaisk/pervomaisk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
