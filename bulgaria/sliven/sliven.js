// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sliven","repository":"europe","path":"bulgaria/sliven","depth":2,"parent":"bulgaria","children":["nova-zagora"]});
export const childModules = Object.freeze({"nova-zagora":"./nova-zagora/nova-zagora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
