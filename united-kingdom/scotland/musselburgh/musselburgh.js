// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"musselburgh","repository":"europe","path":"united-kingdom/scotland/musselburgh","depth":3,"parent":"united-kingdom/scotland","children":["goose-green","lewisvale","pinkie"]});
export const childModules = Object.freeze({"goose-green":"./goose-green/goose-green.js","lewisvale":"./lewisvale/lewisvale.js","pinkie":"./pinkie/pinkie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
