:- set_prolog_flag(double_quotes, atom).

%%%%%%%%%%%% CHARACTER INFO %%%%%%%%%%%%%

:- dynamic(character_info_list/2).
character_info_list(toblin_stonehill, [first_name, last_name, occupation, status, has_met_party, knows_info]).
character_info_list(elmar_barthen, [first_name, last_name, occupation, status, knows_info]).
character_info_list(daren_edermath, [first_name, last_name, occupation, status, faction, knows_info, has_quest]).
character_info_list(linene_graywind, [first_name, last_name, occupation, status]).
character_info_list(halia_thornton, [first_name, last_name, occupation, status, faction, knows_info, has_quest, has_conditional]).
character_info_list(qelline_alderleaf, [first_name, last_name, occupation, status, friend_of, family_of, knows_info]).
character_info_list(sister_garaele, [first_name, last_name, occupation, status, faction, knows_info, has_quest]).
character_info_list(harbin_wester, [first_name, last_name, occupation, status, knows_info, has_quest]).
character_info_list(sildar_hallwinter, [first_name, last_name, status, has_met_party, faction, knows_info, has_quest]).
character_info_list(narth, [first_name, occupation, status, faction, knows_info]).
character_info_list(redbrands, [first_name, status, faction]).
character_info_list(elsa, [first_name, status]).
character_info_list(lanar, [first_name, status, knows_info]).
character_info_list(trilena, [first_name, status, knows_info]).
character_info_list(pip, [first_name, status, friend_of, knows_info]).
character_info_list(freda, [first_name, status, knows_info]).
character_info_list(ander, [first_name, status]).
character_info_list(thistle, [first_name, status]).
character_info_list(grista, [first_name, status]).
character_info_list(carp, [first_name, status, friend_of, family_of, knows_info]).
character_info_list(agatha, [first_name, status, knows_info, has_conditional]).
character_info_list(reidoth, [first_name, status, friend_of, knows_info, has_quest]).
character_info_list(gundren_rockseeker, [first_name, last_name, status, knows_info, has_quest, has_conditional]).
character_info_list(hamun, [first_name, occupation, status, knows_info, has_quest]).
character_info_list(droop, [first_name, status, knows_info, has_conditional]).



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
occupation(qelline_alderleaf, "Farmer").
occupation(sister_garaele, "Elf cleric of Tymora").
occupation(harbin_wester, "Townmaster of Phandalin").
occupation(narth, "Farmer").
occupation(hamun, "Necromancer").

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
:- dynamic(has_met_party/2).
has_met_party(toblin_stonehill, true).
has_met_party(sildar_hallwinter, true).

:- dynamic(faction/2).
faction(daren_edermath, "Order of the Gauntlet").
faction(halia_thornton, "Zhentarim").
faction(sister_garaele, "Harper").
faction(sildar_hallwinter, "Lords' Alliance").
faction(redbrands, "Redbrands").

:- dynamic(friend_of/2).
friend_of(qelline_alderleaf, reidoth).
friend_of(reidoth, qelline_alderleaf).
friend_of(pip, carp).
friend_of(carp, pip).

:- dynamic(family_of/2).
family_of(carp, qelline_alderleaf).
family_of(qelline_alderleaf, carp).

% Information the character knows about
:- dynamic(knows_info/2).
knows_info(toblin_stonehill, redbrand_hangout).
knows_info(elmar_barthen, redbrand_shakedown).
knows_info(daren_edermath, redbrand_hideout_location).
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
knows_info(gundren_rockseeker, wave_echo_cave_map).
knows_info(hamun, hamun_quest).
knows_info(hamun, finish_hamun_quest).
knows_info(droop, redbrand_minion_info).
knows_info(toblin_stonehill, learn_about_redbrands).

:- dynamic(has_quest/2). 
has_quest(halia_thornton, kill_redbrand_leader).
has_quest(daren_edermath, get_rid_of_redbrands).
has_quest(daren_edermath, digging_old_owl_well).
has_quest(sister_garaele, ask_agatha_about_book).
has_quest(sildar_hallwinter, missing_iarno).
has_quest(reidoth, green_dragon).
has_quest(hamun, orcs_triboar_trail_quest_hamun).
has_quest(harbin_wester, orcs_triboar_trail_quest).
has_quest(hamun, magic_tower).

:- dynamic(has_conditional/2).
has_conditional(halia_thornton, goblin_cragmaw_castle).
has_conditional(halia_thornton, plan_to_take_over_redbrands).
has_conditional(agatha, agatha_comb).
has_conditional(gundren_rockseeker, wave_echo_cave_map).
has_conditional(droop, redbrand_minion_info).




