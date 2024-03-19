import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://ahmad-ruslandia.github.io">Primary link</Link>
    <Link secondary href="https://ahmad-ruslandia.github.io">
      Secondary link
    </Link>
  </StoryContainer>
);
