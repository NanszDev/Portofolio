function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  const content = document.getElementById("mainContent");

  sidebar.classList.toggle("active");
  content.classList.toggle("shift");
}
function aktif(element){

  document.getElementById("home").classList.remove("activer");
  document.getElementById("about").classList.remove("activer");
  document.getElementById("contact").classList.remove("activer");
  document.getElementById("skill").classList.remove("activer");
  document.getElementById("project").classList.remove("activer");
  document.getElementById("feedback").classList.remove("activer");

  element.classList.add("activer");
}