// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"penza-oblast","repository":"europe","path":"russia/penza-oblast","depth":2,"parent":"russia","children":["kamenka","kuznetsk","nikol-sk","nizhniy-lomov","penza","serdobsk"]});
export const childModules = Object.freeze({"kamenka":"./kamenka/kamenka.js","kuznetsk":"./kuznetsk/kuznetsk.js","nikol-sk":"./nikol-sk/nikol-sk.js","nizhniy-lomov":"./nizhniy-lomov/nizhniy-lomov.js","penza":"./penza/penza.js","serdobsk":"./serdobsk/serdobsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
