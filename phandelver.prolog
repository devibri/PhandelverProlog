:- set_prolog_flag(double_quotes, atom).

:- dynamic(character_info_list/2).
character_info_list(toblin_stonehill, [first_name, last_name, status, occupation]).
character_info_list(elmar_barthen, [first_name, last_name, status]).

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
:- dynamic(met_party/1).
met_party(toblin_stonehill).

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
location_known(stonehill_inn).
location_known(lionshield_coster).
location_known(barthens_provisions).
location_known(townmasters_hall).
location_known(shrine_of_luck).
location_known(sleeping_giant_tap_house).
location_known(edermath_orchard).
location_known(phandalin_miners_exchange).
location_known(alderleaf_farm).


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
in_location(stonehill_inn, toblin_stonehill).
in_location(stonehill_inn, narth).
in_location(stonehill_inn, elsa).
in_location(stonehill_inn, lanar).
in_location(stonehill_inn, trilena).
in_location(stonehill_inn, pip).
in_location(stonehill_inn, freda).
in_location(lionshield_coster, linene_graywind).
in_location(barthens_provisions, elmar_barthen).
in_location(barthens_provisions, ander).
in_location(barthens_provisions, thistle).
in_location(townmasters_hall, harbin_wester).
in_location(shrine_of_luck, sister_garaele).
in_location(sleeping_giant_tap_house, grista).
in_location(sleeping_giant_tap_house, redbrands).
in_location(edermath_orchard, daren_edermath).
in_location(tresendar_manor, droop).
in_location(old_owl_well, hamun).
in_location(phandalin_miners_exchange, halia_thornton).
in_location(alderleaf_farm, qelline_alderleaf).
in_location(alderleaf_farm, carp).
in_location(thundertree, reidoth).
in_location(agathas_lair, agatha).

:- dynamic(visited/1).
visited(stonehill_inn).

:- dynamic(info/1).
info(redbrand_hideout_location).
info(secret_tunnel_location).
info(secret_tunnel_knowledge).
info(orcs_triboar_trail).
info(dendrar_family_kidnapped).
info(redbrands_and_halia).
info(redbrand_hangout).
info(sister_garaele_exhausted).
info(goblin_cragmaw_castle).
info(kill_redbrand_leader).
info(get_rid_of_redbrands).
info(digging_old_owl_well).
info(ask_agatha_about_book).
info(missing_iarno).
info(townmaster_and_redbrands).
info(redbrand_shakedown).
info(reidoth_location).
info(agatha_info).
info(green_dragon).
info(wave_echo_cave_map).
info(hamun_quest).
info(redbrand_minion_info).
info(learn_about_redbrands).
info(find_redbrands).
info(find_cragmaw_castle).
info(find_wave_echo_cave).
info(remove_orc_camp).
info(finish_hamun_quest).
info(learn_tower_maker).

