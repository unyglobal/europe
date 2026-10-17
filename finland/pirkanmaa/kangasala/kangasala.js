// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kangasala","repository":"europe","path":"finland/pirkanmaa/kangasala","depth":3,"parent":"finland/pirkanmaa","children":["huhmari","kirkonkyla"]});
export const childModules = Object.freeze({"huhmari":"./huhmari/huhmari.js","kirkonkyla":"./kirkonkyla/kirkonkyla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
