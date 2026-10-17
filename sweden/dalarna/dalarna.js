// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dalarna","repository":"europe","path":"sweden/dalarna","depth":2,"parent":"sweden","children":["borlange","falun","ludvika"]});
export const childModules = Object.freeze({"borlange":"./borlange/borlange.js","falun":"./falun/falun.js","ludvika":"./ludvika/ludvika.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
