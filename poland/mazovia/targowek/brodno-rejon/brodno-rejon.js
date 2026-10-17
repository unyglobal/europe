// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brodno-rejon","repository":"europe","path":"poland/mazovia/targowek/brodno-rejon","depth":4,"parent":"poland/mazovia/targowek","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
