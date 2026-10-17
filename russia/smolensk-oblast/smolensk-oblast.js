// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"smolensk-oblast","repository":"europe","path":"russia/smolensk-oblast","depth":2,"parent":"russia","children":["desnogorsk","gagarin","roslavl","safonovo","smolensk","vyaz-ma","yartsevo"]});
export const childModules = Object.freeze({"desnogorsk":"./desnogorsk/desnogorsk.js","gagarin":"./gagarin/gagarin.js","roslavl":"./roslavl/roslavl.js","safonovo":"./safonovo/safonovo.js","smolensk":"./smolensk/smolensk.js","vyaz-ma":"./vyaz-ma/vyaz-ma.js","yartsevo":"./yartsevo/yartsevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
