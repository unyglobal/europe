// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"greenock","repository":"europe","path":"united-kingdom/scotland/greenock","depth":3,"parent":"united-kingdom/scotland","children":["central","charing-cross","cornhaddock"]});
export const childModules = Object.freeze({"central":"./central/central.js","charing-cross":"./charing-cross/charing-cross.js","cornhaddock":"./cornhaddock/cornhaddock.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
