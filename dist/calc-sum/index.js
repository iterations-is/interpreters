(() => {
   // Interpreter unique name
   const name = 'calc-sum';

   // Render function
   const render = (store) => {
      // Validation
      if (!store.title ||
          !store.body
      ) return 'Not valid store';

      let arr = null;

      try {
         arr = JSON.parse(store.body);
      } catch (e) {
         return 'Not valid store';
      }

      if(!Array.isArray(arr) ||
         arr.some(isNaN)
      ) return 'Not valid store';


      const sum = store.body.reduce((acc, val) => acc + val);
      let bodyText = '';

      for (let number of arr)
         bodyText += `${number} +`;

      bodyText.slice(0, -1);
      bodyText += `= ${sum}`;

      // Create HTML structure
      const title = `<h1>${store.title}</h1>`;
      const body = `<p>${bodyText}</p>`;

      return `${title}${body}`;
   };

   // Declare as a loaded interpreter
   if(!window.iterations) window.iterations = {};
   if(!window.iterations.interpreters) window.iterations.interpreters = {};
   window.iterations.interpreters[name] = {
      render
   };
})();
