import { CloudLightning, Droplets, Mountain, Sun, Waves, Wind } from 'lucide-react'

export const disasters = [
  {
    id: 'cyclone', name: 'Cyclone', icon: Wind, warning: true, warningText: 'Weather warning active',
    short: 'Strong winds, storm surge & heavy rain.',
    before: ['Track official weather alerts and identify your nearest shelter.', 'Secure loose objects, windows, water tanks and outdoor equipment.', 'Keep medicines, documents, torch, power bank and drinking water ready.', 'Plan an evacuation route and keep vehicles fueled if advised.'],
    during: ['STAY INDOORS and move away from windows.', 'DO NOT go outside during the eye of the storm.', 'Follow evacuation orders immediately if issued.', 'Avoid flooded roads, bridges and exposed coastal areas.'],
    after: ['Return only after authorities say it is safe.', 'Avoid fallen power lines, damaged buildings and contaminated water.', 'Use safe drinking water or boil/filter water as advised.', 'Report people needing rescue through emergency services.']
  },
  {
    id: 'flood', name: 'Flood', icon: Droplets, warning: false, short: 'Fast-rising water can isolate homes and roads.',
    before: ['Store clean drinking water and ready-to-eat food.', 'Move valuables, electronics and documents to higher levels.', 'Know your nearest high ground and evacuation route.', 'Keep a waterproof emergency kit accessible.'],
    during: ['MOVE TO HIGHER GROUND immediately.', 'Never walk, swim or drive through moving floodwater.', 'Switch off electricity only if it is safe to do so.', 'Follow evacuation instructions and avoid rumor-driven routes.'],
    after: ['Do not enter damaged buildings until cleared.', 'Treat all floodwater as contaminated.', 'Check for snakes, debris and unstable structures.', 'Document damage safely for recovery support.']
  },
  {
    id: 'earthquake', name: 'Earthquake', icon: Mountain, warning: false, short: 'Sudden shaking can cause falling objects and structural damage.',
    before: ['Anchor heavy furniture and identify safe cover locations.', 'Keep shoes, torch and emergency supplies near your bed.', 'Know how to shut off gas, water and electricity safely.'],
    during: ['DROP, COVER, HOLD ON.', 'Stay away from glass, shelves and heavy objects.', 'Do not use lifts during shaking.', 'If outdoors, move away from buildings, poles and wires.'],
    after: ['Expect aftershocks and move cautiously.', 'Leave visibly damaged buildings.', 'Turn off utilities if damaged and safe to access.', 'Use text messages when networks are congested.']
  },
  {
    id: 'landslide', name: 'Landslide', icon: Mountain, warning: false, short: 'Slope failure can block roads and damage structures.',
    before: ['Know whether your home or route is below a steep or unstable slope.', 'Watch for new cracks, tilted trees or unusual water flow.', 'Keep evacuation shoes, torch and a charged phone ready.'],
    during: ['MOVE AWAY FROM THE LANDSLIDE PATH.', 'Move to higher, stable ground if safe.', 'Do not cross fresh debris or damaged roads.', 'Alert nearby people without entering the hazard zone.'],
    after: ['Stay away from the slide area; secondary slides can follow.', 'Avoid damaged bridges and utility lines.', 'Follow local route closures and warnings.']
  },
  {
    id: 'heatwave', name: 'Heatwave', icon: Sun, warning: false, short: 'Extreme heat can quickly cause dehydration and heat illness.',
    before: ['Plan outdoor activity for cooler hours.', 'Keep drinking water available and carry it when travelling.', 'Check on older adults, children and people working outdoors.'],
    during: ['MOVE TO A COOL PLACE and drink water regularly.', 'Avoid strenuous work in peak afternoon heat.', 'Use light clothing and shade whenever possible.', 'Seek urgent medical help for confusion, fainting or severe overheating.'],
    after: ['Rest and rehydrate before returning to heat exposure.', 'Monitor anyone who had heat illness for worsening symptoms.', 'Resume activity gradually.']
  },
  {
    id: 'tsunami', name: 'Tsunami', icon: Waves, warning: false, short: 'Coastal flooding can arrive within minutes of a major offshore quake.',
    before: ['Know your coastal evacuation route and vertical/higher-ground options.', 'Keep emergency supplies ready and shoes accessible.', 'Discuss a family meeting point away from the shoreline.'],
    during: ['MOVE INLAND OR TO HIGHER GROUND immediately.', 'If you feel a long or strong earthquake near the coast, do not wait for a siren.', 'Stay away from beaches, rivers and low-lying coastal areas.', 'Do not return after the first wave. Multiple waves may arrive.'],
    after: ['Wait for official all-clear before returning.', 'Avoid floodwater and damaged utilities.', 'Help children and people who need assistance without entering unsafe zones.']
  }
]

export const contacts = [
  { label: 'Emergency', number: '112', note: 'National emergency number' },
  { label: 'Ambulance', number: '108', note: 'Emergency medical services' },
  { label: 'Police', number: '100', note: 'Police assistance' },
  { label: 'Fire', number: '101', note: 'Fire & rescue services' }
]

export const alertText = 'Active Safety Alert: Check your local weather and disaster authority updates before travelling. Stay informed. Stay ready.'
