const noDataMessage = document.querySelector("#no-notes-message");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const notesContainer = document.querySelector(".notes");
const archivesContainer = document.querySelector(".archives");
const addBtn = document.getElementById("add");
const priority = document.querySelector("select");
const archivesBtn = document.getElementById("archives");

notes = [];

loadNotes();

function addNote() {
  if (!title.value.trim()) {
    noDataMessage.innerHTML = `note cannot be empty.`;
    return;
  }

  const newNote = {
    title: title.value,
    desc: desc.value,
    priority: priority.value,
    date: new Date().toDateString(),
  };

  notes.push(newNote);
  saveNote();

  renderNotes();
  noDataMessage.innerHTML = "";

  title.value = "";
  desc.value = "";
}

addBtn.addEventListener("click", addNote);

function saveNote() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  notesContainer.innerHTML = "";

  if (notes.length === 0) {
    noDataMessage.innerHTML = "no notes to load.";
  }

  notes.forEach((note, index) => {
    notesContainer.innerHTML += `
      <article class="note">
      <h3 class="note-title">${note.title}</h3>
      <div class="note-divider"></div>
        <p class="note-desc">${note.desc}</p>
        <div class="badge-container">
        <span class="badge ${getBadgeClass(note.priority)}">${
      note.priority
    } 🎯</span>
        </div>
    <img src="assets/delete.svg" data-index="${index}" class="delete" alt="${
      note.title
    }"
      </article>
    `;
  });
}

function loadNotes() {
  const stored = JSON.parse(localStorage.getItem("notes")) || [];
  notes = stored;
  renderNotes();
}

function getBadgeClass(priority) {
  if (priority === "High") return "high";

  if (priority === "Medium") return "medium";

  if (priority === "Low") return "low";
  else return "unknown";
}

function getArchives() {
  notesContainer.innerHTML = "";
}

archivesBtn.addEventListener("click", () => {
  getArchives();
});

function deleteNote(note) {
  localStorage.removeItem(note);
}

notesContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const index = event.target.dataset.index;

    notes.splice(index, 1);
    saveNote();
    renderNotes();
  }
});
