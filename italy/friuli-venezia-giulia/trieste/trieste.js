// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trieste","repository":"europe","path":"italy/friuli-venezia-giulia/trieste","depth":3,"parent":"italy/friuli-venezia-giulia","children":["barriera-nuova","barriera-vecchia","citta-nuova","citta-vecchia","san-giacomo","san-vito"]});
export const childModules = Object.freeze({"barriera-nuova":"./barriera-nuova/barriera-nuova.js","barriera-vecchia":"./barriera-vecchia/barriera-vecchia.js","citta-nuova":"./citta-nuova/citta-nuova.js","citta-vecchia":"./citta-vecchia/citta-vecchia.js","san-giacomo":"./san-giacomo/san-giacomo.js","san-vito":"./san-vito/san-vito.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
