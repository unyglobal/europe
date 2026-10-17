// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ancona","repository":"europe","path":"italy/the-marches/ancona","depth":3,"parent":"italy/the-marches","children":["le-grazie-di-ancona"]});
export const childModules = Object.freeze({"le-grazie-di-ancona":"./le-grazie-di-ancona/le-grazie-di-ancona.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
