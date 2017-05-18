// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

function madlib(name, subject) {
  return(name + '\'s favorite subject in school is ' + subject + '.');
}
madlib('Anushka', 'art');

// Alternate way as template literal

function madlib(name, subject) {
  return(`${name}\'s favorite subject in school is ${subject}.`);
}
madlib('Anushka', 'art');