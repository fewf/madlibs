Madlibs
=======

Markdown Madlibs for the web! 

Application development scaffolding provided by (https://github.com/newtriks/generator-react-webpack)[react-webpack]. Some scaffolding is going unused, like `tests/` but it could be helpful for further development.

How it works
------------

Right now the application is hard-coded to read a markdown file within the `src/madlibs/` folder. Using the webpack html and markdown loaders, the markdown file is parsed to HTML. Blanks to be filled-in are templated using a format like this: `%%noun%%`. Within React, those are found and presented to the user in a form to gather their input, which is actively escaped to prevent XSS. On form submit, the madlib blanks are filled in and the story is shown to the user!

Further Development
-------------------
- Provide a collection of Madlibs in `.md` format and allow the user to choose, or perhaps even easier, they can paste into a text-area their own markdown madlibs.
- More validation on user input: length, capitalization, etc.
- Super fancy: use a Parts-of-Speech parser to validate user input.
- Blog integration: allow user to publish their madlib to a blog.