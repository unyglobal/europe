// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chechnya","repository":"europe","path":"russia/chechnya","depth":2,"parent":"russia","children":["achkhoy-martan","argun","avtury","grozny","gudermes","kurchaloy","shali","tsotsin-yurt","urus-martan"]});
export const childModules = Object.freeze({"achkhoy-martan":"./achkhoy-martan/achkhoy-martan.js","argun":"./argun/argun.js","avtury":"./avtury/avtury.js","grozny":"./grozny/grozny.js","gudermes":"./gudermes/gudermes.js","kurchaloy":"./kurchaloy/kurchaloy.js","shali":"./shali/shali.js","tsotsin-yurt":"./tsotsin-yurt/tsotsin-yurt.js","urus-martan":"./urus-martan/urus-martan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
