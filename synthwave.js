var words = [
  'Action',
  'Neon',
  'Night',
  'Wave',
  'Star',
  'Force',
  'Glove',
  'Power',
  'Cyborg',
  'VHS',
  'Laser',
  'Drive',
  'Blaster',
  'Vindicator',
  'Protector',
  'Vice',
  'Video',
  'Hotline',
  'Skyline',
  'Street',
  'Futur',
  'Blast',
  'Midnight',
  'Sunset',
  'Stallone',
  'Jackson',
  'Samantha',
  'Jennifer',
  'Danger',
  'Flash',
  'Bronson',
  'Dreams',
  'Cobra',
  'Arnold',
  'Arcade',
  'Commodore',
  'Future',
  'Highway',
  'Copter',
  'FM',
  'Lamborghini',
  'Ferrari',
  'Attack',
  'Strike',
  'Maximum',
  'Noir',
  'Mega',
  'Youth',
  'Club',
  'Turbo',
  'Cassette',
  'Fist',
  'Cruise',
  'Elite',
  'Vector',
  'Showdown',
  'Electric',
  'Foxx',
  'Radar',
  'Hi-Fi',
  'Rage',
  'Lights',
  'Stereo'
];

var numbers = [
  '1984',
  '\'84',
  '\'86',
  '2000'
];

var prefix_locations = [
  'Tokyo',
  'LA',
  'Miami',
  'California',
  'Malibu',
  'Beverly Hills',
  'Interstate'
];

var suffix_locations = [
  'Streets'
];

var suffixes = [
  'maxx',
  'dynamix',
  'worx',
  'tron',
  'tronix',
  'hawk',
  'cop',
  'copter',
  'nights',
  'shaper',
  'drive',
  'rider',
  'slasher',
  'driver',
  'crawler',
  'hunter',
  'fighter',
  'starr',
  'net',
  'mancer'
];

var prefixes = [
  'Time',
  'Night',
  'Inter',
  'Mega',
  'Echo',
  'Beta',
  'Electro',
  'Lazer',
  'Neon',
  'Aero',
  'Tech',
  'Radio',
  'Synth',
  'Futur',
  'Poly',
  'Neuro',
  'Thunder',
  'Stereo'
];

function generate_composed_word(prefixes, suffixes) {
  return get_random_item(prefixes, []) + get_random_item(suffixes, []);
}

function get_random_item(list, exclude_items) {
  var new_item = list[Math.floor((Math.random() * list.length))];
  if (exclude_items.length && exclude_items.indexOf(new_item) > -1) {
    return get_random_item(list, exclude_items);
  }
  return new_item;
}

function random_boolean(probability) {
  return Math.random() > (1 - probability);
}

function add_if_not_present(list, word) {
  for (i = 0; i < list.length; i++) {
    if (list[i].indexOf(word) > -1 && word.indexOf(list[i]) > -1) {
      return;
    }
  }
  list.push(word);
}

function generate_name() {
  var name = [];
  var number_of_words = 2;
  var add_prefix_location = random_boolean(0.2);
  var add_number = random_boolean(0.1);
  var add_suffix_location = random_boolean(0.05);

  if (random_boolean(0.2)) {
    add_if_not_present(name, generate_composed_word(prefixes, suffixes));
    return name.join('');
  }

  for (i = 0; i < number_of_words; i++) {
    add_if_not_present(name, get_random_item(words, name));
  }
  if (add_prefix_location) {
    name.unshift(get_random_item(prefix_locations, name));
  }
  if (!add_prefix_location && add_suffix_location) {
    add_if_not_present(name, get_random_item(suffix_locations, name));
  }
  if (add_number) {
    add_if_not_present(name, get_random_item(numbers, name));
  }

  return name.join(' ');
}
