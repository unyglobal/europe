// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morley","repository":"europe","path":"united-kingdom/england/morley","depth":3,"parent":"united-kingdom/england","children":["america-moor","birks","burn-knolls","new-brighton","topcliffe","town-end","troy-hill","well-hill"]});
export const childModules = Object.freeze({"america-moor":"./america-moor/america-moor.js","birks":"./birks/birks.js","burn-knolls":"./burn-knolls/burn-knolls.js","new-brighton":"./new-brighton/new-brighton.js","topcliffe":"./topcliffe/topcliffe.js","town-end":"./town-end/town-end.js","troy-hill":"./troy-hill/troy-hill.js","well-hill":"./well-hill/well-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
