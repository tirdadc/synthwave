var words = [
  'Action',
  'Neon',
  'Night',
  'Wave',
  'Star',
  'Force',
  'Glove',
  'Power',
  'VHS',
  'Laser',
  'Drive',
  'Blaster',
  'Vindicator',
  'Protector',
  'Vice',
  'Hotline',
  'Skyline',
  'Streets',
  'Midnight',
  'Sunset',
  'Stallone',
  'Jackson',
  'Danger',
  'Flash',
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
  'Turbo',
  'Cassette',
  'Fist',
  'Cruise',
  'Elite',
  'Vector'
];

var numbers = [
  '1984',
  '\'84',
  '\'86',
  '2000'
];

var locations = [
  'Tokyo',
  'LA',
  'Miami',
  'California',
  'Malibu'
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
  'net'
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
  'Neuro'
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

function random_boolean(threshold) {
  return Math.random() > threshold;
}

function generate_name() {
  var name = [];
  var number_of_words = 2;
  var add_location = random_boolean(0.8);
  var add_number = random_boolean(0.9);

  //var number_of_words = Math.floor((Math.random() * 3) + 1);
  //number_of_words = number_of_words === 1 ? number_of_words + 1 : number_of_words;

  if (random_boolean(0.8)) {
    name.push(generate_composed_word(prefixes, suffixes));
    return name.join('');
  }

  //console.info('number_of_words: ' + number_of_words)
  for (i = 0; i < number_of_words; i++) {
    name.push(get_random_item(words, name));
  }
  if (add_location) {
    name.unshift(get_random_item(locations, name));
  }
  if (add_number) {
    name.push(get_random_item(numbers, name));
  }
  return name.join(' ');
}