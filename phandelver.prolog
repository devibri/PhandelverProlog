:- set_prolog_flag(double_quotes, atom).

% The characters in the world.
:- dynamic(character/1).
character(toblin_stonehill).
character(elmar_barthen).
character(daren_edermath).
character(linene_graywind).
character(halia_thornton).
character(qelline_alderleaf).
character(sister_garaele).
character(harbin_wester).
character(sildar_hallwinter).
character(narth).
character(redbrands).
character(elsa).
character(lanar).
character(trilena).
character(pip).
character(freda).
character(ander).
character(thistle).
character(grista).
character(carp).
character(agatha).
character(reidoth).
character(gundren_rockseeker).
character(hamun).
character(droop).
character(party).

:- dynamic(first_name/2).
first_name(toblin_stonehill, toblin).
first_name(elmar_barthen, elmar).
first_name(daren_edermath, daren).
first_name(linene_graywind, linene).
first_name(halia_thornton, halia).
first_name(qelline_alderleaf, qelline).
first_name(sister_garaele, sister).
first_name(harbin_wester, harbin).
first_name(sildar_hallwinter, sildar).
first_name(narth, narth).
first_name(redbrands, redbrands).
first_name(elsa, elsa).
first_name(lanar, lanar).
first_name(trilena, trilena).
first_name(pip, pip).
first_name(freda, freda).
first_name(ander, ander).
first_name(thistle, thistle).
first_name(grista, grista).
first_name(carp, carp).
first_name(agatha, agatha).
first_name(reidoth, reidoth).
first_name(gundren_rockseeker, gundren).
first_name(hamun, hamun).
first_name(droop, droop).

:- dynamic(last_name/2).
last_name(toblin_stonehill, stonehill).
last_name(elmar_barthen, barthen).
last_name(daren_edermath, edermath).
last_name(linene_graywind, graywind).
last_name(halia_thornton, thorton).
last_name(qelline_alderleaf, alderleaf).
last_name(sister_garaele, garaele).
last_name(harbin_wester, wester).
last_name(sildar_hallwinter, hallwinter).
last_name(gundren_rockseeker, rockseeker).

:- dynamic(occupation/2).
occupation(toblin_stonehill, "Innkeeper").
occupation(elmar_barthen, "Owns trading post").
occupation(daren_edermath, "Retired adventurer").
occupation(linene_graywind, "Runs trading post").
occupation(halia_thornton, "Runs Phandalin Miner's Exchange").
occupation(qelline_alderleaf, "Halfling farmer").
occupation(sister_garaele, "Elf cleric of Tymora").
occupation(harbin_wester, "Townmaster of Phandalin").
occupation(narth, "Farmer").

:- dynamic(status/2).
status(toblin_stonehill, alive).
status(elmar_barthen, alive).
status(daren_edermath, alive).
status(linene_graywind, alive).
status(halia_thornton, alive).
status(qelline_alderleaf, alive).
status(sister_garaele, alive).
status(harbin_wester, alive).
status(sildar_hallwinter, alive).
status(narth, alive).
status(redbrands, alive).
status(elsa, alive).
status(lanar, alive).
status(trilena, alive).
status(pip, alive).
status(freda, alive).
status(ander, alive).
status(thistle, alive).
status(grista, alive).
status(carp, alive).
status(agatha, alive).
status(reidoth, alive).
status(gundren_rockseeker, alive).
status(hamun, alive).
status(droop, alive).

% Has met the party 
:- dynamic(met/2).
met(toblin_stonehill, true).
met(elmar_barthen, false).
met(daren_edermath, false).
met(linene_graywind, false).
met(halia_thornton, false).
met(qelline_alderleaf, false).
met(sister_garaele, false).
met(harbin_wester, false).
met(sildar_hallwinter, true).
met(narth, false).
met(redbrands, false).
met(elsa, false).
met(lanar, false).
met(trilena, false).
met(pip, false).
met(freda, false).
met(ander, false).
met(thistle, false).
met(grista, false).
met(carp, false).
met(agatha, false).
met(reidoth, false).
met(gundren_rockseeker, false).
met(hamun, false).
met(droop, false).

:- dynamic(faction/2).
faction(daren_edermath, "Order of the Gauntlet").
faction(halia_thornton, "Zhentarim").
faction(sister_garaele, "Harper").
faction(sildar_hallwinter, "Lords' Alliance").
faction(redbrands, "Redbrands").

:- dynamic(friend_of/2).
friend_of(qelline_alderleaf, reidoth).
friend_of(pip, carp).

:- dynamic(family_of/2).
family_of(carp, qelline_alderleaf).

