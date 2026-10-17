// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"munich","repository":"europe","path":"germany/bavaria/munich","depth":3,"parent":"germany/bavaria","children":["altstadt","angerviertel","gartnerplatz","glockenbach","graggenau","hackenviertel","isarvorstadt","kreuzviertel","schonfeldvorstadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js","angerviertel":"./angerviertel/angerviertel.js","gartnerplatz":"./gartnerplatz/gartnerplatz.js","glockenbach":"./glockenbach/glockenbach.js","graggenau":"./graggenau/graggenau.js","hackenviertel":"./hackenviertel/hackenviertel.js","isarvorstadt":"./isarvorstadt/isarvorstadt.js","kreuzviertel":"./kreuzviertel/kreuzviertel.js","schonfeldvorstadt":"./schonfeldvorstadt/schonfeldvorstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
