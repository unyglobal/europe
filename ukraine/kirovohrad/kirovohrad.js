// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirovohrad","repository":"europe","path":"ukraine/kirovohrad","depth":2,"parent":"ukraine","children":["dolynska","fortechnyi","kropyvnytskyi","novoukrayinka","oleksandriya","podilskyi","svitlovodsk","znamyanka"]});
export const childModules = Object.freeze({"dolynska":"./dolynska/dolynska.js","fortechnyi":"./fortechnyi/fortechnyi.js","kropyvnytskyi":"./kropyvnytskyi/kropyvnytskyi.js","novoukrayinka":"./novoukrayinka/novoukrayinka.js","oleksandriya":"./oleksandriya/oleksandriya.js","podilskyi":"./podilskyi/podilskyi.js","svitlovodsk":"./svitlovodsk/svitlovodsk.js","znamyanka":"./znamyanka/znamyanka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
