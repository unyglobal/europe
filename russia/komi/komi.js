// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"komi","repository":"europe","path":"russia/komi","depth":2,"parent":"russia","children":["ezhva","inta","pechora","sosnogorsk","syktyvkar","ukhta","usinsk","vorgashor","vorkuta","yemva"]});
export const childModules = Object.freeze({"ezhva":"./ezhva/ezhva.js","inta":"./inta/inta.js","pechora":"./pechora/pechora.js","sosnogorsk":"./sosnogorsk/sosnogorsk.js","syktyvkar":"./syktyvkar/syktyvkar.js","ukhta":"./ukhta/ukhta.js","usinsk":"./usinsk/usinsk.js","vorgashor":"./vorgashor/vorgashor.js","vorkuta":"./vorkuta/vorkuta.js","yemva":"./yemva/yemva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
