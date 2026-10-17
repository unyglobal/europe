// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"navarre","repository":"europe","path":"spain/navarre","depth":2,"parent":"spain","children":["baranain","burlata","ermitagana","iturrama","pamplona","primer-ensanche","segundo-ensanche","tudela"]});
export const childModules = Object.freeze({"baranain":"./baranain/baranain.js","burlata":"./burlata/burlata.js","ermitagana":"./ermitagana/ermitagana.js","iturrama":"./iturrama/iturrama.js","pamplona":"./pamplona/pamplona.js","primer-ensanche":"./primer-ensanche/primer-ensanche.js","segundo-ensanche":"./segundo-ensanche/segundo-ensanche.js","tudela":"./tudela/tudela.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
