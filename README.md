# Aster caster
Simple Alexa Skill for horoscope using serverless computing (functions - FaaS)

This Alexa Skill uses [aztro REST API](https://aztro.readthedocs.io/en/latest/) as the source of information for daily horoscopes.

Several intents are available (which I will detail later).

In the *function* folder you can find the files you can use to create a Lambda function. *package.json* is necessary if you need to import node packages in your funcion, like in this case with the *request* module.

You will also find in the *skill* folder the JSON file to import the intents into your skill and the CSV (in the *slots* folder) to populate the slots (entities).

As I write the documentation down or enhance the skill, I will try to keep this README up-to-date, but if you have any concerns or questions, please let me know.

The skill is currently available in Alexa for English (US) language only. You can test it with utterances like "Alexa, ask Aster caster 'what is my horoscope for today?'" or "Alexa, open Aster caster and ask 'what is Aquarius lucky number?'".