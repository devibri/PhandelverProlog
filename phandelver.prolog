:- set_prolog_flag(double_quotes, atom).

%%%%%%%%% Character info %%%%%%%%%

% all the character info 
:- dynamic(character_info/3).

% first names 
character_info(toblin_stonehill, first_name, toblin).
character_info(elmar_barthen, first_name, elmar).
character_info(daren_edermath, first_name, daren).
character_info(linene_graywind, first_name, linene).
character_info(halia_thornton, first_name, halia).
character_info(qelline_alderleaf, first_name, qelline).
character_info(sister_garaele, first_name, sister).
character_info(harbin_wester, first_name, harbin).
character_info(sildar_hallwinter, first_name, sildar).
character_info(narth, first_name, narth).
character_info(redbrands, first_name, redbrands).
character_info(elsa, first_name, elsa).
character_info(lanar, first_name, lanar).
character_info(trilena, first_name, trilena).
character_info(pip, first_name, pip).
character_info(freda, first_name, freda).
character_info(ander, first_name, ander).
character_info(thistle, first_name, thistle).
character_info(grista, first_name, grista).
character_info(carp, first_name, carp).
character_info(agatha, first_name, agatha).
character_info(reidoth, first_name, reidoth).
character_info(gundren_rockseeker, first_name, gundren).
character_info(hamun, first_name, hamun).
character_info(droop, first_name, droop).

% last names 
character_info(toblin_stonehill, last_name, stonehill).
character_info(elmar_barthen, last_name, barthen).
character_info(daren_edermath, last_name, edermath).
character_info(linene_graywind, last_name, graywind).
character_info(halia_thornton, last_name, thorton).
character_info(qelline_alderleaf, last_name, alderleaf).
character_info(sister_garaele, last_name, garaele).
character_info(harbin_wester, last_name, wester).
character_info(sildar_hallwinter, last_name, hallwinter).
character_info(gundren_rockseeker, last_name, rockseeker).

%occupation
character_info(toblin_stonehill, occupation, "Innkeeper").
character_info(elmar_barthen, occupation, "Owns trading post").
character_info(daren_edermath, occupation, "Retired adventurer").
character_info(linene_graywind, occupation, "Runs trading post").
character_info(halia_thornton, occupation, "Runs Phandalin Miner's Exchange").
character_info(qelline_alderleaf, occupation, "Farmer").
character_info(sister_garaele, occupation, "Elf cleric of Tymora").
character_info(harbin_wester, occupation, "Townmaster of Phandalin").
character_info(narth, occupation, "Farmer").

%status 
character_info(toblin_stonehill, status, alive).
character_info(elmar_barthen, status, alive).
character_info(daren_edermath, status, alive).
character_info(linene_graywind, status, alive).
character_info(halia_thornton, status, alive).
character_info(qelline_alderleaf, status, alive).
character_info(sister_garaele, status, alive).
character_info(harbin_wester, status, alive).
character_info(sildar_hallwinter, status, alive).
character_info(narth, status, alive).
character_info(redbrands, status, alive).
character_info(elsa, status, alive).
character_info(lanar, status, alive).
character_info(trilena, status, alive).
character_info(pip, status, alive).
character_info(freda, status, alive).
character_info(ander, status, alive).
character_info(thistle, status, alive).
character_info(grista, status, alive).
character_info(carp, status, alive).
character_info(agatha, status, alive).
character_info(reidoth, status, alive).
character_info(gundren_rockseeker, status, alive).
character_info(hamun, status, alive).
character_info(droop, status, alive).

% Has met the party 
character_info(toblin_stonehill, has_met_party, true).

character_info(daren_edermath, faction, "Order of the Gauntlet").
character_info(halia_thornton, faction, "Zhentarim").
character_info(sister_garaele, faction, "Harper").
character_info(sildar_hallwinter, faction, "Lords' Alliance").
character_info(redbrands, faction, "Redbrands").

% who is friends with who
character_info(qelline_alderleaf, friend_of, reidoth).
character_info(pip, friend_of, carp).

% who is family of who
character_info(carp, family_of, qelline_alderleaf).

% Information the character knows about
character_info(toblin_stonehill, knows_about, redbrand_hangout).
character_info(elmar_barthen, knows_about, redbrand_shakedown).
character_info(daren_edermath, knows_about, redbrand_hideout_location).
character_info(daren_edermath, knows_about, get_rid_of_redbrands).
character_info(daren_edermath, knows_about, digging_old_owl_well).
character_info(halia_thornton, knows_about, goblin_cragmaw_castle).
character_info(halia_thornton, knows_about, kill_redbrand_leader).
character_info(qelline_alderleaf, knows_about, reidoth_location).
character_info(sister_garaele, knows_about, ask_agatha_about_book).
character_info(harbin_wester, knows_about, orcs_triboar_trail).
character_info(harbin_wester, knows_about, townmaster_and_redbrands).
character_info(sildar_hallwinter, knows_about, missing_iarno).
character_info(narth, knows_about, sister_garaele_exhausted).
character_info(lanar, knows_about, orcs_triboar_trail).
character_info(trilena, knows_about, dendrar_family_kidnapped).
character_info(pip, knows_about, secret_tunnel_knowledge).
character_info(freda, knows_about, redbrands_and_halia).
character_info(carp, knows_about, redbrand_hideout_location).
character_info(carp, knows_about, secret_tunnel_location).
character_info(agatha, knows_about, agatha_info).
character_info(reidoth, knows_about, green_dragon).
character_info(gundren_rockseeker, knows_about, wave_echo_cave_map).
character_info(hamun, knows_about, hamun_quest).
character_info(hamun, knows_about, finish_hamun_quest).
character_info(droop, knows_about, redbrand_minion_info).


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



%%%%%%%%% Location info %%%%%%%%%

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
