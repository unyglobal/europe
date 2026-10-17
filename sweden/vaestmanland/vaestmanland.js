// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaestmanland","repository":"europe","path":"sweden/vaestmanland","depth":2,"parent":"sweden","children":["koping","vasteras"]});
export const childModules = Object.freeze({"koping":"./koping/koping.js","vasteras":"./vasteras/vasteras.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
