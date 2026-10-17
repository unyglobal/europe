// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"llanelli","repository":"europe","path":"united-kingdom/wales/llanelli","depth":3,"parent":"united-kingdom/wales","children":["bigyn","mount-pleasant","sandy","wern"]});
export const childModules = Object.freeze({"bigyn":"./bigyn/bigyn.js","mount-pleasant":"./mount-pleasant/mount-pleasant.js","sandy":"./sandy/sandy.js","wern":"./wern/wern.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