%%%%%%%%%%%% LOCATION INFO %%%%%%%%%%%%%

:- dynamic(location_info_list/2).
location_info_list(stonehill_inn, [location_name, location_known, in_region, char_in_location, location_visited]).
location_info_list(lionshield_coster, [location_name, in_region, char_in_location]).
location_info_list(barthens_provisions, [location_name, in_region, char_in_location]).
location_info_list(townmasters_hall, [location_name, in_region, char_in_location]).
location_info_list(shrine_of_luck, [location_name, in_region, char_in_location]).
location_info_list(sleeping_giant_tap_house, [location_name, in_region, char_in_location]).
location_info_list(edermath_orchard, [location_name, in_region, char_in_location]).
location_info_list(tresendar_manor, [location_name, in_region, char_in_location]).
location_info_list(old_owl_well, [location_name, in_region, char_in_location]).
location_info_list(phandalin_miners_exchange, [location_name, in_region, char_in_location]).
location_info_list(alderleaf_farm, [location_name, in_region, char_in_location]).
location_info_list(thundertree, [location_name, in_region, char_in_location]).
location_info_list(agathas_lair, [location_name, in_region, char_in_location]).
location_info_list(orc_camp, [location_name, in_region]).
location_info_list(cragmaw_castle, [location_name, in_region, char_in_location]).
location_info_list(wave_echo_cave, [location_name, in_region]).

% The locations in the world.
:- dynamic(location/1).
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

:- dynamic(in_region/2).
in_region(stonehill_inn, phandalin).
in_region(lionshield_coster, phandalin).
in_region(barthens_provisions, phandalin).
in_region(townmasters_hall, phandalin).
in_region(shrine_of_luck, phandalin).
in_region(sleeping_giant_tap_house, phandalin).
in_region(edermath_orchard, phandalin).
in_region(tresendar_manor, phandalin).
in_region(old_owl_well, countryside).
in_region(phandalin_miners_exchange, phandalin).
in_region(alderleaf_farm, phandalin).
in_region(thundertree, thundertree).
in_region(agathas_lair, countryside).
in_region(orc_camp, countryside).
in_region(cragmaw_castle, cragmaw_castle).
in_region(wave_echo_cave, wave_echo_cave).

:- dynamic(char_in_location/2).
char_in_location(stonehill_inn, party).
char_in_location(stonehill_inn, toblin_stonehill).
char_in_location(stonehill_inn, narth).
char_in_location(stonehill_inn, elsa).
char_in_location(stonehill_inn, lanar).
char_in_location(stonehill_inn, trilena).
char_in_location(stonehill_inn, pip).
char_in_location(stonehill_inn, freda).
char_in_location(lionshield_coster, linene_graywind).
char_in_location(barthens_provisions, elmar_barthen).
char_in_location(barthens_provisions, ander).
char_in_location(barthens_provisions, thistle).
char_in_location(townmasters_hall, harbin_wester).
char_in_location(shrine_of_luck, sister_garaele).
char_in_location(sleeping_giant_tap_house, grista).
char_in_location(sleeping_giant_tap_house, redbrands).
char_in_location(edermath_orchard, daren_edermath).
char_in_location(tresendar_manor, droop).
char_in_location(old_owl_well, hamun).
char_in_location(phandalin_miners_exchange, halia_thornton).
char_in_location(alderleaf_farm, qelline_alderleaf).
char_in_location(alderleaf_farm, carp).
char_in_location(thundertree, reidoth).
char_in_location(agathas_lair, agatha).
char_in_location(cragmaw_castle, gundren_rockseeker).

:- dynamic(location_visited/2).
location_visited(stonehill_inn, true).




%%%%%%%%%%%% INFORMATION INFO %%%%%%%%%%%%%

:- dynamic(information_info_list/2).
information_info_list(redbrand_hideout_location, [info_desc, storyline, goes_to_location, goes_to_info]).
information_info_list(secret_tunnel_location, [info_desc, storyline, goes_to_location, goes_to_info]).
information_info_list(secret_tunnel_knowledge, [info_desc, storyline, goes_to_location, goes_to_info]).
information_info_list(orcs_triboar_trail, [info_desc, storyline, goes_to_info]).
information_info_list(dendrar_family_kidnapped, [info_desc, storyline, goes_to_info]).
information_info_list(redbrands_and_halia, [info_desc, storyline, goes_to_location, goes_to_info]).
information_info_list(redbrand_hangout, [info_desc, storyline, goes_to_location, goes_to_info]).
information_info_list(sister_garaele_exhausted, [info_desc, storyline, goes_to_location, goes_to_info]).
information_info_list(iarno_secret, [info_desc]).
information_info_list(townmaster_and_redbrands, [info_desc, storyline]).
information_info_list(redbrand_shakedown, [info_desc, storyline, goes_to_info]).
information_info_list(agatha_info, [info_desc, storyline, goes_to_location, goes_to_info]).
information_info_list(learn_about_redbrands, [info_desc, storyline]).

