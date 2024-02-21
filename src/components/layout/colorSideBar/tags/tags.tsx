import { TagsContainer } from './styled'

const Tags = () => {
  const tags = [
    'vintage',
    'wedding',
    'Cotton',
    'Linen',
    'Navy',
    'Urban',
    'Business Meeting',
    'Formal',
  ]

  return (
    <TagsContainer>
      <h4>Tags</h4>
      <div className="tag-span-container">
        {tags.map((tag, index) => (
          <span className="tag-span" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </TagsContainer>
  )
}

export default Tags
