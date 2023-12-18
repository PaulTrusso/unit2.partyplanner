const app = document.getElementById('events');
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/events`;

const state = {
    events: [],
};

const eventsList = document.querySelector('#partyList');



const deleteEvent = async (e) => {
    const user_id = e.target.id;
    try {
        const response = await fetch(
            `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/events/${user_id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
            const result = await response;
            console.log("Success", result);
            render();
    }  catch (error) {
        console.error("Error:", error);
      }
};





// async function render() {
//     await getEvents();
//     renderEvents();
// }
// render();

async function getEvents() {
    try {
        const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json.data);
    state.events = json.data;
  } catch (error) {
    console.error(error);
    }
}
const render = async () => {
    try {
      const response = await fetch(
        'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/events' ,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const result = await response.json();
      result.data.forEach((element) => {

        const div = document.createElement("div");
        div.style.margin = "5%";
  
        const pName = document.createElement("p");
        pName.innerHTML = `Name: ${element.name}`;
        div.appendChild(pName);
  
        const pDate = document.createElement("p");
        pDate.innerHTML = `Date: ${element.date}`;
        div.appendChild(pDate);
  
        const pDescription = document.createElement("p");
        pDescription.innerHTML = `Description: ${element.description}`;
        div.appendChild(pDescription);
  
        const pLocation = document.createElement("p");
        pLocation.innerHTML = `Location: ${element.location}`;
        div.appendChild(pLocation);
  
        const button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = element._id;
        button.addEventListener("click", deleteEvent);
        div.appendChild(button);
        app.appendChild(div);
    });
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

render();















// function renderEvents(){

    // if (!state.events.length) {
    //     eventsList.innerHTML = "<li>No Events.</li>";
    //     return;
    //   }
  
    //   const eventsCards = state.events.map((events) => {
    //     const li = document.createElement("li");
    //     li.innerHTML = `
    //       <h2>${events.name}</h2>
    //       <img src="${events.imageUrl}" alt="${events.name}" />
    //       <p>${events.description}</p>
    //     `;
    //     return li;
    //   });
  
    //   eventsList.replaceChildren(...eventsCards);
// }    const result = await response.json();
