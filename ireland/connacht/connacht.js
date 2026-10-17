// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"connacht","repository":"europe","path":"ireland/connacht","depth":2,"parent":"ireland","children":["galway","sligo"]});
export const childModules = Object.freeze({"galway":"./galway/galway.js","sligo":"./sligo/sligo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
