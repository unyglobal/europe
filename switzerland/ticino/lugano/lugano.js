// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lugano","repository":"europe","path":"switzerland/ticino/lugano","depth":3,"parent":"switzerland/ticino","children":["cassarate","lugano-centro","molino-nuovo","viganello"]});
export const childModules = Object.freeze({"cassarate":"./cassarate/cassarate.js","lugano-centro":"./lugano-centro/lugano-centro.js","molino-nuovo":"./molino-nuovo/molino-nuovo.js","viganello":"./viganello/viganello.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
