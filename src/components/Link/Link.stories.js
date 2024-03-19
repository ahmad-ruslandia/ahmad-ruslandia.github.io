import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://happy-dune-0b9442500.5.azurestaticapps.net/">Primary link</Link>
    <Link secondary href="https://happy-dune-0b9442500.5.azurestaticapps.net/">
      Secondary link
    </Link>
  </StoryContainer>
);
