// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yamalo-nenets","repository":"europe","path":"russia/yamalo-nenets","depth":2,"parent":"russia","children":["gubkinskiy","labytnangi","muravlenko","nadym","novyy-urengoy","noyabrsk","salekhard","tarko-sale"]});
export const childModules = Object.freeze({"gubkinskiy":"./gubkinskiy/gubkinskiy.js","labytnangi":"./labytnangi/labytnangi.js","muravlenko":"./muravlenko/muravlenko.js","nadym":"./nadym/nadym.js","novyy-urengoy":"./novyy-urengoy/novyy-urengoy.js","noyabrsk":"./noyabrsk/noyabrsk.js","salekhard":"./salekhard/salekhard.js","tarko-sale":"./tarko-sale/tarko-sale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
