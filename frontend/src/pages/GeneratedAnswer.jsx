// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/GeneratedAnswer.css';

const GeneratedAnswerPage = () => {
  const location = useLocation();
  const { generatedAnswer } = location.state;

  // Parse the string to JSON if it's a string
  const parsedAnswer = typeof generatedAnswer === 'string' ? JSON.parse(generatedAnswer) : generatedAnswer;

  // Function to clean URLs by removing surrounding brackets or parentheses
  const cleanUrl = (url) => {
    return url.replace(/^[[(<]+|[\])>]+$/g, ''); // Remove surrounding square brackets, parentheses, and angle brackets
  };

  // Function to group titles and their content into a single card
  const groupContent = (answer) => {
    const grouped = [];
    const lines = answer.split('\n');
    let currentSection = null;

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (
        trimmedLine.startsWith('##') || 
        trimmedLine.startsWith('###') ||
        trimmedLine === 'Resources' ||
        trimmedLine === 'Beginner' ||
        trimmedLine === 'Intermediate' ||
        trimmedLine === 'Advanced' ||
        trimmedLine === 'Courses' ||
        trimmedLine === 'Projects' ||
        /^[0-9]+\./.test(trimmedLine) || 
        trimmedLine.toLowerCase() === 'roadmap' ||
        trimmedLine.toLowerCase() === 'introduction'
      ) {
        if (currentSection) {
          grouped.push(currentSection);
        }
        currentSection = {
          title: trimmedLine.replace(/^#+\s*/, '').replace(/\\/g, ''), // Remove leading ## and **
          content: []
        };
      } else if (currentSection) {
        // Remove leading asterisks and double asterisks
        const contentLine = trimmedLine.replace(/^\\s/, '').replace(/^\\/, '').replace(/\\/g, ''); // Remove leading * and **
        currentSection.content.push(contentLine);
      }
    });

    if (currentSection) {
      grouped.push(currentSection);
    }

    return grouped;
  };

  const groupedContent = parsedAnswer.parts.flatMap(part => groupContent(part.text));

  return (
    <div className="generated-answer-page">
      {groupedContent.map((section, index) => (
        <div key={index} className="card">
          <h2>{section.title}</h2>
          <ul>
            {section.content.map((line, idx) => {
              const urlMatch = line.match(/(https?:\/\/[^\s]+)/g);
              const cleanedLine = urlMatch ? cleanUrl(line) : line;
              return (
                <li key={idx}>
                  {urlMatch ? (
                    urlMatch.map((url, i) => (
                      <a key={i} href={cleanUrl(url)} target="_blank" rel="noopener noreferrer">
                        {cleanUrl(url)}
                      </a>
                    ))
                  ) : (
                    <span>{cleanedLine}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GeneratedAnswerPage;