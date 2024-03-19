import backgroundSandvikLarge from 'assets/sandvik-background-large.jpg';
import backgroundSandvikPlaceholder from 'assets/sandvik-background-placeholder.jpg';
import imageSandvikBackgroundLoaderLarge from 'assets/sandvik-background-loader-large.jpg';
import imageSandvikBackgroundLoaderPlaceholder from 'assets/sandvik-background-loader-placeholder.jpg';
import imageSandvikBackgroundLoader from 'assets/sandvik-background-loader.jpg';
import backgroundSandvik from 'assets/sandvik-background.jpg';
import imageSandvikLessonBuilderDarkLarge from 'assets/sandvik1-large.jpg';
import imageSandvikLessonBuilderDarkPlaceholder from 'assets/sandvik1-placeholder.jpg';
import imageSandvikLessonBuilderDark from 'assets/sandvik1.jpg';
import imageSandvikLessonBuilderLightLarge from 'assets/sandvik2-large.jpg';
import imageSandvikLessonBuilderLightPlaceholder from 'assets/sandvik2-placeholder.jpg';
import imageSandvikLessonBuilderLight from 'assets/sandvik2.jpg';
import videoSandvikMotionLarge from 'assets/sandvik-motion-large.mp4';
import videoSandvikMotionPlaceholder from 'assets/sandvik-motion-placeholder.jpg';
import videoSandvikMotion from 'assets/sandvik-motion.mp4';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './SandvikAsset.module.css';

const title = 'Sandvik Asset Management';
const description =
  'The project was created in 2023, a goal in its design to facilitate supporting the company property assets easily via infterface and user security.';
const roles = ['Codeigniter', 'Bootstrap', 'My SQL'];

export const SandvikAsset = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSandvik}
          srcSet={`${backgroundSandvik.src} 1080w, ${backgroundSandvikLarge.src} 2160w`}
          placeholder={backgroundSandvikPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/ahmad-ruslandia/Sandvik-Asset-CI"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSandvikLessonBuilderDark, imageSandvikLessonBuilderDarkLarge]
                  : [imageSandvikLessonBuilderLight, imageSandvikLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSandvikLessonBuilderDarkPlaceholder
                  : imageSandvikLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Sandvik SMC</ProjectSectionHeading>
            <ProjectSectionText>
              Sandvik SMC is a company operating in Kuala Kencana, which is located in
              Timika, Papua, Indonesia. They are part of the Sandvik Group, a global
              engineering group that provides solutions for various industries, including
              manufacturing, mining, and infrastructure. The Sandvik SMC facility in Kuala
              Kencana likely contributes to these areas, supporting local industries and
              projects.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSandvikBackgroundLoader} 1280w, ${imageSandvikBackgroundLoaderLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSandvikBackgroundLoaderPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Demo Application</ProjectSectionHeading>
                  <ProjectSectionText>
                    Animation was a core principle in making the authoring experience a
                    more understandable process. Elements animate in ways that indicate
                    the cause and effect of each interaction to improve the fluidity of
                    the overall experience.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSandvikMotion, width: 1280 },
                  { src: videoSandvikMotionLarge, width: 2560 },
                ]}
                placeholder={videoSandvikMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
