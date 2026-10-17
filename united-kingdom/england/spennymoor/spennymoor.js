// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"spennymoor","repository":"europe","path":"united-kingdom/england/spennymoor","depth":3,"parent":"united-kingdom/england","children":["low-spennymoor","merrington-lane","tudhoe-grange"]});
export const childModules = Object.freeze({"low-spennymoor":"./low-spennymoor/low-spennymoor.js","merrington-lane":"./merrington-lane/merrington-lane.js","tudhoe-grange":"./tudhoe-grange/tudhoe-grange.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
