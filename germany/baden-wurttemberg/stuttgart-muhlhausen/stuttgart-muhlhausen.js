// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stuttgart-muhlhausen","repository":"europe","path":"germany/baden-wurttemberg/stuttgart-muhlhausen","depth":3,"parent":"germany/baden-wurttemberg","children":["hofen","monchfeld"]});
export const childModules = Object.freeze({"hofen":"./hofen/hofen.js","monchfeld":"./monchfeld/monchfeld.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
