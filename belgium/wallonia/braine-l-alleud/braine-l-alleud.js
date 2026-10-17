// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"braine-l-alleud","repository":"europe","path":"belgium/wallonia/braine-l-alleud","depth":3,"parent":"belgium/wallonia","children":["estree","flohaye","hauts-tiennes","neuville","paradis","planche-au-pecheur"]});
export const childModules = Object.freeze({"estree":"./estree/estree.js","flohaye":"./flohaye/flohaye.js","hauts-tiennes":"./hauts-tiennes/hauts-tiennes.js","neuville":"./neuville/neuville.js","paradis":"./paradis/paradis.js","planche-au-pecheur":"./planche-au-pecheur/planche-au-pecheur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