:- dynamic(info_desc/2).
info_desc(redbrand_hideout_location, "The Redbrand hideout is at Tresendar Manor").
info_desc(secret_tunnel_location, "The Redbrand hideout has a secret tunnel entrance located near Tresendar Manor").
info_desc(secret_tunnel_knowledge, "Carp at Alderleaf Farm saw a secret tunnel in the woods; the Redbrands almost caught him").
info_desc(orcs_triboar_trail, "The townmaster wants someone to deal with the orcs around Triboar Trail").
info_desc(dendrar_family_kidnapped, "Thal Dendrar stood up to Redbrands; they killed him and kidnapped his family").
info_desc(redbrands_and_halia, "Redbrands don't mess with Halia at Phandalin Miner's Exchange").
info_desc(redbrand_hangout, "Redbrands hang out at Sleeping Giant Tap House and they are trouble").
info_desc(sister_garaele_exhausted, "Sister Garaele recently returned to the Shrine of Luck injured and exhausted").
info_desc(goblin_cragmaw_castle, "The goblin working for the Redbrands might know the way to Cragmaw Castle; Halia will leverage this info to get players to accept her quest").
info_desc(kill_redbrand_leader, "Wants players to kill the leader of the Redbrands (she has secret plans to take over)").
info_desc(get_rid_of_redbrands, "Wants players to take out Redbrands").
info_desc(digging_old_owl_well, "QUEST: There is undead and digging at Old Owl Well, used to be magical, want someone to investigate").
info_desc(ask_agatha_about_book, "QUEST: Go to Agatha's Lair with comb, ask Agatha the banshee about wizard book location").
info_desc(missing_iarno, "Looking for missing member of order, Iarno (he is secretly new leader of Redbrands)").
info_desc(townmaster_and_redbrands, "Townmaster doesn't want players to mess with Redbrands, keep them in jail").
info_desc(redbrand_shakedown, "The Redbrands are shaking down local businesses").
info_desc(reidoth_location, "A druid named Reidoth can help you find Cragmaw Castle or Wave Echo Cave; they are at ruins of Thundertree").
info_desc(agatha_info, "If players are nice to Agatha or give her the comb, she can give them one piece of information").
info_desc(green_dragon, "Wants players to get rid of green dragon in Thundertree in exchange for info on Wave Echo Cave / Cragmaw Castle").
info_desc(wave_echo_cave_map, "Has a map leading to Wave Echo Cave").
info_desc(hamun_quest, "Hamun wants you to get rid of the orc camp at Triboar Trail or ask Agatha about who made the magic tower in exchange for the location to Wave Echo Cave").
info_desc(redbrand_minion_info, "You find some bugbears messing with a goblin, Droop. After defeating the bugbears you can interrogate them or get Droop to tell you the location of Cragmaw Castle").
info_desc(learn_about_redbrands, "Motivate players  to take down Redbrands").
info_desc(find_redbrands, "Find location of and enter Redbrand hideout").
info_desc(find_cragmaw_castle, "Find location of Cragmaw Castle").
info_desc(find_wave_echo_cave, "Explore Wave Echo Cave").
info_desc(remove_orc_camp, "Players can remove orc camp from Wyvern Tor").
info_desc(finish_hamun_quest, "Talk to Hamun about completing one of his tasks").
info_desc(learn_tower_maker, "Ask Agatha about maker of old magic tower ruin").

:- dynamic(info_known/1).

:- dynamic(info_acted_on/1).

:- dynamic(storyline/2).
storyline(redbrand_hideout_location, redbrand_story).
storyline(secret_tunnel_location, redbrand_story).
storyline(secret_tunnel_knowledge, redbrand_story).
storyline(orcs_triboar_trail, either_location_story).
storyline(dendrar_family_kidnapped, redbrand_story).
storyline(redbrands_and_halia, redbrand_story).
storyline(redbrand_hangout, redbrand_story).
storyline(sister_garaele_exhausted, either_location_story).
storyline(goblin_cragmaw_castle, cragmaw_castle_story).
storyline(kill_redbrand_leader, redbrand_story).
storyline(get_rid_of_redbrands, redbrand_story).
storyline(digging_old_owl_well, either_location_story).
storyline(ask_agatha_about_book, either_location_story).
storyline(missing_iarno, redbrand_story).
storyline(townmaster_and_redbrands, redbrand_story).
storyline(redbrand_shakedown, redbrand_story).
storyline(reidoth_location, either_location_story).
storyline(agatha_info, either_location_story).
storyline(green_dragon, either_location_story).
storyline(wave_echo_cave_map, wave_echo_cave_story).
storyline(hamun_quest, either_location_story).
storyline(redbrand_minion_info, cragmaw_castle_story).
storyline(learn_about_redbrands, redbrand_story).
storyline(find_redbrands, redbrand_story).
storyline(find_cragmaw_castle, cragmaw_castle_story).
storyline(find_wave_echo_cave, wave_echo_cave_story).
storyline(remove_orc_camp, either_location_story).
storyline(finish_hamun_quest, either_location_story).
storyline(learn_tower_maker, either_location_story).


