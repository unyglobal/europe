// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"turda","repository":"europe","path":"romania/cluj-county/turda","depth":3,"parent":"romania/cluj-county","children":["canepesti","craciunesti","hotar-maracineni","piatra-harcana","ploscos-mic","valea-calda"]});
export const childModules = Object.freeze({"canepesti":"./canepesti/canepesti.js","craciunesti":"./craciunesti/craciunesti.js","hotar-maracineni":"./hotar-maracineni/hotar-maracineni.js","piatra-harcana":"./piatra-harcana/piatra-harcana.js","ploscos-mic":"./ploscos-mic/ploscos-mic.js","valea-calda":"./valea-calda/valea-calda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
