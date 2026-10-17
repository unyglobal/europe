// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tonypandy","repository":"europe","path":"united-kingdom/wales/tonypandy","depth":3,"parent":"united-kingdom/wales","children":["trealaw"]});
export const childModules = Object.freeze({"trealaw":"./trealaw/trealaw.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
