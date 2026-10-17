// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zurich","repository":"europe","path":"switzerland/zurich","depth":2,"parent":"switzerland","children":["adliswil","bulach","dietikon","dubendorf","horgen","kloten","opfikon","uster","wetzikon","winterthur"]});
export const childModules = Object.freeze({"adliswil":"./adliswil/adliswil.js","bulach":"./bulach/bulach.js","dietikon":"./dietikon/dietikon.js","dubendorf":"./dubendorf/dubendorf.js","horgen":"./horgen/horgen.js","kloten":"./kloten/kloten.js","opfikon":"./opfikon/opfikon.js","uster":"./uster/uster.js","wetzikon":"./wetzikon/wetzikon.js","winterthur":"./winterthur/winterthur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
