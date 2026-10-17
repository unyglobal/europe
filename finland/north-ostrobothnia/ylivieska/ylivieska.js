// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ylivieska","repository":"europe","path":"finland/north-ostrobothnia/ylivieska","depth":3,"parent":"finland/north-ostrobothnia","children":["alpuminkangas","hakalahti","hannunpuhto","kaisaniemi"]});
export const childModules = Object.freeze({"alpuminkangas":"./alpuminkangas/alpuminkangas.js","hakalahti":"./hakalahti/hakalahti.js","hannunpuhto":"./hannunpuhto/hannunpuhto.js","kaisaniemi":"./kaisaniemi/kaisaniemi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
