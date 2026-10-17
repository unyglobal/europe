// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pontypridd","repository":"europe","path":"united-kingdom/wales/pontypridd","depth":3,"parent":"united-kingdom/wales","children":["graigwen","maesycoed","penygraigwen","pwll-gwaun"]});
export const childModules = Object.freeze({"graigwen":"./graigwen/graigwen.js","maesycoed":"./maesycoed/maesycoed.js","penygraigwen":"./penygraigwen/penygraigwen.js","pwll-gwaun":"./pwll-gwaun/pwll-gwaun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
