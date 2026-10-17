// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tonbridge","repository":"europe","path":"united-kingdom/england/tonbridge","depth":3,"parent":"united-kingdom/england","children":["the-park"]});
export const childModules = Object.freeze({"the-park":"./the-park/the-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
