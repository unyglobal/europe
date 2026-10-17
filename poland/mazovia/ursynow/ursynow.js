// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ursynow","repository":"europe","path":"poland/mazovia/ursynow","depth":3,"parent":"poland/mazovia","children":["stary-imielin","ursynow-centrum"]});
export const childModules = Object.freeze({"stary-imielin":"./stary-imielin/stary-imielin.js","ursynow-centrum":"./ursynow-centrum/ursynow-centrum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
