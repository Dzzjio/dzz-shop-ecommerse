import { FC, useEffect, useState } from 'react';
import { TagsContainer } from './styled';

interface IProps {
  onChange: (value: string) => void 
}

const Tags: FC<IProps> = ({ onChange }) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const tags = [
    'vintage',
    'wedding',
    'Cotton',
    'Linen',
    'Navy',
    'Urban',
    'Business Meeting',
    'Formal',
  ];

  const generateFilterUrl = (chosenTags: string[]) => {
    const originUrl = window.location.origin + window.location.pathname;
    let finalUrl = '';

    if (chosenTags.length > 0) {
      const tagsString = chosenTags.join(',');
      onChange(tagsString);
      finalUrl = `${originUrl}?tags=${tagsString}`;
    } else {
      finalUrl = originUrl;
    }

    window.history.pushState('', '', finalUrl);
  };

  const toggleTag = (tag: string) => {
    const isActive = activeTags.includes(tag);
    let updatedTags;
    if (isActive) {
      updatedTags = activeTags.filter((t) => t !== tag);
    } else {
      updatedTags = [...activeTags, tag];
    }
    generateFilterUrl(updatedTags);
    setActiveTags(updatedTags);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const tagsParam = url.searchParams.get("tags");
    if (tagsParam) {
      const arr: string[] = tagsParam.split(',');
      setActiveTags(arr);
    }
  }, []);

  return (
    <TagsContainer>
      <h4>Tags</h4>
      <div className="tag-span-container">
        {tags.map((tag, index) => (
          <span
            onClick={() => toggleTag(tag)}
            key={index}
            className={`tag-span ${(activeTags.includes(tag)) ? 'active' : ''}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </TagsContainer>
  );
};

export default Tags;