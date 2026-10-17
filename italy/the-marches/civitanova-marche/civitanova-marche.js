// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"civitanova-marche","repository":"europe","path":"italy/the-marches/civitanova-marche","depth":3,"parent":"italy/the-marches","children":["porto-civitanova"]});
export const childModules = Object.freeze({"porto-civitanova":"./porto-civitanova/porto-civitanova.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
