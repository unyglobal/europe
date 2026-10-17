// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grosseto","repository":"europe","path":"italy/tuscany/grosseto","depth":3,"parent":"italy/tuscany","children":["borgo-tripoli","pace","porta-nuova","porta-vecchia","villaggio-azzurro"]});
export const childModules = Object.freeze({"borgo-tripoli":"./borgo-tripoli/borgo-tripoli.js","pace":"./pace/pace.js","porta-nuova":"./porta-nuova/porta-nuova.js","porta-vecchia":"./porta-vecchia/porta-vecchia.js","villaggio-azzurro":"./villaggio-azzurro/villaggio-azzurro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
