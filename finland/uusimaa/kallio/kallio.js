// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kallio","repository":"europe","path":"finland/uusimaa/kallio","depth":3,"parent":"finland/uusimaa","children":["linjat","torkelsbacken"]});
export const childModules = Object.freeze({"linjat":"./linjat/linjat.js","torkelsbacken":"./torkelsbacken/torkelsbacken.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
