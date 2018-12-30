# Aster caster
Simple Alexa Skill for horoscope using serverless computing (functions - FaaS)

This Alexa Skill uses [aztro REST API](https://aztro.readthedocs.io/en/latest/) as the source of information for daily horoscopes.

Several intents are available:

### Horoscope ###
* __Result__: Today's/Tomorrow's/Yesterday's horoscope for the zodiacal sign you mentioned
* __Example utterances__: "Alexa, ask Aster caster 'what is tomorrow\'s horoscope for Aquarius?'"; "What is my horoscope?"; "What was my horoscope yesterday?".

### Mood ###
* __Result__: Today's/Tomorrow's/Yesterday's mood for the zodiacal sign you mentioned
* __Example utterances__: "_Alexa, ask Aster caster 'what is Virgo\'s mood for today?'_"; "_What's my mood today?_"; "_What is going to be Cancer\'s mood tomorrow?_".

### Lucky number ###
* __Result__: Today's/Tomorrow's/Yesterday's lucky number for the zodiacal sign you mentioned
* __Example utterances__: "_Alexa, ask Aster caster 'what is today\'s lucky number for Aries?'_"; "_What's my luck number?_"; "_What was yesterday's lucky number for Leo?_".

### Compatibility ###
* __Result__: Today's/Tomorrow's/Yesterday's best match for the zodiacal sign you mentioned
* __Example utterances__: "_Alexa, ask Aster caster 'what is Libra\'s best match?'_"; "_What sign does Gemini match today?_"; "_What is my best match?_".

### Color ###
* __Result__: Today's/Tomorrow's/Yesterday's color for the zodiacal sign you mentioned
* __Example utterances__: "_Alexa, ask Aster caster for my lucky color for today_"; "_What color should Virgo wear tomorrow?_"; "_What is Sagittarius\' best color?_".

### Sign discovery ###
* __Result__: Given a date, it returns the corresponding zodiacal sign
* __Example utterances__: "_Alexa, ask Aster caster 'what sign is 5th May?'_"; "_What sign is today?_"; "_If I were born on 2nd February what would my sign be?_".

- - - -

In the *function* folder you can find the files you can use to create a Lambda function. *package.json* is necessary if you need to import node packages in your funcion, like in this case with the *request* module.

You will also find in the *skill* folder the JSON file to import the intents into your skill and the CSV (in the *slots* folder) to populate the slots (entities).

As I write the documentation down or enhance the skill, I will try to keep this README up-to-date, but if you have any concerns or questions, please let me know.

The skill is currently available in Alexa for English (US) language only. You can test it with utterances like "_Alexa, ask Aster caster 'what is my horoscope for today?'_" or "_Alexa, open Aster caster and ask 'what is Aquarius\' lucky number?'_".