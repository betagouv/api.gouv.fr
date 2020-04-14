import React, { useState, useEffect } from 'react';

/**
 * Generates every string to be displayed
 * for instance 'abc' => ['a','ab','abc','ab','a']
 * @param {} sentences
 */
const generateTextToType = sentences => {
  const text = [];
  let currText = '';

  sentences.forEach(sentence => {
    // type in
    for (let i = 0; i < sentence.length; i++) {
      currText = currText + sentence[i];
      text.push(currText);
    }

    // deleting
    for (let i = 0; i < sentence.length; i++) {
      currText = currText.substring(0, currText.length - 1);
      text.push(currText);
    }
  });
  return text;
};

/**
 * Computes the time to wait before next type.
 * i.e. the speed feeling
 * @param {*} index
 */
const computeTimeUntillNextType = (textToType, index) => {
  const pause = 1100;
  const randomType = () => 150 - Math.random() * 100;

  if (index === textToType.length - 1) {
    return pause;
  }
  if (index === 0) {
    return randomType();
  }

  const previous = textToType[index - 1].length;
  const current = textToType[index].length;
  const next = textToType[index + 1].length;

  if (previous < current && current < next) {
    // forward
    return randomType();
  }
  if (previous < current && current > next) {
    // end of sentence
    return pause;
  }
  if (previous > current && current > next) {
    // backward
    return randomType() / 2;
  }
  if (previous > current && current < next) {
    // start of sentence
    return pause;
  }
};

const TypingCarousel = ({ textToType }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const infiniteType = () => {
      let newIndex = index === textToType.length - 1 ? 0 : index + 1;

      const timeUntillNextType = computeTimeUntillNextType(textToType, index);
      window.setTimeout(() => setIndex(newIndex), timeUntillNextType);
    };

    infiniteType();
  }, [index, textToType]);

  return (
    <>
      {textToType[index]}
      <span className="blink">|</span>
    </>
  );
};

/**
 * Carousel needs to be wrapped not to recreate the typer iterator at every refresh
 */
const TypingCarouselWrapper = ({ txtBefore, txtAfter, sentences }) => {
  const textToType = generateTextToType(sentences);
  return (
    <>
      {txtBefore}
      <TypingCarousel textToType={textToType} />
      {txtAfter}
    </>
  );
};

export default TypingCarouselWrapper;
