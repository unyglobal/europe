// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"veszprem","repository":"europe","path":"hungary/veszprem","depth":2,"parent":"hungary","children":["ajka","papa","tapolca","varpalota"]});
export const childModules = Object.freeze({"ajka":"./ajka/ajka.js","papa":"./papa/papa.js","tapolca":"./tapolca/tapolca.js","varpalota":"./varpalota/varpalota.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
