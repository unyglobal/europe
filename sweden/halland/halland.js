// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"halland","repository":"europe","path":"sweden/halland","depth":2,"parent":"sweden","children":["falkenberg","halmstad","kungsbacka","varberg"]});
export const childModules = Object.freeze({"falkenberg":"./falkenberg/falkenberg.js","halmstad":"./halmstad/halmstad.js","kungsbacka":"./kungsbacka/kungsbacka.js","varberg":"./varberg/varberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
