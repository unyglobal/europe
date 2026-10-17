// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"porsgrunn","repository":"europe","path":"norway/telemark/porsgrunn","depth":3,"parent":"norway/telemark","children":["hovenga","moldhaugen","vestsida"]});
export const childModules = Object.freeze({"hovenga":"./hovenga/hovenga.js","moldhaugen":"./moldhaugen/moldhaugen.js","vestsida":"./vestsida/vestsida.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
