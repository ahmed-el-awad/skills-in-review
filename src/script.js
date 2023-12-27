function addSkill() {
  let skill = document.querySelector(".skill").value;
  const opinion = document.querySelector(".opinion").value;

  if (skill) {
    console.log(skill, opinion);

    // format
    /* 
    <div
      class="flex justify-between border-8 border-t-0 border-solid border-green-400 p-4"
    >
      <div>
        <p class="text-3xl">This is 40 chars input for demo purposes</p>
      </div>
      <p class="">😀</p>
    </div>
    */
    const parentDiv = document.createElement("div");
    const innerDiv = document.createElement("div");

    const pSkill = document.createElement("p");
    pSkill.innerHTML = skill;
    pSkill.classList.add("text-3xl");

    // TODO: make a function to return the correct emoji based on opinion
    const pOpinion = document.createElement("p");
    pOpinion.innerHTML = opinion;

    innerDiv.appendChild(pSkill);
    parentDiv.appendChild(innerDiv);
    parentDiv.appendChild(pOpinion);

    parentDiv.classList.add(
      "flex",
      "justify-between",
      "border-8",
      "border-t-0",
      "border-solid",
      "border-green-400",
      "p-4",
    );

    const main = document.querySelector("main");
    main.appendChild(parentDiv);
    console.log(main);

    // reset values
    document.querySelector(".skill").value = "";
    document.querySelector(".opinion").value = "confident";
  }
}
