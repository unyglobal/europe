// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buxton","repository":"europe","path":"united-kingdom/england/buxton","depth":3,"parent":"united-kingdom/england","children":["higher-buxton","the-park"]});
export const childModules = Object.freeze({"higher-buxton":"./higher-buxton/higher-buxton.js","the-park":"./the-park/the-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
