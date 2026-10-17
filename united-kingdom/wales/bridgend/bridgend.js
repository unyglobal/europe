// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bridgend","repository":"europe","path":"united-kingdom/wales/bridgend","depth":3,"parent":"united-kingdom/wales","children":["newcastle","tremains","ystrad-fawr"]});
export const childModules = Object.freeze({"newcastle":"./newcastle/newcastle.js","tremains":"./tremains/tremains.js","ystrad-fawr":"./ystrad-fawr/ystrad-fawr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
