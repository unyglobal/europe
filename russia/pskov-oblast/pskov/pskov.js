// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pskov","repository":"europe","path":"russia/pskov-oblast/pskov","depth":3,"parent":"russia/pskov-oblast","children":["gnilishche"]});
export const childModules = Object.freeze({"gnilishche":"./gnilishche/gnilishche.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
