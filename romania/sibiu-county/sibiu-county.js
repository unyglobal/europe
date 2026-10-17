// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sibiu-county","repository":"europe","path":"romania/sibiu-county","depth":2,"parent":"romania","children":["cisnadie","medias","sibiu"]});
export const childModules = Object.freeze({"cisnadie":"./cisnadie/cisnadie.js","medias":"./medias/medias.js","sibiu":"./sibiu/sibiu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
