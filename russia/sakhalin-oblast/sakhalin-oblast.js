// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sakhalin-oblast","repository":"europe","path":"russia/sakhalin-oblast","depth":2,"parent":"russia","children":["kholmsk","korsakov","nevel-sk","okha","poronaysk","yuzhno-sakhalinsk"]});
export const childModules = Object.freeze({"kholmsk":"./kholmsk/kholmsk.js","korsakov":"./korsakov/korsakov.js","nevel-sk":"./nevel-sk/nevel-sk.js","okha":"./okha/okha.js","poronaysk":"./poronaysk/poronaysk.js","yuzhno-sakhalinsk":"./yuzhno-sakhalinsk/yuzhno-sakhalinsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
