// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fejer","repository":"europe","path":"hungary/fejer","depth":2,"parent":"hungary","children":["dunaujvaros","szekesfehervar"]});
export const childModules = Object.freeze({"dunaujvaros":"./dunaujvaros/dunaujvaros.js","szekesfehervar":"./szekesfehervar/szekesfehervar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
