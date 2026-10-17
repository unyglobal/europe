// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uster","repository":"europe","path":"switzerland/zurich/uster","depth":3,"parent":"switzerland/zurich","children":["kirchuster","oberuster","rehbuel-hegetsberg","uster-kirch-uster","uster-nossikon","uster-ober-uster"]});
export const childModules = Object.freeze({"kirchuster":"./kirchuster/kirchuster.js","oberuster":"./oberuster/oberuster.js","rehbuel-hegetsberg":"./rehbuel-hegetsberg/rehbuel-hegetsberg.js","uster-kirch-uster":"./uster-kirch-uster/uster-kirch-uster.js","uster-nossikon":"./uster-nossikon/uster-nossikon.js","uster-ober-uster":"./uster-ober-uster/uster-ober-uster.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
