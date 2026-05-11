    onload = async () => {
      await fetch('./wu64.js').then(r=>{return r.text()}).then(async t=>{
        eval(t);
        var wu = globalThis.modules;
        await main()
      });
    }

    const main = async () => {
      const domParser = new DOMParser();
      const Net = new wu.Net();
      const ParamsManager = new wu.ParamsManager();
      
      var content = domParser.parseFromString(await Net.fetchFile('pages', `${ParamsManager.getParam('f')}.html`), 'text/html');
      console.log(content)
      document.body.append(content.body);
    }