% Information the character knows about
:- dynamic(knows_info/2).
knows_info(toblin_stonehill, redbrand_hangout).
knows_info(elmar_barthen, redbrand_shakedown).
knows_info(daren_edermath, redbrand_hideout_location).
knows_info(daren_edermath, get_rid_of_redbrands).
knows_info(daren_edermath, digging_old_owl_well).
knows_info(halia_thornton, goblin_cragmaw_castle).
knows_info(halia_thornton, kill_redbrand_leader).
knows_info(qelline_alderleaf, reidoth_location).
knows_info(sister_garaele, ask_agatha_about_book).
knows_info(harbin_wester, orcs_triboar_trail).
knows_info(harbin_wester, townmaster_and_redbrands).
knows_info(sildar_hallwinter, missing_iarno).
knows_info(narth, sister_garaele_exhausted).
knows_info(lanar, orcs_triboar_trail).
knows_info(trilena, dendrar_family_kidnapped).
knows_info(pip, secret_tunnel_knowledge).
knows_info(freda, redbrands_and_halia).
knows_info(carp, redbrand_hideout_location).
knows_info(carp, secret_tunnel_location).
knows_info(agatha, agatha_info).
knows_info(reidoth, green_dragon).
knows_info(gundren_rockseeker, wave_echo_cave_map).
knows_info(hamun, hamun_quest).
knows_info(hamun, finish_hamun_quest).
knows_info(droop, redbrand_minion_info).

% The regions in the world 
:- dynamic(region/1).
region(phandalin).
region(countryside).
region(thundertree).
region(cragmaw_castle).
region(wave_echo_cave).

% The locations in the world.
:- dynamic(location/1).
location(stonehill_inn).
location(lionshield_coster).
location(barthens_provisions).
location(townmasters_hall).
location(stonehill_inn).
location(lionshield_coster).
location(barthens_provisions).
location(townmasters_hall).
location(shrine_of_luck).
location(sleeping_giant_tap_house).
location(edermath_orchard).
location(tresendar_manor).
location(old_owl_well).
location(phandalin_miners_exchange).
location(alderleaf_farm).
location(thundertree).
location(agathas_lair).
location(orc_camp).
location(cragmaw_castle).
location(wave_echo_cave).

:- dynamic(location_name/2).
location_name(stonehill_inn, "The Stonehill Inn").
location_name(lionshield_coster, "Lionshield Coster").
location_name(barthens_provisions, "Barthen's Provisions").
location_name(townmasters_hall, "Townmaster's Hall").
location_name(shrine_of_luck, "Shrine of Luck").
location_name(sleeping_giant_tap_house, "Sleeping Giant tap house").
location_name(edermath_orchard, "Edermath Orchard").
location_name(tresendar_manor, "Tresendar Manor").
location_name(old_owl_well, "Old Owl Well").
location_name(phandalin_miners_exchange, "Phandalin Miner's Exchange").
location_name(alderleaf_farm, "Alderleaf Farm").
location_name(thundertree, "Thundertree").
location_name(agathas_lair, "Agatha's Lair").
location_name(orc_camp, "Orc Camp at Triboar Trail").
location_name(cragmaw_castle, "Cragmaw Castle").
location_name(wave_echo_cave, "Wave Echo Cave").

:- dynamic(location_known/2).
location_known(stonehill_inn, true).
location_known(lionshield_coster, true).
location_known(barthens_provisions, true).
location_known(townmasters_hall, true).
location_known(shrine_of_luck, true).
location_known(sleeping_giant_tap_house, true).
location_known(edermath_orchard, true).
location_known(tresendar_manor, false).
location_known(old_owl_well, false).
location_known(phandalin_miners_exchange, true).
location_known(alderleaf_farm, true).
location_known(thundertree, false).
location_known(agathas_lair, false).
location_known(orc_camp, true).
location_known(cragmaw_castle, false).
location_known(wave_echo_cave, false).

:- dynamic(location_in_region/2).
location_in_region(stonehill_inn, phandalin).
location_in_region(lionshield_coster, phandalin).
location_in_region(barthens_provisions, phandalin).
location_in_region(townmasters_hall, phandalin).
location_in_region(shrine_of_luck, phandalin).
location_in_region(sleeping_giant_tap_house, phandalin).
location_in_region(edermath_orchard, phandalin).
location_in_region(tresendar_manor, phandalin).
location_in_region(old_owl_well, countryside).
location_in_region(phandalin_miners_exchange, phandalin).
location_in_region(alderleaf_farm, phandalin).
location_in_region(thundertree, thundertree).
location_in_region(agathas_lair, countryside).
location_in_region(orc_camp, countryside).
location_in_region(cragmaw_castle, cragmaw_castle).
location_in_region(wave_echo_cave, wave_echo_cave).

:- dynamic(in_location/2).
in_location(party, stonehill_inn).