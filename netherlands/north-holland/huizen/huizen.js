// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huizen","repository":"europe","path":"netherlands/north-holland/huizen","depth":3,"parent":"netherlands/north-holland","children":["huizermaat"]});
export const childModules = Object.freeze({"huizermaat":"./huizermaat/huizermaat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
