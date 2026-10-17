// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaluga-oblast","repository":"europe","path":"russia/kaluga-oblast","depth":2,"parent":"russia","children":["balabanovo","kaluga","kozel-sk","lyudinovo","maloyaroslavets","obninsk","sukhinichi"]});
export const childModules = Object.freeze({"balabanovo":"./balabanovo/balabanovo.js","kaluga":"./kaluga/kaluga.js","kozel-sk":"./kozel-sk/kozel-sk.js","lyudinovo":"./lyudinovo/lyudinovo.js","maloyaroslavets":"./maloyaroslavets/maloyaroslavets.js","obninsk":"./obninsk/obninsk.js","sukhinichi":"./sukhinichi/sukhinichi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
