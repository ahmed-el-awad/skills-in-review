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
      <div class="flex items-center">
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

    const pOpinion = document.createElement("p");
    pOpinion.innerHTML = returnEmoji(opinion);

    innerDiv.classList.add("flex", "items-center");

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

    twemoji.parse(document.body);

    // reset values
    document.querySelector(".skill").value = "";
    document.querySelector(".opinion").value = "confident";
  }
}

// TODO: revamp opinions and emojis
function returnEmoji(opinion) {
  switch (opinion) {
    case "confident":
      return "😎";
    case "love":
      return "😍";
    case "adore":
      return "🥺";
    case "dislike":
      return "👎";
    default:
      return "💀";
  }
}
