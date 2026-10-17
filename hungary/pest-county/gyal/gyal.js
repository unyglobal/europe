// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gyal","repository":"europe","path":"hungary/pest-county/gyal","depth":3,"parent":"hungary/pest-county","children":["facanosdulo","jalicsholdas","jalicsparcella","mezossytanya"]});
export const childModules = Object.freeze({"facanosdulo":"./facanosdulo/facanosdulo.js","jalicsholdas":"./jalicsholdas/jalicsholdas.js","jalicsparcella":"./jalicsparcella/jalicsparcella.js","mezossytanya":"./mezossytanya/mezossytanya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
