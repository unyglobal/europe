// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sevilla","repository":"europe","path":"spain/andalusia/sevilla","depth":3,"parent":"spain/andalusia","children":["ciudad-jardin","el-plantinar","giralda-sur","huerta-de-santa-teresa","huerta-del-pilar","la-buhaira","la-calzada","la-florida","nervion","san-bernardo"]});
export const childModules = Object.freeze({"ciudad-jardin":"./ciudad-jardin/ciudad-jardin.js","el-plantinar":"./el-plantinar/el-plantinar.js","giralda-sur":"./giralda-sur/giralda-sur.js","huerta-de-santa-teresa":"./huerta-de-santa-teresa/huerta-de-santa-teresa.js","huerta-del-pilar":"./huerta-del-pilar/huerta-del-pilar.js","la-buhaira":"./la-buhaira/la-buhaira.js","la-calzada":"./la-calzada/la-calzada.js","la-florida":"./la-florida/la-florida.js","nervion":"./nervion/nervion.js","san-bernardo":"./san-bernardo/san-bernardo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
