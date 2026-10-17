// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"remseck-am-neckar","repository":"europe","path":"germany/baden-wurttemberg/remseck-am-neckar","depth":3,"parent":"germany/baden-wurttemberg","children":["neckargroningen","neckarrems"]});
export const childModules = Object.freeze({"neckargroningen":"./neckargroningen/neckargroningen.js","neckarrems":"./neckarrems/neckarrems.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
