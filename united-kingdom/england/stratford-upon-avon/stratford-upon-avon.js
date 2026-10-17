// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stratford-upon-avon","repository":"europe","path":"united-kingdom/england/stratford-upon-avon","depth":3,"parent":"united-kingdom/england","children":["old-town","stratford"]});
export const childModules = Object.freeze({"old-town":"./old-town/old-town.js","stratford":"./stratford/stratford.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
