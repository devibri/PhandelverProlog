% The characters in the world.
:- dynamic(character/1).
character(toblin_stonehill).
character(elmar_barthen).
character(daren_edermath).
character(linene_graywind).

:- dynamic(first_name/2).
first_name(toblin_stonehill, toblin).
first_name(elmar_barthen, elmar).
first_name(daren_edermath, daren).
first_name(linene_graywind, linene).

:- dynamic(last_name/2).
last_name(toblin_stonehill, stonehill).
last_name(elmar_barthen, barthen).
last_name(daren_edermath, edermath).
last_name(linene_graywind, graywind).
