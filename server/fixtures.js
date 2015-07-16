
if (Buildings.find().count() === 0 ) {
  Buildings.insert({
    bname: 'cuatro36',
    url: 'http://www.4gradosparavivir.com/'
  });
}

if (Spots.find().count() === 0 ) {
    Spots.insert({
      pnumber: 'Parking Spot 001',
      url: '',
      status: 'Ocupied',
      bname: 'cuatro36'
    });
    Spots.insert({
      pnumber: 'Parking Spot 002',
      url: '',
      status: 'Ocupied',
      bname: 'cuatro36'
    });
    Spots.insert({
      pnumber: 'Parking Spot 003',
      url: '',
      status: 'Ocupied',
      bname: 'cuatro36'
    });
}
