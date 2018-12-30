# Aster caster
Simple Alexa Skill for horoscope using serverless computing (functions - FaaS)

This Alexa Skill uses [aztro REST API](https://aztro.readthedocs.io/en/latest/) as the source of information for daily horoscopes.

Several intents are available:

* Horoscope:
    * Result: Today's/Tomorrow's/Yesterday's horoscope for the zodiacal sign you mentioned
    * Example utterances: "Alexa, ask Aster caster 'what is tomorrow\'s horoscope for Aquarius?'"; "What is my horoscope?"; "What was my horoscope yesterday?".

* Mood:
    * Result: Today's/Tomorrow's/Yesterday's mood for the zodiacal sign you mentioned
    * Example utterances: "Alexa, ask Aster caster 'what is Virgo\'s mood for today?'"; "What's my mood today?"; "What is going to be Cancer\'s mood tomorrow?".

* Lucky number:
    * Result: Today's/Tomorrow's/Yesterday's lucky number for the zodiacal sign you mentioned
    * Example utterances: "Alexa, ask Aster caster 'what is today\'s lucky number for Aries?'"; "What's my luck number?"; "What was yesterday's lucky number for Leo?".

* Compatibility:
    * Result: Today's/Tomorrow's/Yesterday's best match for the zodiacal sign you mentioned
    * Example utterances: "Alexa, ask Aster caster 'what is Libra\'s best match?'"; "What sign does Gemini match today?"; "What is my best match?".

* Color:
    * Result: Today's/Tomorrow's/Yesterday's color for the zodiacal sign you mentioned
    * Example utterances: "Alexa, ask Aster caster for my lucky color for today"; "What color should Virgo wear tomorrow?"; "What is Sagittarius\' best color?".

* Sign discovery:
    * Result: Given a date, it returns the corresponding zodiacal sign
    * Example utterances: "Alexa, ask Aster caster 'what sign is 5th May?'"; "What sign is today?"; "If I were born on 2nd February what would my sign be?".

- - - -

In the *function* folder you can find the files you can use to create a Lambda function. *package.json* is necessary if you need to import node packages in your funcion, like in this case with the *request* module.

You will also find in the *skill* folder the JSON file to import the intents into your skill and the CSV (in the *slots* folder) to populate the slots (entities).

As I write the documentation down or enhance the skill, I will try to keep this README up-to-date, but if you have any concerns or questions, please let me know.

The skill is currently available in Alexa for English (US) language only. You can test it with utterances like "Alexa, ask Aster caster 'what is my horoscope for today?'" or "Alexa, open Aster caster and ask 'what is Aquarius\' lucky number?'".