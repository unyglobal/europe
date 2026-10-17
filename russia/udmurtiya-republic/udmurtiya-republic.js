// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"udmurtiya-republic","repository":"europe","path":"russia/udmurtiya-republic","depth":2,"parent":"russia","children":["balezino","glazov","igra","izhevsk","mozhga","sarapul","uva","votkinsk"]});
export const childModules = Object.freeze({"balezino":"./balezino/balezino.js","glazov":"./glazov/glazov.js","igra":"./igra/igra.js","izhevsk":"./izhevsk/izhevsk.js","mozhga":"./mozhga/mozhga.js","sarapul":"./sarapul/sarapul.js","uva":"./uva/uva.js","votkinsk":"./votkinsk/votkinsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
