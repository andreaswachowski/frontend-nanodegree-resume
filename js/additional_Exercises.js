// name should be of the form "firstName LastName"
// inName then returns "Firstname LASTNAME"
function inName(name) {
  nameParts = name.trim().split(" ");
  internationalizedName = nameParts[0][0].toUpperCase() +
    nameParts[0].slice(1).toLowerCase() +
    " " +
    nameParts[1].toUpperCase();
  // console.log(internationalizedName);
  return internationalizedName;
}

function getRelationship(x,y) {
  var xIsNumber = !isNaN(parseFloat(x)) && isFinite(x);
  var yIsNumber = !isNaN(parseFloat(y)) && isFinite(y);
  if (xIsNumber && yIsNumber) {
    if (x > y) {
      return ">";
    } else if (x < y) {
      return "<";
    } else {
      return "=";
    }
  } else if (!(xIsNumber || yIsNumber)) {
    return "Can't compare relationships because " + x + " and " + y + " are not numbers";
  }
  // Remaining case: Either x or y is not a number
  var notNumber = !xIsNumber ? x : y;
  return "Can't compare relationships because " + notNumber + " is not a number";
}

function alphabetizer(names) {
  var namesByLastName = [];
  for (var fullName in names) {
    var firstAndLast = names[fullName].split(" ");
    namesByLastName.push(firstAndLast[1] + ", " + firstAndLast[0]);
  }
  namesByLastName.sort();
  return namesByLastName;
}

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
  var ruleResults = [];
  for (var idx in results.formattedResults.ruleResults)
  {
      ruleResults.push(results.formattedResults.ruleResults[idx].localizedRuleName);
  }
  return ruleResults;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    var totalRequestSize = 0;
    for (var stat in results.pageStats) {
        if (stat.match(/Bytes$/)) {
            totalRequestSize += parseInt(results.pageStats[stat]);
        }
    }
    return totalRequestSize;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));

