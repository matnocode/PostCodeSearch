import getForm from "./getForm";

const renderForm = () =>
{
    let element = document.createElement("test");
    element.className="container test"
    element.innerHTML = getForm();
    console.log("??")
    document.querySelector(".data-body").appendChild(element);
}
export default renderForm;