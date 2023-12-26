function addSkill() {
  let skill = document.querySelector(".skill").value;
  const opinion = document.querySelector(".opinion").value;

  if (skill) {
    console.log(skill, opinion);

    // reset values
    document.querySelector(".skill").value = "";
    document.querySelector(".opinion").value = "confident";
  }
}
