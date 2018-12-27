const request = require("request");

function initialize(sign, day) {
  var options = {
    url: "https://aztro.sameerkumar.website/?sign=" + sign + "&day=" + day,
    method: "POST"
  };

  return new Promise(function(resolve, reject) {
    request(options, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

function stopIt(message) {
  return {
    version: "1.0",
    response: {
      shouldEndSession: true,
      outputSpeech: {
        type: "PlainText",
        text: message
      }
    }
  };
}

function sign_discovery(date) {
  var d = new Date(date);
  var month = d.getMonth() + 1;
  var day = d.getDate();
  if (month == 1) {
    if (day <= 20) {
      return "Capricorn";
    } else {
      return "Aquarius";
    }
  } else if (month == 2) {
    if (day <= 19) {
      return "Aquarius";
    } else {
      return "Pisces";
    }
  } else if (month == 3) {
    if (day <= 20) {
      return "Pisces";
    } else {
      return "Aries";
    }
  } else if (month == 4) {
    if (day <= 20) {
      return "Aries";
    } else {
      return "Taurus";
    }
  } else if (month == 5) {
    if (day <= 20) {
      return "Taurus";
    } else {
      return "Gemini";
    }
  } else if (month == 6) {
    if (day <= 20) {
      return "Gemini";
    } else {
      return "Cancer";
    }
  } else if (month == 7) {
    if (day <= 22) {
      return "Cancer";
    } else {
      return "Leo";
    }
  } else if (month == 8) {
    if (day <= 23) {
      return "Leo";
    } else {
      return "Virgo";
    }
  } else if (month == 9) {
    if (day <= 22) {
      return "Virgo";
    } else {
      return "Libra";
    }
  } else if (month == 10) {
    if (day <= 22) {
      return "Libra";
    } else {
      return "Scorpio";
    }
  } else if (month == 11) {
    if (day <= 22) {
      return "Scorpio";
    } else {
      return "Sagittarius";
    }
  } else if (month == 12) {
    if (day <= 21) {
      return "Sagittarius";
    } else {
      return "Capricorn";
    }
  }
}

exports.handler = async event => {
  if (event.request.type == "LaunchRequest") {
    return {
      version: "1.0",
      response: {
        shouldEndSession: false,
        outputSpeech: {
          type: "PlainText",
          text:
            "Welcome to Aster caster, your source for horoscopes. You can ask for today, tomorrow or yesterday's horoscope, mood, color, lucky number and compatibility for your zodiacal sign"
        },
        reprompt: {
          outputSpeech: {
            type: "PlainText",
            text:
              "You can say: What is Taurus horoscope for today? Or What is today's best match for Virgo? What is Aquarius mood?"
          }
        }
      }
    };
  } else if (event.request.type == "SessionEndedRequest") {
    return {
      version: "1.0",
      response: {
        shouldEndSession: true,
        outputSpeech: {
          type: "PlainText",
          text: "Okay then"
        }
      }
    };
  } else {
    var sign, day;
    switch (event.request.intent.name) {
      case "Horoscope":
        if (event.request.dialogState != "COMPLETED") {
          const SIGN = event.request.intent.slots.sign.value;
          if (!SIGN) {
            return {
              version: "1.0",
              response: {
                shouldEndSession: false,
                directives: [
                  {
                    type: "Dialog.Delegate"
                  }
                ]
              }
            };
          } else {
            sign = SIGN.toLowerCase();
            day = "today";
            const DAY = event.request.intent.slots.when.value;
            if (DAY) {
              day = DAY.toLowerCase();
            }

            var initializePromise = initialize(sign, day);
            return await initializePromise.then(
              function(result) {
                return {
                  version: "1.0",
                  response: {
                    shouldEndSession: false,
                    outputSpeech: {
                      type: "PlainText",
                      text: result.description
                    }
                  }
                };
              },
              function(err) {
                console.log(err);
              }
            );
          }
        } else {
          return stopIt("Session closed");
        }
      case "Mood":
        if (event.request.dialogState != "COMPLETED") {
          const SIGN = event.request.intent.slots.sign.value;
          if (!SIGN) {
            return {
              version: "1.0",
              response: {
                shouldEndSession: false,
                directives: [
                  {
                    type: "Dialog.Delegate"
                  }
                ]
              }
            };
          } else {
            sign = SIGN.toLowerCase();
            day = "today";
            const DAY = event.request.intent.slots.when.value;
            if (DAY) {
              day = DAY.toLowerCase();
            }

            var initializeMoodPromise = initialize(sign, day);
            return await initializeMoodPromise.then(
              function(result) {
                return {
                  version: "1.0",
                  response: {
                    shouldEndSession: false,
                    outputSpeech: {
                      type: "PlainText",
                      text: result.mood
                    }
                  }
                };
              },
              function(err) {
                console.log(err);
              }
            );
          }
        } else {
          return stopIt("Session closed");
        }
      case "Lucky_number":
        if (event.request.dialogState != "COMPLETED") {
          const SIGN = event.request.intent.slots.sign.value;
          if (!SIGN) {
            return {
              version: "1.0",
              response: {
                shouldEndSession: false,
                directives: [
                  {
                    type: "Dialog.Delegate"
                  }
                ]
              }
            };
          } else {
            sign = SIGN.toLowerCase();
            day = "today";
            const DAY = event.request.intent.slots.when.value;
            if (DAY) {
              day = DAY.toLowerCase();
            }

            var initializeMoodPromise = initialize(sign, day);
            return await initializeMoodPromise.then(
              function(result) {
                return {
                  version: "1.0",
                  response: {
                    shouldEndSession: false,
                    outputSpeech: {
                      type: "PlainText",
                      text: result.lucky_number
                    }
                  }
                };
              },
              function(err) {
                console.log(err);
              }
            );
          }
        } else {
          return stopIt("Session closed");
        }
      case "Compatibility":
        if (event.request.dialogState != "COMPLETED") {
          const SIGN = event.request.intent.slots.sign.value;
          if (!SIGN) {
            return {
              version: "1.0",
              response: {
                shouldEndSession: false,
                directives: [
                  {
                    type: "Dialog.Delegate"
                  }
                ]
              }
            };
          } else {
            sign = SIGN.toLowerCase();
            day = "today";
            const DAY = event.request.intent.slots.when.value;
            if (DAY) {
              day = DAY.toLowerCase();
            }

            var initializeMoodPromise = initialize(sign, day);
            return await initializeMoodPromise.then(
              function(result) {
                return {
                  version: "1.0",
                  response: {
                    shouldEndSession: false,
                    outputSpeech: {
                      type: "PlainText",
                      text: result.compatibility
                    }
                  }
                };
              },
              function(err) {
                console.log(err);
              }
            );
          }
        } else {
          return stopIt("Session closed");
        }
      case "Color":
        if (event.request.dialogState != "COMPLETED") {
          const SIGN = event.request.intent.slots.sign.value;
          if (!SIGN) {
            return {
              version: "1.0",
              response: {
                shouldEndSession: false,
                directives: [
                  {
                    type: "Dialog.Delegate"
                  }
                ]
              }
            };
          } else {
            sign = SIGN.toLowerCase();
            day = "today";
            const DAY = event.request.intent.slots.when.value;
            if (DAY) {
              day = DAY.toLowerCase();
            }

            var initializeMoodPromise = initialize(sign, day);
            return await initializeMoodPromise.then(
              function(result) {
                return {
                  version: "1.0",
                  response: {
                    shouldEndSession: false,
                    outputSpeech: {
                      type: "PlainText",
                      text: result.color
                    }
                  }
                };
              },
              function(err) {
                console.log(err);
              }
            );
          }
        } else {
          return stopIt("Session closed");
        }
      case "Sign_discovery":
        if (event.request.dialogState != "COMPLETED") {
          const date = event.request.intent.slots.date.value;
          var sign = sign_discovery(date);
          return {
            version: "1.0",
            response: {
              shouldEndSession: false,
              outputSpeech: {
                type: "PlainText",
                text: "The sign is " + sign
              }
            }
          };
        } else {
          return stopIt("Session closed");
        }
      case "AMAZON.HelpIntent":
        return {
          version: "1.0",
          response: {
            shouldEndSession: false,
            outputSpeech: {
              type: "PlainText",
              text:
                "I can read your horoscope for today, tomorrow and even yesterday. You just have to ask and tell me your zodiacal sign."
            }
          }
        };
      case "AMAZON.CancelIntent":
        return stopIt("Cancelled.");
      case "AMAZON.StopIntent":
        return stopIt("Okay!");
      case "AMAZON.NavigateHomeIntent":
        return stopIt("Okay!");
      default:
        return {
          version: "1.0",
          response: {
            shouldEndSession: false,
            outputSpeech: {
              type: "PlainText",
              text: "I am sorry. I didn't get that. Could you try again?"
            }
          }
        };
    }
  }
};
