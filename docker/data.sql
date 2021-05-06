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