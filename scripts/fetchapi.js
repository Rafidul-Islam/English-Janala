//Creating a mother container for level by words.Mistake: i was creating it for each click rather than onece.So my data was created each time.
const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main-container");
//------------------------------------------------------------------------------

//getting the mainContainer which holds the words container and append them to banner-3
const banner2 = document.getElementById("banner-2");
banner2.appendChild(mainContainer);

//Showing lesson levels
const showLevels = (levels) => {
  const levelContainer = document.getElementById("level-button-container");
  for (let level of levels) {
    const button = document.createElement("button");
    button.innerHTML = `<p><i class="ri-book-open-line"></i> Lesson - ${level.level_no}</p>`;
    button.classList.add("btn", "buttons");
    levelContainer.appendChild(button);
    button.setAttribute("id", `level-${level.level_no}`);

    //Showing lessons level ends here
    //------------------------------------------------------------------------------

    // What happens when we click on each lesson button
    button.addEventListener("click", () => {
      //Loading the word for each level
      const loadWordsObject = async () => {
        // handling if the level is not selected
        document.getElementById("not-loaded-section").style.display = "none";

        // Clear previous word containers
        mainContainer.innerHTML = "";
        try {
          const spinner = document.getElementById("spinner");
          spinner.classList.remove("hidden"); // Fetching each level data by id
          const response = await fetch(
            `https://openapi.programming-hero.com/api/level/${level.level_no}`
          );
          const apiObject = await response.json();
          // console.log(apiObject);

          //getting the words array data.here the words objects are in an array
          const wordsArray = apiObject.data;

          //creating a container that holds all words.the main container.
          const wordsContainer = document.createElement("div");

          //Appending all the word in a paragraph by creating p element for each word object
          wordsArray.forEach((wordObject) => {
            // console.log(wordObject.id);
            const wordContainer = document.createElement("div");
            //setting html for word container
            wordContainer.innerHTML = `
          <p class="font-siliguri font-bold text-xl">${wordObject.word}</p>
          <p class="font-siliguri text-xs font-semibold">Meaning / Pronounciation</p>
          <p class="font-siliguri text-xl mt-2">"${wordObject.meaning} / ${wordObject.pronunciation}"</p>
          <div class="flex justify-between px-15 ">
            <button  class="btn text-xl info"><i class="ri-information-fill"></i></button>
            <button  class="btn text-xl sound"><i class="ri-volume-up-fill"></i></button>
          </div>
          `;
            wordContainer.setAttribute("class", `word-container space-y-3`);
            // Appending the wordContainer to the words container
            wordsContainer.appendChild(wordContainer);
            wordsContainer.setAttribute("id", `level-${wordObject.level}`);
            wordsContainer.setAttribute(
              "class",
              `words-container level-${wordObject.level}`
            );
          });

          // Appending the WordsContainer into the Main-container
          mainContainer.appendChild(wordsContainer);

          // Adding Modal For each word Container
          const infoButtons = document.querySelectorAll(".info");
          const soundButtons = document.querySelectorAll(".sound");
          const simillarWordContainer =
            document.getElementById("simillar-Words");

          infoButtons.forEach((btn, index) => {
            btn.addEventListener("click", async () => {
              simillarWordContainer.innerHTML = "";
              const wordObject = wordsArray[index];
              const response = await fetch(
                `https://openapi.programming-hero.com/api/word/${wordObject.id}`
              );
              const data = await response.json();
              const word = data.data;
              const synonyms = word.synonyms;

              document.getElementById(
                "modal-word"
              ).innerHTML = ` ${word.word} (<i class="ri-mic-line"></i> ${word.pronunciation} )`;
              document.getElementById("modal-meaning").textContent =
                word.meaning;
              document.getElementById("Example").textContent = word.sentence;
              if (synonyms.length === 0) {
                synonyms.forEach((synonym) => {
                  span.textContent = "No synonyms found";
                  span.classList.add(
                    "btn",
                    "btn-sm",
                    "hover:bg-blue-700",
                    "hover:text-white"
                  );

                  document.getElementById("simillar-Words").appendChild(span);
                });
              }
              synonyms.forEach((synonym) => {
                const span = document.createElement("span");
                span.textContent = synonym;
                span.classList.add(
                  "btn",
                  "btn-sm",
                  "bg-blue-100",
                  "hover:bg-blue-700",
                  "hover:text-white"
                );
                document.getElementById("simillar-Words").appendChild(span);
              });

              document.getElementById("word-modal").classList.remove("hidden");
            });
          });

          soundButtons.forEach((btn, index) => {
            btn.addEventListener("click", async () => {
              const wordObject = wordsArray[index];
              const response = await fetch(
                `https://openapi.programming-hero.com/api/word/${wordObject.id}`
              );
              const data = await response.json();
              const word = data.data;
              pronounceWord(word.word);
            });
          });

          function pronounceWord(word) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = "en-EN"; // English
            window.speechSynthesis.speak(utterance);
          }

          // Closing Modal
          document
            .getElementById("close-modal")
            .addEventListener("click", () => {
              document.getElementById("word-modal").classList.add("hidden");
            });

          //if there is no words in the level what will happen
          // console.log(wordsArray.length);
          if (wordsArray.length === 0) {
            document.getElementById("not-loaded-section").style.display =
              "flex";
            document.getElementById("not-loaded-section").innerHTML = `
          <img src="assets/alert-error.png" alt="" class="block mx-auto">
          <p class="text-gray-700 text-xs">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
          </p>
          <p class="text-3xl font-semibold">নেক্সট Lesson এ যান</p>`;
          }
        } catch (error) {
          console.log(error);
        } finally {
          spinner.classList.add("hidden");
        }
      };

      //calling this function to load the words api
      loadWordsObject();
    });
    //Button Click Ends here
    //-------------------------------------------------------------------------------------
  }
};

// Fetching Levels Data And Showig It
const levels = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/levels/all"
  );
  const levels = await response.json();
  showLevels(levels.data);
};
//------------------------------------------------------------------------------
//Calling the masterMind
levels();
