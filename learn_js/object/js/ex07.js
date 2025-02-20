const posts = [
  {
    title: "Tiêu đề bài viết 1",
    image:
      "https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },

  {
    title: "Tiêu đề bài viết 2",
    image:
      "https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },

  {
    title: "Tiêu đề bài viết 3",
    image:
      "https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },

  {
    title: "Tiêu đề bài viết 4",
    image:
      "https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },

  {
    title: "Tiêu đề bài viết 5",
    image:
      "https://fastly.picsum.photos/id/223/536/354.jpg?hmac=-b1ZzaPJzoKI2MeDwuhFxq5haxwKO6WiL4Jdo7BC_O4",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error veniam dolorum nostrum commodi voluptatum fuga officia quod quasi alias explicabo voluptatem suscipit, vero nemo perferendis earum dolor sed iste.`,
  },
];

const html = `
<div class="posts">
    ${posts
      .map((post, index) => {
        return `
         <div class="post-item ${index % 2 !== 0 ? "post-right" : ""}">
            <img src="${post.image}"/>
            <div>
                <h2>${post.title}</h2>
                <p>${post.description}</p>
            </div>
         </div>
        `;
      })
      .join("")}
</div>
`;

document.write(html);

// console.log(
//   posts
//     .map((post, index) => {
//       return `
//        <div class="post-item ${index % 2 !== 0 ? "post-right" : ""}">
//           <img src="${post.image}"/>
//           <div>
//               <h2>${post.title}</h2>
//               <p>${post.description}</p>
//           </div>
//        </div>
//       `;
//     })
//     .join("")
// );

// for (let i = 0; i < posts.length; i++) {
//     document.write(`<h2>${posts[i].title}</h2>`  + "<br>" + `<img src="${posts[i].image}" > `  + "<br>" + "Mô tả:" + posts[i].description)
// }
