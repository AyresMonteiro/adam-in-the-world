
const getTranslatedString = (requested) => {
  const { ADAM_LANGUAGE } = process.env;

  if (!/^[a-z]+\.[a-z]+$/.test(requested)) throw new Error("Translated string pattern error");

  const [filename, stringname] = requested.split('.');

  try {
    return require('./' + ADAM_LANGUAGE + '/' + filename)[stringname];
  } catch (e) {
    console.log("error while getting translated string:", e);

    return "error while getting translated string";
  };
};

module.exports = getTranslatedString;

