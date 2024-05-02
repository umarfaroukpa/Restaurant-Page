import { after } from "lodash";

const footerPage = (content) => {
    // const content = document.querySelector("#content")
    const footer = document.createElement("footer")

    footer.classList.add("footer-page")
    footer.innerHTML=`
    <div class="footer">
    <footer>Made By Umar Farouk Ilyas For Odin Project &copy;2024</footer>
    </div>
    `


    content.appendChild(footer)

};

export { footerPage };

