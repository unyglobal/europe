// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belgium","repository":"europe","path":"belgium","depth":1,"parent":"","children":["brussels-capital","flanders","wallonia"]});
export const childModules = Object.freeze({"brussels-capital":"./brussels-capital/brussels-capital.js","flanders":"./flanders/flanders.js","wallonia":"./wallonia/wallonia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
