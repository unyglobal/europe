// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"epe","repository":"europe","path":"netherlands/gelderland/epe","depth":3,"parent":"netherlands/gelderland","children":["burgerenk","hoge-land"]});
export const childModules = Object.freeze({"burgerenk":"./burgerenk/burgerenk.js","hoge-land":"./hoge-land/hoge-land.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
