
// 5. import the code from the node modules + create the function /use it
import MarkdownIt from 'markdown-it'; //require-relative/download all the code in this specific file


const initMarkdown = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = new MarkdownIt(); //create the obejct of mardwon

  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    preview.innerHTML = html;
  });
};

// 6. export the function to be able to import it and call it inside of the index.js
export { initMarkdown }
