// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asturias","repository":"europe","path":"spain/asturias","depth":2,"parent":"spain","children":["aviles","corvera-de-asturias","gijon","la-felguera","mieres","natahoyo","oviedo","sama"]});
export const childModules = Object.freeze({"aviles":"./aviles/aviles.js","corvera-de-asturias":"./corvera-de-asturias/corvera-de-asturias.js","gijon":"./gijon/gijon.js","la-felguera":"./la-felguera/la-felguera.js","mieres":"./mieres/mieres.js","natahoyo":"./natahoyo/natahoyo.js","oviedo":"./oviedo/oviedo.js","sama":"./sama/sama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
