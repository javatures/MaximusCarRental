\c postgres

insert into cars (make, model, year, category)
values(
  'Toyota',
  'Camry',
  '2021',
  'Economy'
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/commerce/autodata/images/USD10TOC021F021001.jpg',
  '2021 Toyota Camry Front Exterior View',
  (select id from cars where model = 'Camry')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD10TOC021F021002.jpg',
  '2021 Toyota Camry Back Exterior View',
  (select id from cars where model = 'Camry')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD10TOC021F021012.jpg',
  '2021 Toyota Camry Front Interior View',
  (select id from cars where model = 'Camry')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD10TOC021F021028.jpg',
  '2021 Toyota Camry Interior Back View',
  (select id from cars where model = 'Camry')
);

insert into cars (make, model, year, category)
values(
  'Honda',
  'Civic',
  '2021',
  'Economy'
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90HOC021A121001.jpg',
  '2021 Honda Civic Front Exterior View',
  (select id from cars where model = 'Civic')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90HOC021A121002.jpg',
  '2021 Honda Civic Back Exterior View',
  (select id from cars where model = 'Civic')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90HOC021A121012.jpg',
  '2021 Honda Civic Front Interior View',
  (select id from cars where model = 'Civic')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90HOC021A121028.jpg',
  '2021 Honda Civic Interior Back View',
  (select id from cars where model = 'Civic')
);

insert into cars (make, model, year, category)
values(
  'Mercedes-Benz',
  'G-Class',
  '2021',
  'Luxury'
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90MBS231A021001.jpg',
  '2021 Mercedes-Benz G-Class Front Exterior View',
  (select id from cars where model = 'G-Class')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90MBS231A021002.jpg',
  '2021 Mercedes-Benz G-Class Back Exterior View',
  (select id from cars where model = 'G-Class')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90MBS231A021012.jpg',
  '2021 Mercedes-Benz G-Class Front Interior View',
  (select id from cars where model = 'G-Class')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90MBS231A021028.jpg',
  '2021 Mercedes-Benz G-Class Interior Back View',
  (select id from cars where model = 'G-Class')
);

insert into cars (make, model, year, category)
values(
  'BMW',
  'X5',
  '2021',
  'Luxury'
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90BMS191A021001.jpg',
  '2021 BMW X5 Front Exterior View',
  (select id from cars where model = 'X5')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90BMS191A021002.jpg',
  '2021 BMW X5 Back Exterior View',
  (select id from cars where model = 'X5')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90BMS191A021012.jpg',
  '2021 BMW X5 Front Interior View',
  (select id from cars where model = 'X5')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90BMS191A021028.jpg',
  '2021 BMW X5 Interior Back View',
  (select id from cars where model = 'X5')
);

insert into cars (make, model, year, category)
values(
  'Audi',
  'R8',
  '2021',
  'Sport'
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD00AUC172B021001.jpg',
  '2021 Audi R8 Front Exterior View',
  (select id from cars where model = 'R8')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD00AUC172B021002.jpg',
  '2021 Audi R8 Back Exterior View',
  (select id from cars where model = 'R8')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD00AUC172B021012_2.jpg',
  '2021 Audi R8 Front Interior View',
  (select id from cars where model = 'R8')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD00AUC172B021013_2.jpg',
  '2021 Audi R8 Interior Side View',
  (select id from cars where model = 'R8')
);

insert into cars (make, model, year, category)
values(
  'Acura',
  'NSX',
  '2021',
  'Sport'
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90ACC051A021001.jpg',
  '2021 Acura NSX Front Exterior View',
  (select id from cars where model = 'NSX')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90ACC051A021002.jpg',
  '2021 Acura NSX Back Exterior View',
  (select id from cars where model = 'NSX')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90ACC051A021012.jpg',
  '2021 Acura NSX Front Interior View',
  (select id from cars where model = 'NSX')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90ACC051A021013.jpg',
  '2021 Acura NSX Interior Side View',
  (select id from cars where model = 'NSX')
);

insert into cars (make, model, year, category)
values(
  'Ford',
  'F-150',
  '2021',
  'Towing and Hauling'
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD10FOT113A021001.jpg',
  '2021 Ford F-150 Front Exterior View',
  (select id from cars where model = 'F-150')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD10FOT113A021002.jpg',
  '2021 Ford F-150 Back Exterior View',
  (select id from cars where model = 'F-150')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD10FOT113A021012.jpg',
  '2021 Ford F-150 Front Interior View',
  (select id from cars where model = 'F-150')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USD10FOT113A021024.jpg',
  '2021 Ford F-150 Trunk View',
  (select id from cars where model = 'F-150')
);

insert into cars (make, model, year, category)
values(
  'Chevrolet',
  'Silverado 1500',
  '2021',
  'Towing and Hauling'
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90CHT272A021001.jpg',
  '2021 Chevrolet Silverado 1500 Front Exterior View',
  (select id from cars where model = 'Silverado 1500')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90CHT272A021002.jpg',
  '2021 Chevrolet Silverado 1500 Back Exterior View',
  (select id from cars where model = 'Silverado 1500')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90CHT272A021012.jpg',
  '2021 Chevrolet Silverado 1500 Front Interior View',
  (select id from cars where model = 'Silverado 1500')
);

insert into images (link, alt, car_id)
values(
  'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90CHT272A021024.jpg',
  '2021 Chevrolet Silverado 1500 Trunk View',
  (select id from cars where model = 'Silverado 1500')
);