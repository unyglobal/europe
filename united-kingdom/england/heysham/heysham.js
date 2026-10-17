// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heysham","repository":"europe","path":"united-kingdom/england/heysham","depth":3,"parent":"united-kingdom/england","children":["higher-heysham","lower-heysham"]});
export const childModules = Object.freeze({"higher-heysham":"./higher-heysham/higher-heysham.js","lower-heysham":"./lower-heysham/lower-heysham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
