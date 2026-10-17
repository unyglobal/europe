// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leiria","repository":"europe","path":"portugal/leiria","depth":2,"parent":"portugal","children":["alcobaca","caldas-da-rainha","marinha-grande","peniche","pombal"]});
export const childModules = Object.freeze({"alcobaca":"./alcobaca/alcobaca.js","caldas-da-rainha":"./caldas-da-rainha/caldas-da-rainha.js","marinha-grande":"./marinha-grande/marinha-grande.js","peniche":"./peniche/peniche.js","pombal":"./pombal/pombal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
