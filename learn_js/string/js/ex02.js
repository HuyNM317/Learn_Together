let content = `text ever since lorem the Lorem Ipsum is simply dummy text of the printing and lOrem typesetting industry. Lorem Ipsum has been the industloremry's standard dummy text ever since Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta eaque officiis mollitia id molestiae atque. Aut, ipsam, est dicta voluptatibus laudantium alias ea officia illum aspernatur sint quis accusamus? LOrem the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived lorem not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

let keyword = "loRem";

let result = "";

let position = content.toLowerCase().indexOf(keyword.toLowerCase());

console.log(position);

console.log(keyword);

while (position !== -1) {
  result +=
    content.slice(0, position) +
    ` <span style="color: red;"> ${content.slice(
      position,
      position + keyword.length
    )} </span> `;
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}

result += content;

document.write(result);
