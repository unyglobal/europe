// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kreuzberg","repository":"europe","path":"germany/state-of-berlin/kreuzberg","depth":3,"parent":"germany/state-of-berlin","children":["carl-herz-ufer"]});
export const childModules = Object.freeze({"carl-herz-ufer":"./carl-herz-ufer/carl-herz-ufer.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