:- dynamic(info/1).
info(redbrand_hideout_location).
info(secret_tunnel_location).
info(secret_tunnel_knowledge).
info(orcs_triboar_trail).
info(dendrar_family_kidnapped).
info(redbrands_and_halia).
info(redbrand_hangout).
info(sister_garaele_exhausted).
info(iarno_secret).
info(townmaster_and_redbrands).
info(redbrand_shakedown).
info(reidoth_location).
info(learn_about_redbrands).


% Descriptive info about world 
:- dynamic(info_desc/2).
info_desc(redbrand_hideout_location, "The Redbrand hideout is at Tresendar Manor").
info_desc(secret_tunnel_location, "There is a secret tunnel entrance into the The Redbrand hideout in the woods near Tresendar Manor").
info_desc(secret_tunnel_knowledge, "Carp at Alderleaf Farm saw a secret tunnel in the woods; the Redbrands almost caught him").
info_desc(orcs_triboar_trail, "The townmaster wants someone to deal with the orcs around Triboar Trail").
info_desc(dendrar_family_kidnapped, "Thal Dendrar stood up to Redbrands; they killed him and kidnapped his family").
info_desc(redbrands_and_halia, "Redbrands don't mess with Halia at Phandalin Miner's Exchange").
info_desc(redbrand_hangout, "Redbrands hang out at Sleeping Giant Tap House and they are trouble").
info_desc(sister_garaele_exhausted, "Sister Garaele recently returned to the Shrine of Luck injured and exhausted").
info_desc(iarno_secret, "The missing person Iarno is actually the leader of the Redbrands and goes by the name Glasstaff").
info_desc(townmaster_and_redbrands, "Townmaster doesn't want players to mess with Redbrands").
info_desc(redbrand_shakedown, "The Redbrands are shaking down local businesses").
info_desc(reidoth_location, "Reidoth at Thundertree knows the way to Cragmaw Castle or Wave Echo Cave").
info_desc(learn_about_redbrands, "The Redbrands are a dangerous threat to the town of Phandalin").

:- dynamic(info_known/2).

:- dynamic(info_acted_on/2).

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
storyline(cragmaw_castle, cragmaw_castle_story).
storyline(wave_echo_cave, wave_echo_cave_story).
storyline(remove_orc_camp, either_location_story).
storyline(finish_hamun_quest, either_location_story).
storyline(learn_tower_maker, either_location_story).


:- dynamic(goes_to_location/2).
goes_to_location(redbrand_hideout_location, tresendar_manor).
goes_to_location(secret_tunnel_location, tresendar_manor).
goes_to_location(secret_tunnel_knowledge, alderleaf_farm).
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
goes_to_info(secret_tunnel_knowledge, secret_tunnel_location).
goes_to_info(dendrar_family_kidnapped, learn_about_redbrands).
goes_to_info(redbrands_and_halia, kill_redbrand_leader).
goes_to_info(redbrands_and_halia, goblin_cragmaw_castle).
goes_to_info(redbrand_hangout, learn_about_redbrands).
goes_to_info(sister_garaele_exhausted, ask_agatha_about_book).
goes_to_info(goblin_cragmaw_castle, learn_about_redbrands).
goes_to_info(kill_redbrand_leader, learn_about_redbrands).
goes_to_info(get_rid_of_redbrands, learn_about_redbrands).
goes_to_info(ask_agatha_about_book, agatha_comb).
goes_to_info(missing_iarno, learn_about_redbrands).
goes_to_info(redbrand_shakedown, learn_about_redbrands).
goes_to_info(reidoth_location, green_dragon).
goes_to_info(green_dragon, wave_echo_cave).
goes_to_info(green_dragon, cragmaw_castle).
goes_to_info(wave_echo_cave_map, wave_echo_cave).
goes_to_info(cragmaw_castle, wave_echo_cave_map).
goes_to_info(redbrand_hideout_location, tresendar_manor).
goes_to_info(secret_tunnel_location, tresendar_manor).
goes_to_info(goblin_cragmaw_castle, tresendar_manor).
goes_to_info(kill_redbrand_leader, tresendar_manor).
goes_to_info(digging_old_owl_well, orcs_triboar_trail_quest_hamun).
goes_to_info(orcs_triboar_trail, orcs_triboar_trail_quest).
goes_to_info(digging_old_owl_well, magic_tower).
goes_to_info(redbrand_minion_info, cragmaw_castle).
goes_to_info(tresendar_manor, redbrand_minion_info).
goes_to_info(agatha_comb, wave_echo_cave).
goes_to_info(agatha_comb, cragmaw_castle).
goes_to_info(magic_tower, cragmaw_castle).
goes_to_info(magic_tower, wave_echo_cave).
goes_to_info(orcs_triboar_trail_quest_hamun, cragmaw_castle).
goes_to_info(orcs_triboar_trail_quest_hamun, wave_echo_cave).

