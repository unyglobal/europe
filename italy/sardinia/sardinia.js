// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sardinia","repository":"europe","path":"italy/sardinia","depth":2,"parent":"italy","children":["alghero","assemini","cagliari","carbonia","iglesias","monserrato","monte-rosello","nuoro","olbia","oristano","porto-torres","quartu-sant-elena","sassari","selargius","sestu","sinnai"]});
export const childModules = Object.freeze({"alghero":"./alghero/alghero.js","assemini":"./assemini/assemini.js","cagliari":"./cagliari/cagliari.js","carbonia":"./carbonia/carbonia.js","iglesias":"./iglesias/iglesias.js","monserrato":"./monserrato/monserrato.js","monte-rosello":"./monte-rosello/monte-rosello.js","nuoro":"./nuoro/nuoro.js","olbia":"./olbia/olbia.js","oristano":"./oristano/oristano.js","porto-torres":"./porto-torres/porto-torres.js","quartu-sant-elena":"./quartu-sant-elena/quartu-sant-elena.js","sassari":"./sassari/sassari.js","selargius":"./selargius/selargius.js","sestu":"./sestu/sestu.js","sinnai":"./sinnai/sinnai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
