// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pontoise","repository":"europe","path":"france/ile-de-france/pontoise","depth":3,"parent":"france/ile-de-france","children":["centre-ville"]});
export const childModules = Object.freeze({"centre-ville":"./centre-ville/centre-ville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