%%%%%%%%%%%% QUEST INFO %%%%%%%%%%%%%%

:- dynamic(quest_info_list/2).
quest_info_list(kill_redbrand_leader, [quest_desc, storyline, goes_to_location, goes_to_info]).
quest_info_list(get_rid_of_redbrands, [quest_desc, storyline]).
quest_info_list(digging_old_owl_well, [quest_desc, storyline, goes_to_location, goes_to_info]).
quest_info_list(ask_agatha_about_book, [quest_desc, storyline, goes_to_location, goes_to_info]).
quest_info_list(missing_iarno, [quest_desc, storyline, goes_to_info]).
quest_info_list(green_dragon, [quest_desc, storyline, goes_to_location, goes_to_info]).
quest_info_list(orcs_triboar_trail_quest, [quest_desc, storyline]).
quest_info_list(orcs_triboar_trail_quest_hamun, [quest_desc, storyline]).
quest_info_list(magic_tower, [quest_desc, storyline]).

:- dynamic(quest/1).
quest(kill_redbrand_leader).
quest(get_rid_of_redbrands).
quest(digging_old_owl_well).
quest(ask_agatha_about_book).
quest(missing_iarno).
quest(green_dragon).
quest(orcs_triboar_trail_quest).
quest(orcs_triboar_trail_quest_hamun).
quest(magic_tower).

:- dynamic(quest_desc/2).
quest_desc(kill_redbrand_leader, "Kill the Redbrand leader").
quest_desc(get_rid_of_redbrands, "Take out the Redbrands").
quest_desc(digging_old_owl_well, "Investigate the digging and appearances of undead at Old Owl Well").
quest_desc(ask_agatha_about_book, "Ask about the location of the wizard's book"). 
quest_desc(missing_iarno, "Find Iarno -- a missing member of the Order of the Gauntlet").
quest_desc(green_dragon, "Get rid of the green dragon at Thundertree in exchange for info on Wave Echo Cave / Cragmaw Castle").
quest_desc(orcs_triboar_trail_quest, "Get rid of the orc camp at Triboar Trail"). 
quest_desc(orcs_triboar_trail_quest_hamun, "Get rid of the orc camp at Triboar Trail in exchange for info on Wave Echo Cave / Cragmaw Castle"). 
quest_desc(magic_tower, "Ask Agatha about who made the magic tower in exchange for the location of Wave Echo Cave").

:- dynamic(quest_complete/2). 

:- dynamic(quest_known/2). 

%%%%%%%%%%% CONDITIONAL INFO %%%%%%%%%%%



:- dynamic(conditional/1).
conditional(goblin_cragmaw_castle).
conditional(plan_to_take_over_redbrands).
conditional(agatha_comb).
conditional(wave_echo_cave_map).
conditional(redbrand_minion_info).

:- dynamic(conditional_info_list/2).
conditional_info_list(goblin_cragmaw_castle, [conditional_desc, storyline, goes_to_location, goes_to_info]).
conditional_info_list(plan_to_take_over_redbrands, [conditional_desc, storyline]).
conditional_info_list(agatha_comb, [conditional_desc, storyline]).
conditional_info_list(wave_echo_cave_map, [conditional_desc, storyline, goes_to_location, goes_to_info]).
conditional_info_list(redbrand_minion_info, [conditional_desc, storyline]).

% NPC AI -- directions as to how to play this character, when they will reveal info, etc.
:- dynamic(conditional_desc/2).
conditional_desc(goblin_cragmaw_castle, "Halia tells the party that the goblin working for the Redbrands might know the way to Cragmaw Castle in order to get the players to work for her").
conditional_desc(plan_to_take_over_redbrands, "Halia has secret plans to take over the Redbrands once the leader of the Redbrands is dead").
conditional_desc(agatha_comb, "Agatha will give the party the honest answer to a question if you give them the comb or flatter her").
conditional_desc(wave_echo_cave_map, "Gundren has a map leading to Wave Echo Cave and will give to the party if rescued").
conditional_desc(redbrand_minion_info, "If you save Droop from the bugbears messing with them Droop will tell you the location of Cragmaw Castle").


:- dynamic(conditional_complete/2).