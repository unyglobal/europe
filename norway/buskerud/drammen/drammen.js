// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"drammen","repository":"europe","path":"norway/buskerud/drammen","depth":3,"parent":"norway/buskerud","children":["bragernes","str-ms"]});
export const childModules = Object.freeze({"bragernes":"./bragernes/bragernes.js","str-ms":"./str-ms/str-ms.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
