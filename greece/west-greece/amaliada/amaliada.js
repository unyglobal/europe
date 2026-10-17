// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amaliada","repository":"europe","path":"greece/west-greece/amaliada","depth":3,"parent":"greece/west-greece","children":["kafka"]});
export const childModules = Object.freeze({"kafka":"./kafka/kafka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
