// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leiderdorp","repository":"europe","path":"netherlands/south-holland/leiderdorp","depth":3,"parent":"netherlands/south-holland","children":["binnenhof","zulkwartier"]});
export const childModules = Object.freeze({"binnenhof":"./binnenhof/binnenhof.js","zulkwartier":"./zulkwartier/zulkwartier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
