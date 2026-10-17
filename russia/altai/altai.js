// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"altai","repository":"europe","path":"russia/altai","depth":2,"parent":"russia","children":["gorno-altaysk","mayma"]});
export const childModules = Object.freeze({"gorno-altaysk":"./gorno-altaysk/gorno-altaysk.js","mayma":"./mayma/mayma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
