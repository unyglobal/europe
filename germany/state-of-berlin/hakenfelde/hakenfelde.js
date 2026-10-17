// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hakenfelde","repository":"europe","path":"germany/state-of-berlin/hakenfelde","depth":3,"parent":"germany/state-of-berlin","children":["haken-felde"]});
export const childModules = Object.freeze({"haken-felde":"./haken-felde/haken-felde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
