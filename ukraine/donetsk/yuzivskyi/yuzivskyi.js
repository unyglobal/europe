// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yuzivskyi","repository":"europe","path":"ukraine/donetsk/yuzivskyi","depth":3,"parent":"ukraine/donetsk","children":["kalmiuskyi","nova-dilnytsya","sotsmistechko"]});
export const childModules = Object.freeze({"kalmiuskyi":"./kalmiuskyi/kalmiuskyi.js","nova-dilnytsya":"./nova-dilnytsya/nova-dilnytsya.js","sotsmistechko":"./sotsmistechko/sotsmistechko.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
