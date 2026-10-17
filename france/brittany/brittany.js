// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brittany","repository":"europe","path":"france/brittany","depth":2,"parent":"france","children":["brest","cesson-sevigne","concarneau","douarnenez","fougeres","landerneau","lanester","lannion","lorient","morlaix","ploemeur","pontivy","quimper","rennes","saint-brieuc","saint-malo","vannes","vitre"]});
export const childModules = Object.freeze({"brest":"./brest/brest.js","cesson-sevigne":"./cesson-sevigne/cesson-sevigne.js","concarneau":"./concarneau/concarneau.js","douarnenez":"./douarnenez/douarnenez.js","fougeres":"./fougeres/fougeres.js","landerneau":"./landerneau/landerneau.js","lanester":"./lanester/lanester.js","lannion":"./lannion/lannion.js","lorient":"./lorient/lorient.js","morlaix":"./morlaix/morlaix.js","ploemeur":"./ploemeur/ploemeur.js","pontivy":"./pontivy/pontivy.js","quimper":"./quimper/quimper.js","rennes":"./rennes/rennes.js","saint-brieuc":"./saint-brieuc/saint-brieuc.js","saint-malo":"./saint-malo/saint-malo.js","vannes":"./vannes/vannes.js","vitre":"./vitre/vitre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
