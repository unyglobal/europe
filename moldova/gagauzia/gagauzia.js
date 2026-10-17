// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gagauzia","repository":"europe","path":"moldova/gagauzia","depth":2,"parent":"moldova","children":["ceadir-lunga","comrat"]});
export const childModules = Object.freeze({"ceadir-lunga":"./ceadir-lunga/ceadir-lunga.js","comrat":"./comrat/comrat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
