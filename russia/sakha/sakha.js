// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sakha","repository":"europe","path":"russia/sakha","depth":2,"parent":"russia","children":["aldan","aykhal","lensk","mirny","neryungri","udachny","yakutsk"]});
export const childModules = Object.freeze({"aldan":"./aldan/aldan.js","aykhal":"./aykhal/aykhal.js","lensk":"./lensk/lensk.js","mirny":"./mirny/mirny.js","neryungri":"./neryungri/neryungri.js","udachny":"./udachny/udachny.js","yakutsk":"./yakutsk/yakutsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
