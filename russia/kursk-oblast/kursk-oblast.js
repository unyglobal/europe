// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kursk-oblast","repository":"europe","path":"russia/kursk-oblast","depth":2,"parent":"russia","children":["kurchatov","kursk","l-govskiy","ryl-sk","shchigry"]});
export const childModules = Object.freeze({"kurchatov":"./kurchatov/kurchatov.js","kursk":"./kursk/kursk.js","l-govskiy":"./l-govskiy/l-govskiy.js","ryl-sk":"./ryl-sk/ryl-sk.js","shchigry":"./shchigry/shchigry.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
