// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"capital-region","repository":"europe","path":"iceland/capital-region","depth":2,"parent":"iceland","children":["hafnarfjor-ur","kopavogur","reykjavik"]});
export const childModules = Object.freeze({"hafnarfjor-ur":"./hafnarfjor-ur/hafnarfjor-ur.js","kopavogur":"./kopavogur/kopavogur.js","reykjavik":"./reykjavik/reykjavik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
