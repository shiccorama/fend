/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// ________ creation ______
    //document.body.appendChild(my_fragment);
const sections = document.querySelectorAll("section");
const all_ul = document.querySelector("ul");
const my_fragment = document.createDocumentFragment();
const back_to_top = document.getElementById("page-top");

// const first_span = document.createElement("span");
// const insert_text = first_span.createTextNode("here we are");
// const first_para = document.getElementById("first_para");
// first_para.appendChild(first_span);

// ________ appending ______



// ________ selection ______



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
sections.forEach(section => {
    // ________ creation ______

    const data_nav = section.getAttribute("data-nav");
    const section_id = section.getAttribute("id");
    const un_li = document.createElement("li");
    const anchors = document.createElement("a");
    anchors.classList.add("menu__link");
    anchors.setAttribute("href", section_id);

    // ______ add event listner _______
    anchors.addEventListener("click", e =>{
        e.preventDefault();
        section.scrollIntoView({behavior : "smooth"});
    });

    //    _______selection _______

    const anchor_title = document.createTextNode(data_nav);

    // ____ appending ______
    anchors.appendChild(anchor_title);
    un_li.appendChild(anchors);
    my_fragment.appendChild(un_li);
    

});

all_ul.appendChild(my_fragment);


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

window.addEventListener("scroll", ()=>{
    // _________ assign constants _________
    const active_sec = document.getElementsByClassName("your-active-class")[0];
    if(active_sec !== undefined){
        active_sec.classList.remove("your-active-class");
    }

    const active_nav_button = document.getElementsByClassName("active-button")[0];
    if(active_nav_button !== undefined){
        active_nav_button.classList.remove("active-button");
    }


// Build menu 

// Scroll to section on link click

// Set sections as active

sections.forEach(section => {
    const client_rect = section.getBoundingClientRect();
        if(client_rect.top >= -10 && client_rect.top < 400){
            section.classList.add("your-active-class");
            // set active-button navbar menu :

        const active_button = document.querySelectorAll(`a[href="${section.id}"]`)[0].parentElement;
        active_button.classList.add("active-button");


            if(section.id == "section1"){
                back_to_top.style.display = "none";
            }else{
                back_to_top.style.display = "block";
            }



        }

    })
});


