
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('specs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('specs').insert([
      {vin:"1GNKVGED5CJ196120", make:"Chevrolet", model:"Traverse", mileage: 80450, transmission_type:"manual",title:null},
      {vin:"JH4KA7650NC040097", make:"Acura", model:"Legend", mileage: 251369, transmission_type:"automatic", title:"salvage"},
      {vin:"JHLRD68404C018253", make:"Honda" ,model:"CR V", mileage: 75294, transmission_type:"automatic", title:"unknown"},
      {vin:"5TEWN72N63Z275910", make:"Toyota", model:"Tacoma", mileage: 127456, transmission_type:"manual", title:null},
      {vin:"5FNRL382X7B001853", make:"Honda", model:"Odyssey", mileage: 96521, transmission_type:"automatic", title:"auction"},
      {vin:"2CNBJ13C3Y6924710", make:"Chevrolet", model:"Tracker", mileage: 197578, transmission_type:"manual", title:"salvage"},
      {vin:"5HD1CT3157K417590", make:"Harley Davidson", model:"Xl1200", mileage: 57203, transmission_type:"automatic", title:"new"},
      {vin:"3VWPG71K97M122542", make:"Volkswagen ", model:"Jetta", mileage: 42369, transmission_type:"automatic", title:"new"}
    ]);
    });
};