// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fier-county","repository":"europe","path":"albania/fier-county","depth":2,"parent":"albania","children":["fier","fier-cifci","lushnje","patos","patos-fshat"]});
export const childModules = Object.freeze({"fier":"./fier/fier.js","fier-cifci":"./fier-cifci/fier-cifci.js","lushnje":"./lushnje/lushnje.js","patos":"./patos/patos.js","patos-fshat":"./patos-fshat/patos-fshat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
