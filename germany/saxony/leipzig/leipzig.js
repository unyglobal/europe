// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leipzig","repository":"europe","path":"germany/saxony/leipzig","depth":3,"parent":"germany/saxony","children":["zentrum","zentrum-west"]});
export const childModules = Object.freeze({"zentrum":"./zentrum/zentrum.js","zentrum-west":"./zentrum-west/zentrum-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
