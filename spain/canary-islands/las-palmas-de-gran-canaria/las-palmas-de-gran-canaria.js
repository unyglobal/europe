// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-palmas-de-gran-canaria","repository":"europe","path":"spain/canary-islands/las-palmas-de-gran-canaria","depth":3,"parent":"spain/canary-islands","children":["triana","vegueta"]});
export const childModules = Object.freeze({"triana":"./triana/triana.js","vegueta":"./vegueta/vegueta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
