// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kholodna-hora","repository":"europe","path":"ukraine/kharkiv/kholodna-hora","depth":3,"parent":"ukraine/kharkiv","children":["lysa-hora"]});
export const childModules = Object.freeze({"lysa-hora":"./lysa-hora/lysa-hora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
