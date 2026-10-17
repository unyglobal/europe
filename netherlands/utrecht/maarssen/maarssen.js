// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maarssen","repository":"europe","path":"netherlands/utrecht/maarssen","depth":3,"parent":"netherlands/utrecht","children":["zandweg-oostwaard"]});
export const childModules = Object.freeze({"zandweg-oostwaard":"./zandweg-oostwaard/zandweg-oostwaard.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
