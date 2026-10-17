// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vestfold","repository":"europe","path":"norway/vestfold","depth":2,"parent":"norway","children":["horten","larvik","sandefjord","t-nsberg"]});
export const childModules = Object.freeze({"horten":"./horten/horten.js","larvik":"./larvik/larvik.js","sandefjord":"./sandefjord/sandefjord.js","t-nsberg":"./t-nsberg/t-nsberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
