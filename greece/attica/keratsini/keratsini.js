// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"keratsini","repository":"europe","path":"greece/attica/keratsini","depth":3,"parent":"greece/attica","children":["amfiali","evgeneia"]});
export const childModules = Object.freeze({"amfiali":"./amfiali/amfiali.js","evgeneia":"./evgeneia/evgeneia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
