import{r as o,c as a,j as r,g as i}from"./index-tKRtgB90.js";import{M as s}from"./index--8iM7Qlq.js";import{T as m}from"./index-zycjR-EV.js";import"./core-EZc1KHj3.js";import"./CheckOutlined-g5MDPs9I.js";import"./EditOutlined-Z_c7PJKw.js";import"./styleChecker-ngeleDYd.js";import"./TextArea-hTdCA0yJ.js";import"./index-qxJHRbnC.js";const n=`
# h1

<br/>

## h2

<br/>

**Paragraph** Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

<br/>

[Link (https://www.google.com/)](https://www.google.com/)

<br/>

###### Lists

<br/>

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

<br/>

---

<br/>

###### A table:

<br/>

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

<br/>

\`\`\`tsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
);
\`\`\`

<br/>

![cover](https://res.cloudinary.com/trinhmai/image/upload/v1660897321/_minimal_mock/_Cover/cover_19.jpg)

> A block quote with ~~strikethrough~~ and a URL: [https://reactjs.org](https://reactjs.org).

`;function b(){const[t]=o.useState(n),{colorPrimary:e}=a();return r.jsxs(r.Fragment,{children:[r.jsx(m.Link,{href:"https://github.com/remarkjs/react-markdown",style:{color:e},className:"mb-4 block",children:"https://github.com/remarkjs/react-markdown"}),r.jsx(i,{title:"Mardown content",children:r.jsx(s,{children:t})})]})}export{b as default};
