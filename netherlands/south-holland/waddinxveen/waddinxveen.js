// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"waddinxveen","repository":"europe","path":"netherlands/south-holland/waddinxveen","depth":3,"parent":"netherlands/south-holland","children":["groenswaard","oranjewijk"]});
export const childModules = Object.freeze({"groenswaard":"./groenswaard/groenswaard.js","oranjewijk":"./oranjewijk/oranjewijk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