:- dynamic(goes_to_location/2).
goes_to_location(redbrand_hideout_location, tresendar_manor).
goes_to_location(secret_tunnel_location, tresendar_manor).
goes_to_location(secret_tunnel_knowledge, alderleaf_farm).
goes_to_location(orcs_triboar_trail, orc_camp).
goes_to_location(redbrands_and_halia, phandalin_miners_exchange).
goes_to_location(redbrand_hangout, sleeping_giant_tap_house).
goes_to_location(sister_garaele_exhausted, shrine_of_luck).
goes_to_location(goblin_cragmaw_castle, tresendar_manor).
goes_to_location(kill_redbrand_leader, tresendar_manor).
goes_to_location(digging_old_owl_well, old_owl_well).
goes_to_location(ask_agatha_about_book, agathas_lair).
goes_to_location(reidoth_location, thundertree).
goes_to_location(agatha_info, wave_echo_cave).
goes_to_location(agatha_info, cragmaw_castle).
goes_to_location(green_dragon, wave_echo_cave).
goes_to_location(green_dragon, cragmaw_castle).
goes_to_location(wave_echo_cave_map, wave_echo_cave).
goes_to_location(hamun_quest, agathas_lair).
goes_to_location(hamun_quest, orc_camp).
goes_to_location(hamun_quest, wave_echo_cave).
goes_to_location(redbrand_minion_info, cragmaw_castle).

:- dynamic(goes_to_info/2).
goes_to_info(redbrand_hideout_location, find_redbrands).
goes_to_info(secret_tunnel_location, find_redbrands).
goes_to_info(secret_tunnel_knowledge, secret_tunnel_location).
goes_to_info(orcs_triboar_trail, remove_orc_camp).
goes_to_info(dendrar_family_kidnapped, learn_about_redbrands).
goes_to_info(redbrands_and_halia, kill_redbrand_leader).
goes_to_info(redbrands_and_halia, goblin_cragmaw_castle).
goes_to_info(redbrand_hangout, learn_about_redbrands).
goes_to_info(sister_garaele_exhausted, ask_agatha_about_book).
goes_to_info(goblin_cragmaw_castle, learn_about_redbrands).
goes_to_info(kill_redbrand_leader, learn_about_redbrands).
goes_to_info(get_rid_of_redbrands, learn_about_redbrands).
goes_to_info(digging_old_owl_well, hamun_quest).
goes_to_info(ask_agatha_about_book, agatha_info).
goes_to_info(missing_iarno, learn_about_redbrands).
goes_to_info(redbrand_shakedown, learn_about_redbrands).
goes_to_info(reidoth_location, green_dragon).
goes_to_info(agatha_info, find_cragmaw_castle).
goes_to_info(agatha_info, find_wave_echo_cave).
goes_to_info(agatha_info, learn_tower_maker).
goes_to_info(green_dragon, find_wave_echo_cave).
goes_to_info(green_dragon, find_cragmaw_castle).
goes_to_info(wave_echo_cave_map, find_wave_echo_cave).
goes_to_info(hamun_quest, remove_orc_camp).
goes_to_info(hamun_quest, learn_tower_maker).
goes_to_info(redbrand_minion_info, find_cragmaw_castle).
goes_to_info(learn_about_redbrands, find_redbrands).
goes_to_info(find_redbrands, redbrand_minion_info).
goes_to_info(find_cragmaw_castle, wave_echo_cave_map).
goes_to_info(remove_orc_camp, finish_hamun_quest).
goes_to_info(finish_hamun_quest, find_wave_echo_cave).
goes_to_info(learn_tower_maker, finish_hamun_quest).



full_name(Char, FirstName, LastName) :- 
	first_name(Char, FirstName),
	last_name(Char, LastName).
