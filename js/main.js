const $container = document.querySelector(".container");
const $scholarships = document.getElementById("scholarships");
const $wuilt = document.getElementById("wuilt");
const $words = document.getElementById("words");
const $todos = document.getElementById("todos");
const scholarships = [
  {
    title: "FWD Web",
    link: "https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2",
  },
  {
    title: "FWD Marketing",
    link: "https://classroom.udacity.com/me",
    notes: [
      "https://academy.hubspot.com/",
      "plan , create ,distribute , anazize , repeat",
      "content formats",
      "target persona",
      "https://i4d9k9u7.rocketcdn.me/wp-content/uploads/2019/06/identify-target-audience-with-buyer-persona-768x436.png",
    ],
  },
  {
    title: "FWD Data",
    link: "https://classroom.udacity.com/me",
  },
  {
    title: "Mobile Web Specialist Pluralsight",
    link:
      "https://app.pluralsight.com/channels/details/723b7f1d-0937-43fd-bddf-8d0e6c93900f",
  },
];
const wuilt = [
  {
    title: "zoho",
    link: "https://desk.zoho.com/support/wuilt/ShowHomePage.do#Cases",
  },
  {
    title: "github",
    link: "https://github.com/wuilt",
  },
  {
    title: "slack",
    link: "https://app.slack.com/client/T5MBA3HUM/C5M8H2Z2N",
  },
  {
    title: "backoffice",
    link: "https://backoffice.wuilt.ws/clients/page/1",
  },
];

const words = ["persona", "barriers", "Rubric"];
const todos = ["design patterns", "clean code", "EgyptJS"];
function generateList(title = "list", items) {
  const div = document.createElement("div");
  div.classList.add("list");

  const h1 = document.createElement("h1");
  h1.innerHTML = title.toUpperCase();

  const ol = document.createElement("ol");
  ol.setAttribute("id", title);

  items.forEach((item) => {
    const li = document.createElement("li");

    // string
    if (typeof item == "string") {
      li.innerText = item;
      ol.append(li);
      div.append(h1);
      div.append(ol);
      $container.append(div);
      return;
    }

    // object
    const { title, link, notes } = item;
    const a = document.createElement("a");
    if (link) {
      a.setAttribute("href", link);
      a.setAttribute("target", "_blank");
    }
    a.innerText = title;
    li.append(a);
    const ul = document.createElement("ul");
    if (notes && notes.length) {
      notes.forEach((note) => {
        let li = document.createElement("li");
        li.innerText = note;
        ul.append(li);
      });
    }

    li.append(ul);
    ol.append(li);
    div.append(h1);
    div.append(ol);

    $container.append(div);
  });
}

generateList("wuilt", wuilt);
generateList("scholarships", scholarships);
generateList("words", words);
generateList("todos", todos);
