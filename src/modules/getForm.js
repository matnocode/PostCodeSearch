const getForm = () =>
{
    return `
    <form>
  <div class="form-group">
    <label>Paieskos Adresas</label>
    <input type="text" class="form-control" id="addressInput" placeholder="Iveskite Adresa...">
    <small class="form-text text-muted">Vietos adresas is visos lietuvos</small>     
  </div>
  
  <button type="submit" class="btn btn-secondary">Gauti</button>
  
  <div class="form-group">
    <h3 style="text-align: center;">Rezultatas</h3>
    <hr>
     <label>Pasto Kodas</label>
     <input type="text" class="form-control" id="postCodeResult" placeholder="Gaunamas Pasto Kodas...">
     
     <label>Miestas</label>
     <input type="text" class="form-control" id="postCodeCity" placeholder="Gaunamas Miesto Pavadinimas...">
     
     <label>Savivaldybe</label>
      <input type="text" class="form-control" id="postCodeMunicipality" placeholder="Gaunamas Savivaldybes Pavadinimas...">
     
      <label>Pastas</label>
      <input type="text" class="form-control" id="postCodePost" placeholder="Gaunamas Pasto Pavadinimas...">
     
     <label>Gatve</label>
     <input type="text" class="form-control" id="postCodeStreet" placeholder="Gaunamas Gatves Pavadinimas...">
     
     <label>Pilnas Adresas</label>
     <input type="text" class="form-control" id="postCodeFull" placeholder="Laukiama...">
  </div>

</form>
    `;
}
export default getForm;