import ajaxService from "./ajaxService";

const GetCode = () =>
{
    document.querySelector('form').addEventListener("submit",(event) =>
    {
        event.preventDefault();
        const searchTerm = document.querySelector('#addressInput').value;
        console.log(searchTerm);
        let response;
        ajaxService(searchTerm).then(result=>response = result).then(()=>console.log(response)).then(()=>
        {
            document.querySelector("#postCodeResult").value = response.data[0].post_code;
            document.querySelector("#postCodeCity").value = response.data[0].city;
            document.querySelector("#postCodeMunicipality").value = response.data[0].municipality;
            document.querySelector("#postCodePost").value = response.data[0].post;
            document.querySelector("#postCodeStreet").value = response.data[0].street;
            document.querySelector("#postCodeFull").value = `${response.data[0].address}, ${response.data[0].city}, ${response.data[0].post_code}`
        })
    })
}
export default GetCode;