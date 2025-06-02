const questions = [
  {
    question: "1. What does the toLowerCase() method do in JavaScript?",
    options: [
      "A) Converts all characters to uppercase",
      "B) Converts all characters to lowercase",
      "C) Checks the case of the first character",
      "D) Reverses the string case",
    ],
    answer: "B) Converts all characters to lowercase",
  },
  {
    question: "2. What is the result of 'JAVASCRIPT'.toLowerCase()?",
    options: [
      "A) 'JavaScript'",
      "B) 'javascript'",
      "C) 'JAVASCRIPT'",
      "D) Error",
    ],
    answer: "B) 'javascript'",
  },
  {
    question: "3. Which method returns the number of characters in a string?",
    options: ["A) length()", "B) count()", "C) size()", "D) length"],
    answer: "D) length",
  },
  {
    question:
      "4. How can you extract the first character of a string in JavaScript?",
    options: [
      "A) str.charAt(0)",
      "B) str[0]",
      "C) str.slice(0, 1)",
      "D) All of the above",
    ],
    answer: "D) All of the above",
  },
  {
    question: "5. Which method is used to find the index of a substring?",
    options: ["A) findIndex()", "B) indexOf()", "C) search()", "D) locate()"],
    answer: "B) indexOf()",
  },
  // {
  //   question: "6. What does str.slice(1) return for 'Hello'?",
  //   options: ["A) 'H'", "B) 'ello'", "C) 'Hell'", "D) 'Hello'"],
  //   answer: "B) 'ello'",
  // },
  // {
  //   question: "7. What is the result of 'Apple'.charAt(3)?",
  //   options: ["A) 'p'", "B) 'l'", "C) 'e'", "D) 'A'"],
  //   answer: "B) 'l'",
  // },
  // {
  //   question: "8. What does the method toUpperCase() return for 'hello'?",
  //   options: ["A) 'hello'", "B) 'HELLO'", "C) 'Hello'", "D) 'hElLo'"],
  //   answer: "B) 'HELLO'",
  // },
  // {
  //   question: "9. What happens when you call toLowerCase() on an empty string?",
  //   options: ["A) null", "B) undefined", "C) '' (empty string)", "D) Error"],
  //   answer: "C) '' (empty string)",
  // },
  // {
  //   question: "10. Which method allows you to extract a portion of a string?",
  //   options: ["A) extract()", "B) get()", "C) slice()", "D) part()"],
  //   answer: "C) slice()",
  // },
  // {
  //   question: "11. What is the output of 'JavaScript'.slice(4, 10)?",
  //   options: ["A) 'Script'", "B) 'Scrip'", "C) 'JavaSc'", "D) 'ript'"],
  //   answer: "A) 'Script'",
  // },
  // {
  //   question: "12. What does 'hello world'.indexOf('o') return?",
  //   options: ["A) 4", "B) 5", "C) 6", "D) 7"],
  //   answer: "A) 4",
  // },
  // {
  //   question: "13. What does the trim() method do?",
  //   options: [
  //     "A) Trims characters from a string",
  //     "B) Removes spaces from both ends of a string",
  //     "C) Cuts the string into two halves",
  //     "D) Removes all spaces from the string",
  //   ],
  //   answer: "B) Removes spaces from both ends of a string",
  // },
  // {
  //   question: "14. Which method can be used to replace part of a string?",
  //   options: ["A) change()", "B) replace()", "C) substitute()", "D) convert()"],
  //   answer: "B) replace()",
  // },
  // {
  //   question: "15. What does 'banana'.lastIndexOf('a') return?",
  //   options: ["A) 1", "B) 3", "C) 5", "D) 0"],
  //   answer: "C) 5",
  // },
  // {
  //   question: "16. What is the result of 'JavaScript'.charAt(0)?",
  //   options: ["A) 'J'", "B) 'a'", "C) 'Java'", "D) 'S'"],
  //   answer: "A) 'J'",
  // },
  // {
  //   question: "17. What does 'Hello'.toUpperCase().toLowerCase() return?",
  //   options: ["A) 'HELLO'", "B) 'hello'", "C) 'Hello'", "D) Error"],
  //   answer: "B) 'hello'",
  // },
  // {
  //   question:
  //     "18. How do you capitalize the first letter of a string in JavaScript?",
  //   options: [
  //     "A) toUpperCase(str[0]) + str.slice(1)",
  //     "B) str.toUpperCase()",
  //     "C) str.charAt(0).toUpperCase() + str.slice(1)",
  //     "D) capitalize(str)",
  //   ],
  //   answer: "C) str.charAt(0).toUpperCase() + str.slice(1)",
  // },
  // {
  //   question: "19. What does the includes() method return?",
  //   options: ["A) Index", "B) Boolean", "C) String", "D) Array"],
  //   answer: "B) Boolean",
  // },
  // {
  //   question:
  //     "20. Which of the following checks if a string contains a certain substring?",
  //   options: ["A) contains()", "B) indexOf()", "C) includes()", "D) match()"],
  //   answer: "C) includes()",
  // },
  // {
  //   question: "21. What does 'JavaScript'.substring(4, 10) return?",
  //   options: ["A) 'Script'", "B) 'Scrip'", "C) 'JavaS'", "D) 'ript'"],
  //   answer: "A) 'Script'",
  // },
  // {
  //   question: "22. What does 'JavaScript'.substring(4) return?",
  //   options: ["A) 'Script'", "B) 'avaScript'", "C) 'JavaScript'", "D) 'ript'"],
  //   answer: "A) 'Script'",
  // },
  // {
  //   question: "23. What does 'JavaScript'.substr(4, 3) return?",
  //   options: ["A) 'Scr'", "B) 'Scrip'", "C) 'ipt'", "D) 'rpt'"],
  //   answer: "A) 'Scr'",
  // },
  // {
  //   question: "24. What does 'banana'.indexOf('a', 2) return?",
  //   options: ["A) 1", "B) 3", "C) 5", "D) 2"],
  //   answer: "B) 3",
  // },
  // {
  //   question:
  //     "25. What will be returned if a substring is not found using indexOf()?",
  //   options: ["A) null", "B) undefined", "C) -1", "D) 0"],
  //   answer: "C) -1",
  // },
  // {
  //   question:
  //     "26. What method is used to extract the day of the week as a number?",
  //   options: [
  //     "A) getDay()",
  //     "B) getDate()",
  //     "C) getMonth()",
  //     "D) getWeekday()",
  //   ],
  //   answer: "A) getDay()",
  // },
  // {
  //   question: "27. What is the return type of toLowerCase() method?",
  //   options: ["A) Number", "B) String", "C) Boolean", "D) Array"],
  //   answer: "B) String",
  // },
  // {
  //   question:
  //     "28. What is the output of 'Hello World'.toLowerCase().indexOf('world')?",
  //   options: ["A) 6", "B) -1", "C) 0", "D) 5"],
  //   answer: "A) 6",
  // },
  // {
  //   question: "29. What does str.slice(i, i + 2) check for?",
  //   options: [
  //     "A) Uppercase letters",
  //     "B) A single space",
  //     "C) Two consecutive characters",
  //     "D) String length",
  //   ],
  //   answer: "C) Two consecutive characters",
  // },
  // {
  //   question: "30. What happens when you call toLowerCase() on null?",
  //   options: [
  //     "A) Returns null",
  //     "B) Returns 'null'",
  //     "C) Throws an error",
  //     "D) Returns empty string",
  //   ],
  //   answer: "C) Throws an error",
  // },
  // {
  //   question: "31. What does 'Hello'.toUpperCase().toLowerCase() return?",
  //   options: ["A) 'HELLO'", "B) 'hello'", "C) 'Hello'", "D) Error"],
  //   answer: "B) 'hello'",
  // },
  // {
  //   question:
  //     "32. What is the correct way to capitalize the first letter and lowercase the rest of a string?",
  //   options: [
  //     "A) toUpperCase() on the entire string",
  //     "B) toLowerCase() on the entire string",
  //     "C) charAt(0).toUpperCase() + slice(1).toLowerCase()",
  //     "D) JavaScript doesn’t support this",
  //   ],
  //   answer: "C) charAt(0).toUpperCase() + slice(1).toLowerCase()",
  // },
  // {
  //   question: "33. What does '123abc'.toUpperCase() return?",
  //   options: ["A) '123ABC'", "B) '123abc'", "C) '123aBc'", "D) Error"],
  //   answer: "A) '123ABC'",
  // },
  // {
  //   question:
  //     "34. How can you check if a string contains a lowercase word regardless of case?",
  //   options: [
  //     "A) Use includes()",
  //     "B) Use toLowerCase() and includes()",
  //     "C) Use toUpperCase() and includes()",
  //     "D) Both B and C",
  //   ],
  //   answer: "D) Both B and C",
  // },
  // {
  //   question: "35. What does 'Café'.toUpperCase() return?",
  //   options: ["A) 'CAFÉ'", "B) 'CAFE'", "C) 'café'", "D) Depends on locale"],
  //   answer: "A) 'CAFÉ'",
  // },
  // {
  //   question: "36. What is the result of calling 'Hello'.charAt(1)?",
  //   options: ["A) 'H'", "B) 'e'", "C) 'l'", "D) 'o'"],
  //   answer: "B) 'e'",
  // },
  // {
  //   question: "37. What does 'JavaScript'.charAt(4) return?",
  //   options: ["A) 'c'", "B) 'S'", "C) 'a'", "D) 'r'"],
  //   answer: "B) 'S'",
  // },
  // {
  //   question:
  //     "38. What happens if you call charAt() with an out-of-range index?",
  //   options: [
  //     "A) Returns null",
  //     "B) Returns undefined",
  //     "C) Returns '' (empty string)",
  //     "D) Throws an error",
  //   ],
  //   answer: "C) Returns '' (empty string)",
  // },
  // {
  //   question:
  //     "39. Which method can help determine if a string starts with a specific character?",
  //   options: ["A) startsWith()", "B) includes()", "C) charAt()", "D) slice()"],
  //   answer: "A) startsWith()",
  // },
  // {
  //   question: "40. Valid use of toLowerCase()?",
  //   options: [
  //     "A) var str = 'HELLO'; str[0].toLowerCase();",
  //     "B) var str = 123; str.toLowerCase();",
  //     "C) var str = 'Hello'; str.toLowerCase;",
  //     "D) var str = 'HI'; str = str.toLowerCase();",
  //   ],
  //   answer: "D) var str = 'HI'; str = str.toLowerCase();",
  // },
  // {
  //   question: '41. What does slice(0, 1) return for the string "Boston"?',
  //   options: ['A) "Bos"', 'B) "B"', 'C) "Bo"', 'D) "Boston"'],
  //   answer: 'B) "B"',
  // },
  // {
  //   question: '42. What is the result of "Boston".slice(2)?',
  //   options: ['A) "ston"', 'B) "Bos"', 'C) "st"', 'D) "oston"'],
  //   answer: 'A) "ston"',
  // },
  // {
  //   question: '43. How to abbreviate "November" to "Nov"?',
  //   options: [
  //     "A) slice(0, 2)",
  //     "B) slice(0, 3)",
  //     "C) slice(3)",
  //     "D) slice(1, 3)",
  //   ],
  //   answer: "B) slice(0, 3)",
  // },
  // {
  //   question: '44. What does str.length return for str = "Hello"?',
  //   options: ["A) 4", "B) 5", "C) 6", "D) Error"],
  //   answer: "B) 5",
  // },
  // {
  //   question:
  //     "45. What is the purpose of slice(1) in the code cityToCheck.slice(1)?",
  //   options: [
  //     "A) Extract the first character",
  //     "B) Extract all characters except the first",
  //     "C) Reverse the string",
  //     "D) Convert to lowercase",
  //   ],
  //   answer: "B) Extract all characters except the first",
  // },
  // {
  //   question:
  //     "46. How to capitalize the first letter of cityName and lowercase the rest?",
  //   options: [
  //     "A) cityName[0].toUpperCase() + cityName.slice(1).toLowerCase()",
  //     "B) cityName.toUpperCase()",
  //     "C) cityName.toLowerCase()",
  //     "D) cityName.slice(0).toUpperCase()",
  //   ],
  //   answer: "A) cityName[0].toUpperCase() + cityName.slice(1).toLowerCase()",
  // },
  // {
  //   question:
  //     "47. What does str.slice(i, i + 2) do in the double-space detection example?",
  //   options: [
  //     "A) Checks for a single space",
  //     "B) Extracts a 2-character substring starting at index i",
  //     "C) Replaces spaces",
  //     "D) Converts to uppercase",
  //   ],
  //   answer: "B) Extracts a 2-character substring starting at index i",
  // },
  // {
  //   question:
  //     "48. Why is i < numChars used in the loop for checking double spaces?",
  //   options: [
  //     "A) To include the last character",
  //     "B) To avoid index overflow",
  //     "C) To skip the first character",
  //     "D) To reverse the string",
  //   ],
  //   answer: "B) To avoid index overflow",
  // },
  // {
  //   question: '49. What is monthAbbrev if month = "April"?',
  //   options: ['A) "Apr"', 'B) "Apri"', 'C) "Ap"', 'D) "pril"'],
  //   answer: 'A) "Apr"',
  // },
  // {
  //   question: '50. What happens if slice(2, 5) is applied to "JavaScript"?',
  //   options: ['A) "vaS"', 'B) "vaSc"', 'C) "aSc"', 'D) "vasc"'],
  //   answer: 'C) "aSc"',
  // },
  // {
  //   question: '51. What does "JavaScript".slice(4, 7) return?',
  //   options: ['A) "Scr"', 'B) "Scri"', 'C) "Sc"', 'D) "ipt"'],
  //   answer: 'A) "Scr"',
  // },
  // {
  //   question: '52. If str = "Hello World", what is str.slice(6, 11)?',
  //   options: ['A) "World"', 'B) "World "', 'C) "Worl"', 'D) "Worlds"'],
  //   answer: 'A) "World"',
  // },
  // {
  //   question: '53. What is the result of "Example".slice(3)?',
  //   options: ['A) "mple"', 'B) "exa"', 'C) "Exa"', 'D) "ple"'],
  //   answer: 'A) "mple"',
  // },
  // {
  //   question: '54. What does "Programming".slice(-3) return?',
  //   options: ['A) "ing"', 'B) "min"', 'C) "gra"', "D) Error"],
  //   answer: 'A) "ing"',
  // },
  // {
  //   question: '55. What is "".length?',
  //   options: ["A) 0", "B) undefined", "C) 1", "D) null"],
  //   answer: "A) 0",
  // },
  // {
  //   question: '56. What does "Hello".length evaluate to?',
  //   options: ["A) 4", "B) 5", "C) 6", "D) Error"],
  //   answer: "B) 5",
  // },
  // {
  //   question: '57. Which code converts input = "lONDON" to "London"?',
  //   options: [
  //     "A) input[0].toUpperCase() + input.slice(1).toLowerCase();",
  //     "B) input.toLowerCase();",
  //     "C) input.toUpperCase();",
  //     "D) input.slice(0, 1).toUpperCase() + input.slice(1);",
  //   ],
  //   answer: "A) input[0].toUpperCase() + input.slice(1).toLowerCase();",
  // },
  // {
  //   question: '58. What is cappedCity if cityToCheck = "nEW york"?',
  //   options: ['A) "New York"', 'B) "New york"', 'C) "N"', 'D) "NEW YORK"'],
  //   answer: 'B) "New york"',
  // },
  // {
  //   question:
  //     "59. In the double-space detection loop, why is i < numChars used instead of i <= numChars?",
  //   options: [
  //     "A) To prevent checking beyond the string length",
  //     "B) To skip the last character",
  //     "C) To start indexing at 1",
  //     "D) To include all characters",
  //   ],
  //   answer: "A) To prevent checking beyond the string length",
  // },
  // {
  //   question: "60. What does str.slice(i, i + 2) check for?",
  //   options: [
  //     "A) A single space",
  //     "B) Two consecutive spaces",
  //     "C) Uppercase letters",
  //     "D) The string length",
  //   ],
  //   answer: "B) Two consecutive spaces",
  // },
  // {
  //   question: '61. What is "Hi".slice(0, 5)?',
  //   options: ['A) "Hi"', 'B) "H"', "C) Error", "D) Undefined"],
  //   answer: 'A) "Hi"',
  // },
  // {
  //   question: "62. What happens if slice(1) is called on an empty string?",
  //   options: [
  //     'A) Returns ""',
  //     "B) Throws an error",
  //     "C) Returns undefined",
  //     "D) Returns null",
  //   ],
  //   answer: 'A) Returns ""',
  // },
  // {
  //   question: '63. How to abbreviate "September" to "Sep"?',
  //   options: [
  //     'A) "September".slice(0, 2)',
  //     'B) "September".slice(0, 3)',
  //     'C) "September".slice(3)',
  //     'D) "September".slice(1, 4)',
  //   ],
  //   answer: 'B) "September".slice(0, 3)',
  // },
  // {
  //   question:
  //     '64. What does this code do?\n\nlet str = "CheckDoubleSpaces";\nfor (let i = 0; i < str.length; i++) {\n  if (str.slice(i, i + 2) === "  ") {\n    alert("Found!");\n  }\n}',
  //   options: [
  //     "A) Checks for lowercase letters",
  //     "B) Checks for two consecutive spaces",
  //     "C) Capitalizes the string",
  //     "D) Reverses the string",
  //   ],
  //   answer: "B) Checks for two consecutive spaces",
  // },
  // {
  //   question:
  //     '65. What does text.indexOf("World War II") return if the substring is not found?',
  //   options: ["A) 0", "B) -1", "C) null", "D) undefined"],
  //   answer: "B) -1",
  // },
  // {
  //   question:
  //     "66. What does text.slice(0, firstChar) do in the replacement code?",
  //   options: [
  //     'A) Extracts the substring after "World War II"',
  //     'B) Extracts the substring before "World War II"',
  //     'C) Deletes "World War II"',
  //     "D) Converts the string to lowercase",
  //   ],
  //   answer: 'B) Extracts the substring before "World War II"',
  // },
  // {
  //   question:
  //     '67. Why might the loop-based approach replace only the first occurrence of "World War II"?',
  //   options: [
  //     "A) indexOf stops after the first match",
  //     "B) The loop terminates after one iteration",
  //     "C) slice modifies the original string",
  //     "D) JavaScript does not support global replacements",
  //   ],
  //   answer: "A) indexOf stops after the first match",
  // },
  // {
  //   question:
  //     '68. What is segIndex after running text.lastIndexOf("be") on text = "To be or not to be."?',
  //   options: ["A) 3", "B) 16", "C) -1", "D) 0"],
  //   answer: "B) 16",
  // },
  // {
  //   question: '69. What does "Hello World".indexOf("hello") return?',
  //   options: ["A) 0", "B) 6", "C) -1", "D) 7"],
  //   answer: "C) -1",
  // },
  // {
  //   question:
  //     "70. What happens if text.slice(i + 12) is called when i + 12 exceeds the string length?",
  //   options: [
  //     "A) Returns an empty string",
  //     "B) Throws an error",
  //     "C) Returns undefined",
  //     "D) Returns the full string",
  //   ],
  //   answer: "A) Returns an empty string",
  // },
  // {
  //   question:
  //     '71. Which code snippet replaces all instances of "cat" with "dog" in a string?',
  //   options: [
  //     'A) while (text.indexOf("cat") !== -1) { text = text.replace("cat", "dog"); }',
  //     'B) text.replace("cat", "dog");',
  //     'C) text.slice(0, text.indexOf("cat")) + "dog" + text.slice(text.indexOf("cat") + 3);',
  //     'D) text.toUpperCase().replace("CAT", "DOG");',
  //   ],
  //   answer:
  //     'A) while (text.indexOf("cat") !== -1) { text = text.replace("cat", "dog"); }',
  // },
  // {
  //   question: '72. What is the result of "apple".indexOf("p")?',
  //   options: ["A) 0", "B) 1", "C) 2", "D) -1"],
  //   answer: "B) 1",
  // },
  // {
  //   question:
  //     "73. What does text.slice(firstChar + 12) do in the replacement example?",
  //   options: [
  //     'A) Extracts the substring starting after "World War II"',
  //     'B) Extracts the substring starting before "World War II"',
  //     "C) Deletes 12 characters",
  //     "D) Converts the substring to uppercase",
  //   ],
  //   answer: 'A) Extracts the substring starting after "World War II"',
  // },
  // {
  //   question: "74. How does lastIndexOf differ from indexOf?",
  //   options: [
  //     "A) lastIndexOf searches backward from the end of the string",
  //     "B) lastIndexOf is case-insensitive",
  //     "C) lastIndexOf returns an array of indices",
  //     "D) lastIndexOf does not exist in JavaScript",
  //   ],
  //   answer: "A) lastIndexOf searches backward from the end of the string",
  // },
  // {
  //   question: '75. What does "hello world".indexOf("o", 5) return?',
  //   options: ["A) 4", "B) 7", "C) -1", "D) 6"],
  //   answer: "B) 7",
  // },
  // {
  //   question: '76. What is "abracadabra".lastIndexOf("a", 5)?',
  //   options: ["A) 0", "B) 3", "C) 5", "D) 4"],
  //   answer: "B) 3",
  // },
  // {
  //   question:
  //     '77. What is the result of replacing "cat" with "dog" in "catcatcat" using a loop?',
  //   options: ['A) "dogdogdog"', 'B) "dogcatcat"', 'C) "catdogdog"', "D) Error"],
  //   answer: 'A) "dogdogdog"',
  // },
  // {
  //   question: "78. What does text.slice(i + length) do in replacement code?",
  //   options: [
  //     "A) Extracts the part after the substring",
  //     "B) Extracts the part before the substring",
  //     "C) Deletes the substring",
  //     "D) Reverses the string",
  //   ],
  //   answer: "A) Extracts the part after the substring",
  // },
  // {
  //   question: '79. What does "Hello".indexOf("hello") return?',
  //   options: ["A) 0", "B) -1", "C) 4", "D) 1"],
  //   answer: "B) -1",
  // },
  // {
  //   question: '80. What is "".indexOf("test")?',
  //   options: ["A) 0", "B) -1", "C) undefined", "D) 1"],
  //   answer: "B) -1",
  // },
  // {
  //   question:
  //     "81. Why is a while loop used to replace all instances of a substring?",
  //   options: [
  //     "A) To ensure replacements continue until none remain",
  //     "B) To limit replacements to one iteration",
  //     "C) To avoid using indexOf",
  //     "D) To reverse the string",
  //   ],
  //   answer: "A) To ensure replacements continue until none remain",
  // },
  // {
  //   question:
  //     "82. What happens if indexOf is not updated in a loop replacing substrings?",
  //   options: [
  //     "A) Infinite loop",
  //     "B) Only the first instance is replaced",
  //     "C) The string is reversed",
  //     "D) No change occurs",
  //   ],
  //   answer: "A) Infinite loop",
  // },
  // {
  //   question: "83. How does includes() differ from indexOf()?",
  //   options: [
  //     "A) includes() returns a boolean; indexOf() returns an index",
  //     "B) includes() is case-insensitive",
  //     "C) includes() cannot handle substrings",
  //     "D) No difference",
  //   ],
  //   answer: "A) includes() returns a boolean; indexOf() returns an index",
  // },
  // {
  //   question: '84. What does "apple".lastIndexOf("p", 2) return?',
  //   options: ["A) 1", "B) 2", "C) -1", "D) 0"],
  //   answer: "A) 1",
  // },
  // {
  //   question:
  //     '85. How to replace the last occurrence of "be" in "To be or not to be"?',
  //   options: [
  //     "A) Use lastIndexOf to find its position and slice",
  //     "B) Use replace directly",
  //     "C) Convert to uppercase first",
  //     "D) Use charAt()",
  //   ],
  //   answer: "A) Use lastIndexOf to find its position and slice",
  // },
  // {
  //   question: '86. What is the output of "banana".indexOf("na", 3)?',
  //   options: ["A) 2", "B) 4", "C) -1", "D) 3"],
  //   answer: "B) 4",
  // },
  // {
  //   question: "87. What is the primary purpose of a function in JavaScript?",
  //   options: [
  //     "A) To store data",
  //     "B) To repeat a block of code whenever invoked",
  //     "C) To style HTML elements",
  //     "D) To create loops",
  //   ],
  //   answer: "B) To repeat a block of code whenever invoked",
  // },
  // {
  //   question: "88. Which keyword is used to declare a function in JavaScript?",
  //   options: ["A) func", "B) def", "C) function", "D) method"],
  //   answer: "C) function",
  // },
  // {
  //   question: "89. How do you invoke a function named tellTime?",
  //   options: [
  //     "A) tellTime",
  //     "B) tellTime[]",
  //     "C) tellTime()",
  //     "D) execute tellTime",
  //   ],
  //   answer: "C) tellTime()",
  // },
  // {
  //   question: "90. What is the correct syntax for defining a function?",
  //   options: [
  //     "A) function tellTime {}",
  //     "B) tellTime() {}",
  //     "C) function tellTime() {}",
  //     "D) def tellTime() {}",
  //   ],
  //   answer: "C) function tellTime() {}",
  // },
  // {
  //   question: "91. In the example, what does tellTime() display?",
  //   options: [
  //     "A) The user’s time zone",
  //     "B) The current time in 24-hour format",
  //     "C) The day of the week",
  //     "D) A random number",
  //   ],
  //   answer: "B) The current time in 24-hour format",
  // },
  // {
  //   question:
  //     "92. Why are functions typically placed before the main code in a script?",
  //   options: [
  //     "A) To improve readability",
  //     "B) To ensure they are loaded in memory before being called",
  //     "C) To reduce file size",
  //     "D) To comply with syntax rules",
  //   ],
  //   answer: "B) To ensure they are loaded in memory before being called",
  // },
  // {
  //   question: "93. Which line creates a Date object in the tellTime function?",
  //   options: [
  //     "A) var theHr = now.getHours();",
  //     "B) var now = new Date();",
  //     'C) alert("Current time: " + theHr + ":" + theMin);',
  //     "D) function tellTime() {",
  //   ],
  //   answer: "B) var now = new Date();",
  // },
  // {
  //   question: "94. What does now.getHours() return?",
  //   options: [
  //     "A) The current minute",
  //     "B) The current hour (0-23)",
  //     "C) The current month",
  //     "D) The day of the week",
  //   ],
  //   answer: "B) The current hour (0-23)",
  // },
  // {
  //   question: "95. Which symbol encloses the body of a function?",
  //   options: [
  //     "A) Parentheses ()",
  //     "B) Square brackets []",
  //     "C) Curly braces {}",
  //     'D) Quotation marks ""',
  //   ],
  //   answer: "C) Curly braces {}",
  // },
  // {
  //   question:
  //     "96. What is the purpose of the parentheses () in a function declaration?",
  //   options: [
  //     "A) To hold parameters (optional)",
  //     "B) To define the return value",
  //     "C) To separate the function name",
  //     "D) To indicate a comment",
  //   ],
  //   answer: "A) To hold parameters (optional)",
  // },
  // {
  //   question: "97. Which variable in tellTime stores the minutes?",
  //   options: ["A) now", "B) theHr", "C) theMin", "D) dayNames"],
  //   answer: "C) theMin",
  // },
  // {
  //   question:
  //     "98. What happens if you omit the parentheses when invoking a function?",
  //   options: [
  //     "A) The function executes automatically",
  //     "B) The function is not called",
  //     "C) It causes a syntax error",
  //     "D) The function returns a value",
  //   ],
  //   answer: "B) The function is not called",
  // },
  // {
  //   question: "99. Which function naming is valid?",
  //   options: ["A) 1tellTime", "B) tell-Time", "C) tellTime", "D) function"],
  //   answer: "C) tellTime",
  // },
  // {
  //   question: "100. What is the role of the alert method in tellTime?",
  //   options: [
  //     "A) To create a Date object",
  //     "B) To extract hours and minutes",
  //     "C) To display a popup with the time",
  //     "D) To format the time string",
  //   ],
  //   answer: "C) To display a popup with the time",
  // },
  // {
  //   question: "101. How many times can a function be invoked in a script?",
  //   options: [
  //     "A) Once",
  //     "B) Twice",
  //     "C) Only before it is defined",
  //     "D) Any number of times",
  //   ],
  //   answer: "D) Any number of times",
  // },
  // {
  //   question: '102. What is the output of alert("time: " + 14 + ":" + 30)?',
  //   options: ["A) time: 14:30", "B) time:14:30", "C) time1430", "D) 14:30"],
  //   answer: "A) time: 14:30",
  // },
  // {
  //   question: "103. Which line ends the function definition?",
  //   options: ["A) }", "B) ;", "C) end", "D) return"],
  //   answer: "A) }",
  // },
  // {
  //   question: "104. What data type is theHr?",
  //   options: ["A) String", "B) Object", "C) Number", "D) Boolean"],
  //   answer: "C) Number",
  // },
  // {
  //   question: "105. Why does the example use var instead of let or const?",
  //   options: [
  //     "A) var is required for functions",
  //     "B) The example uses older syntax",
  //     "C) let causes errors",
  //     "D) const cannot be used inside functions",
  //   ],
  //   answer: "B) The example uses older syntax",
  // },
  // {
  //   question:
  //     "106. What is the scope of variables like now and theHr inside tellTime?",
  //   options: [
  //     "A) Global",
  //     "B) Limited to the function",
  //     "C) Accessible only outside the function",
  //     "D) Static",
  //   ],
  //   answer: "B) Limited to the function",
  // },
  // {
  //   question: "107. What does new Date() represent?",
  //   options: [
  //     "A) A string with the current date",
  //     "B) A Date object instance",
  //     "C) A number of milliseconds",
  //     "D) A deprecated method",
  //   ],
  //   answer: "B) A Date object instance",
  // },
  // {
  //   question: "108. Which method extracts minutes from a Date object?",
  //   options: [
  //     "A) getMinutes()",
  //     "B) getMinute()",
  //     "C) getTime()",
  //     "D) getHour()",
  //   ],
  //   answer: "A) getMinutes()",
  // },
  // {
  //   question: "109. How does the tellTime function format the time?",
  //   options: [
  //     "A) HH:MM AM/PM",
  //     "B) HH-MM",
  //     "C) HH:MM (24-hour format)",
  //     "D) MM:HH",
  //   ],
  //   answer: "C) HH:MM (24-hour format)",
  // },
  // {
  //   question: "110. What is the purpose of indentation in the function body?",
  //   options: [
  //     "A) To comply with syntax rules",
  //     "B) To improve readability",
  //     "C) To reduce execution time",
  //     "D) To define parameters",
  //   ],
  //   answer: "B) To improve readability",
  // },
  // {
  //   question: "111. What happens if you call tellTime before defining it?",
  //   options: [
  //     "A) Error (if not using var)",
  //     "B) It works due to hoisting",
  //     "C) The browser crashes",
  //     "D) It returns undefined",
  //   ],
  //   answer: "B) It works due to hoisting",
  // },
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("options");
const resultBox = document.getElementById("resultBox");
const restartBtn = document.getElementById("restartBtn");
const viewAnswersBtn = document.getElementById("viewAnswersBtn");
const answersBox = document.getElementById("answersBox");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionBox.innerText = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestion].answer;
  const buttons = document.querySelectorAll("#options button");

  userAnswers.push({
    question: questions[currentQuestion].question,
    selected: selectedOption,
    correct: correctAnswer,
  });

  buttons.forEach((btn) => {
    btn.disabled = true;

    if (btn.innerText === correctAnswer) {
      btn.style.backgroundColor = "#77DD77"; // light green
      btn.style.color = "white";
    }

    if (btn.innerText === selectedOption && selectedOption !== correctAnswer) {
      btn.style.backgroundColor = "#FF6961"; // light red
      btn.style.color = "white";
    }
  });

  if (selectedOption === correctAnswer) {
    score++;
  }

  currentQuestion++;

  setTimeout(() => {
    if (currentQuestion < questions.length) loadQuestion();
    else showResult();
  }, 700);
}

function showResult() {
  const scorePercent = document.getElementById("scorePercent");

  const percent = Math.round((score / questions.length) * 100);

  let counter = 0;
  resultBox.style.display = "block";

  const animate = setInterval(() => {
    scorePercent.innerText = `${counter}%`;
    if (counter >= percent) {
      clearInterval(animate);
    }
    counter++;
  }, 20);
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  resultBox.style.display = "none";
  answersBox.style.display = "none";
  loadQuestion();
});

viewAnswersBtn.addEventListener("click", () => {
  answersBox.style.display = "block";
  answersBox.innerHTML = "<h3>Answer Review:</h3>";

  userAnswers.forEach((item) => {
    const isCorrect = item.selected === item.correct;
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>Q: ${item.question}</strong> <br>
      <span style="color: ${isCorrect ? "#77DD77" : "#FF6961"}">
        Your Answer: ${item.selected}
      </span><br>
      <span style="color: green">Correct Answer: ${item.correct}</span>
    `;
    answersBox.appendChild(div);
  });

  answersBox.scrollIntoView({ behavior: "smooth" });
});

// Start
loadQuestion();
