var json_encounters = `[
{
	"tag": "GreenDragonEncounter", 
	"location": "Thundertree"
	"difficulty": 8, 
	"char": "Reidoth", 
	"opposed_char": "the green dragon", 
	"desire": "get rid of <opposed_char> at <location>", 
	"blocker": "<opposed_char> is dangerous and doesn't want to leave",
	"reward": "show the way to Wave Echo Cave"
}, 
{
	"tag": "RedbrandEscalation", 
	"location": "Phandalin",
	"precondition": ["The party is not in <location>", "The party has not dealt with <opposed_char>"],
	"char":	"the townspeople of Phandalin",
	"opposed_char": "the Redbrands", 
	"desire": "get rid of <opposed_char> who are threatening and kidnapping people from the town",
	"blocker": "the Redbrands are dangerous and <char> don't know where their base is." 
}
]`