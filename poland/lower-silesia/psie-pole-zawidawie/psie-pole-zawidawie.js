// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"psie-pole-zawidawie","repository":"europe","path":"poland/lower-silesia/psie-pole-zawidawie","depth":3,"parent":"poland/lower-silesia","children":["psie-pole-po-noc","psie-pole-po-udnie-kie-czow"]});
export const childModules = Object.freeze({"psie-pole-po-noc":"./psie-pole-po-noc/psie-pole-po-noc.js","psie-pole-po-udnie-kie-czow":"./psie-pole-po-udnie-kie-czow/psie-pole-po-udnie-kie-czow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
