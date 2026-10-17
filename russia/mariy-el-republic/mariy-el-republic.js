// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mariy-el-republic","repository":"europe","path":"russia/mariy-el-republic","depth":2,"parent":"russia","children":["koz-modem-yansk","medvedevo","volzhsk","yoshkar-ola"]});
export const childModules = Object.freeze({"koz-modem-yansk":"./koz-modem-yansk/koz-modem-yansk.js","medvedevo":"./medvedevo/medvedevo.js","volzhsk":"./volzhsk/volzhsk.js","yoshkar-ola":"./yoshkar-ola/yoshkar-ola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
