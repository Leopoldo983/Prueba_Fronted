const linksContainer = document.querySelector(".container_links")
const link_builder_component = document.querySelector(".link_builder_component")
const button = document.getElementById("button")
button.addEventListener("click", generateLink)

const urlApi = "https://t.ly/api/v1/link/shorten?api_token=b49RZCG1wyiERWGz5tzIwfdrOimNnEUD6WxTuGx1EZZlbjQBvy3WhMT2MXvf";

const inputValue = document.getElementById("inputValue");

function generateLink() {

//Data to send
    const data = {
        long_url: inputValue.value
    }
// config to fetch
    const otherPram = {
        headers: {
            "content-type": "application/json; charset=UFT-8"
        },
        body: JSON.stringify(data),
        method: "POST"
    }
//api request
    fetch(urlApi, otherPram)
        .then(data => { return data.json() })
        .then(function (data) {

//nodes creation
            article = document.createElement("article");
            article.classList.add("link")

            section1 = document.createElement("section");
            section1.classList.add("linkItem_firstSection");

            section1_p = document.createElement("p");
            section1_p_Text = document.createTextNode(inputValue.value)

            section2 = document.createElement("section");
            section2.classList.add("linkIteme_SecondSection");

            section2_Textarea = document.createElement("textarea");
            section2_Textarea.setAttribute("readonly", "readonly")
            section2_Textarea_Text = document.createTextNode(data.short_url);


            section2_button = document.createElement("button");
            section2__button_Text = document.createTextNode("copy")
            section2_button.addEventListener("click", Click)
            section2_button.onclick = "Click"



//appends
            section1_p.append(section1_p_Text)
            section2_Textarea.append(section2_Textarea_Text)
            section2_button.append(section2__button_Text)
            section1.append(section1_p)
            section2.append(section2_Textarea, section2_button)
            article.append(section1, section2)
            linksContainer.append(article)


// function to change text button and copy text

            function Click(section2_p_Text) {
                section2_button.removeChild(section2__button_Text);
                newChild = document.createTextNode("Copied!")
                section2_button.classList.add("copied")
                section2_button.append(newChild);
                section2_p_Text.path[1].children[0].focus()
                document.execCommand("selectAll")
                document.execCommand("copy");
            }
        }
        ).catch(error => {
            span = document.createElement("span");
            span_text = document.createTextNode("Please add a link")
            span.append(span_text)
            link_builder_component.append(span)
        })
}





