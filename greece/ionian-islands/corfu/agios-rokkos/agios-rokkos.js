// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"agios-rokkos","repository":"europe","path":"greece/ionian-islands/corfu/agios-rokkos","depth":4,"parent":"greece/ionian-islands/corfu","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
