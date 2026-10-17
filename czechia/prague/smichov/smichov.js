// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"smichov","repository":"europe","path":"czechia/prague/smichov","depth":3,"parent":"czechia/prague","children":["andel"]});
export const childModules = Object.freeze({"andel":"./andel/andel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
