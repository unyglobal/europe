// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imperia","repository":"europe","path":"italy/liguria/imperia","depth":3,"parent":"italy/liguria","children":["oneglia"]});
export const childModules = Object.freeze({"oneglia":"./oneglia/oneglia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
