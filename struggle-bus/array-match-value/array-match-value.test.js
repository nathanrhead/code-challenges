'use strict';

const { getMatchingRecords1, getMatchingRecords2, getExactMatch1, getExactMatch2 } = require ('./array-match-value');

const keywords = [
  "housing",
  "Santa Barbara",
  "Lompoc",
  "Santa Maria",
  "Carpinteria",
  "women",
  "spanish",
];

// console.log({keywords});

const databaseRecords = [
  [
    "hunger",
    "american gi forum",
    "nutrition",
    "transit",
    "medical",
    "medical support",
    "pants",
    "community",
    "apartments",
    "shelter",
    "english",
    "720 e. el camino street",
    "shoes",
    "hungry",
    "people",
    "support",
    "neigborhood",
    "clothes",
    "care",
    "shirts",
    "transport",
    "emergency funds for veterans",
    "snacks",
    "rent",
    "veterans",
    "homes",
    "transportation",
    "santa maria",
    "general support",
    "snack",
    "meals",
    "93454",
    "clothing",
    "illness",
    "food",
    "patient",
    "prescription assistance",
    "community support",
    "eat",
    "housing",
    "patients"
  ],
  [
    "alcohol",
    "apartments",
    "shelter",
    "66 s. san antonio street",
    "english",
    "crisis stabilization",
    "transitional shelter",
    "93110",
    "rent",
    "substance use",
    "drugs",
    "addiction",
    "homes",
    "mental illness",
    "santa maria",
    "recovery",
    "212 carmen lane",
    "mentally ill",
    "anka behavioral health",
    "housing for people with mental health issues",
    "93458",
    "santa barbara",
    "housing"
  ],
  [
    "catalog",
    "community",
    "apartments",
    "resource directory",
    "shelter",
    "english",
    "resources",
    "directory",
    "people",
    "medical assistance",
    "support",
    "housing assistance",
    "neigborhood",
    "93110",
    "list",
    "93436",
    "rent",
    "homes",
    "mental illness",
    "lompoc",
    "santa maria",
    "500 west foster road",
    "93454",
    "child home",
    "401 east ocean avenue",
    "resource",
    "community support",
    "santa barbara",
    "429 n san antonio road",
    "housing"
  ],
]

describe ('a function that returns the values from an array that match those in another', () => {

  it ('returns everything from an array that matches a list of key words in a second array', () =>{
    expect(getMatchingRecords1(databaseRecords, keywords)).toEqual([
      'santa maria',
      'housing',
      'santa maria',
      'housing for people with mental health issues',
      'santa barbara',
      'housing',
      'housing assistance',
      'lompoc',
      'santa maria',
      'santa barbara',
      'housing'
    ]);
  });

  it ('returns only unique results, without repeated matches', () => {
    expect(getMatchingRecords2(databaseRecords, keywords)).toEqual([
      'santa maria',
      'housing',
      'housing for people with mental health issues',
      'santa barbara',
      'housing assistance',
      'lompoc'
    ]);
  });

  it ('returns an array of values that exactly match those in the keyword array, using a nested loop', () => {
    expect(getExactMatch1(keywords, getMatchingRecords2(databaseRecords, keywords))).toEqual([ 'housing', 'santa barbara', 'lompoc', 'santa maria' ])
  });

  it ('returns an array of values that exactly match those in the keyword array, using a hashmap', () => {
    expect(getExactMatch2(keywords, getMatchingRecords2(databaseRecords, keywords))).toEqual([ 'housing', 'Santa Barbara', 'Lompoc', 'Santa Maria' ]);
  });
})
