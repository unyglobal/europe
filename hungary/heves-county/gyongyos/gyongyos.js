// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gyongyos","repository":"europe","path":"hungary/heves-county/gyongyos","depth":3,"parent":"hungary/heves-county","children":["farkasmaly"]});
export const childModules = Object.freeze({"farkasmaly":"./farkasmaly/farkasmaly.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
