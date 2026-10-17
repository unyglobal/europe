// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"molodizhne","repository":"europe","path":"ukraine/poltava/molodizhne","depth":3,"parent":"ukraine/poltava","children":["297-y-kvartal"]});
export const childModules = Object.freeze({"297-y-kvartal":"./297-y-kvartal/297-y-kvartal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
