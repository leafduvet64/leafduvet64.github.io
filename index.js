
const Net = new globalThis.modules.net();
const ParamsManager = new globalThis.modules.paramsManager();

const domParser = new DOMParser();

onload = () => {
  var content = domParser.parseFromString(await Net.fetchFile('pages', ParamsManager.getParam('f')), 'text/html');
  document.body.append(content);
}