const $links = document.getElementById("links");
const $name = document.querySelector("h2");
const $nickname = document.getElementById('nickname')
const $avatar = document.querySelector('img')
const $description = document.querySelector('p')
const $footer = document.querySelector('footer')

const data = {
  name: "Sara Lawrence",
  nickname: "@saralawrence",
  description: "Frontend developer, tech blogger & content creator. Sharing tips about React, TailwindCSS, and productivity for developers.",
  avatar: "../assets/photo.avif",
  footer: "Made with love from india.",
  social: [
    {
      name: "X",
      url: "https://x.com/saralawrence",
      username: "",
    },
    {
      name: "Github",
      url: "https://github.com/saralawrence",
      username: "",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saralawrence",
      username: "",
    },
  ],
  links: [
    {
      name: "Blog",
      url: "https://blog.saralawrence.dev",
      color: "yellow",
      emoji: "📝",
    },
    {
      name: "Podcast",
      url: "https://podcasts.saralawrence.dev",
      color: "blue",
      emoji: "🎙️",
    },
    {
      name: "Discord",
      url: "https://discord.gg/example",
      color: "purple",
      emoji: "💬",
    },
    {
      name: "Cursos",
      url: "https://cursos.saralawrence.dev",
      color: "green",
      emoji: "📚",
    },
    {
      name: "Sponsors",
      url: "https://sponsors.saralawrence.dev",
      color: "red",
      emoji: "🤝",
    },
  ],
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let nickname = document.createTextNode(data?.nickname)
  let description = document.createTextNode(data?.description)
  let footer = document.createTextNode(data?.footer)
  let links = data?.links?.map((link) => {
    return `
    <a href=${link.url} target="_blank" class="block bg-${link.color}-400 hover:bg-${link.color}-300 transition flex justify-between items-center p-4">
    <h2 class="text-xl font-bold text-${link.color}-700">${link.name}</h2>
    <span class="text-xl font-bold">${link.emoji}</span>
    </a>
    `;
  }).join("")
  let newItem = document.createElement('section')
  newItem.innerHTML = links
  $links.appendChild(newItem)
  $name.appendChild(name)
  $nickname.appendChild(nickname)
  $description.appendChild(description)
  $footer.appendChild(footer)
  $avatar.src = data?.avatar
};
main()