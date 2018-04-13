--reset file for tables with 3 rows of dummy data
drop table if exists houses;

create table houses(house_id serial primary key, property_name varchar, address varchar, city text, state text, zip integer);

insert into houses(property_name, address, city, state, zip)
values('Triplex', '4567 S Road St', 'Orem', 'UT', 84097);
insert into houses(property_name, address, city, state, zip)
values('Great Property', '1085 N 1100 W', 'Provo', 'UT', 84604);
insert into houses(property_name, address, city, state, zip)
values('Duplex', '456 E Bakers St', 'Salt Lake City', 'UT', 84091);
