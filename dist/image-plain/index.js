(() => {
   // Interpreter unique name
   const name = 'image-plain';

   // Render function
   const render = (store) => {
      // Validation
      if (!store.title ||
          !store.body
      ) return 'Not valid store';

      // Create HTML structure
      const title = `<h1>${store.title}</h1>`;
      const body = `<div><img src="${store.body}" alt="" /></div>`;

      return `${title}${body}`;
   }

   // Declare as a loaded interpreter
   if(!window.iterations) window.iterations = {};
   if(!window.iterations.interpreters) window.iterations.interpreters = {};
   window.iterations.interpreters[name] = {
      render
   };
})();
