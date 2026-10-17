// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"corfu","repository":"europe","path":"greece/ionian-islands/corfu","depth":3,"parent":"greece/ionian-islands","children":["agios-rokkos"]});
export const childModules = Object.freeze({"agios-rokkos":"./agios-rokkos/agios-rokkos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
