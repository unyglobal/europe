// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"potsdam","repository":"europe","path":"germany/brandenburg/potsdam","depth":3,"parent":"germany/brandenburg","children":["nordliche-innenstadt","sudliche-innenstadt"]});
export const childModules = Object.freeze({"nordliche-innenstadt":"./nordliche-innenstadt/nordliche-innenstadt.js","sudliche-innenstadt":"./sudliche-innenstadt/sudliche-innenstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
