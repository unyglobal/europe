// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hohenems","repository":"europe","path":"austria/vorarlberg/hohenems","depth":3,"parent":"austria/vorarlberg","children":["im-tiergarten"]});
export const childModules = Object.freeze({"im-tiergarten":"./im-tiergarten/im-tiergarten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
