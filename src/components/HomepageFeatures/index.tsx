import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast Time to Market',
    Svg: require('@site/static/img/dev-focus.svg').default,
    description: (
      <>
        What you see here was built in a few hours. Let's get your developer portal up and running quickly so we can focus on building the references, tutorials, and guides that your integrators need.
      </>
    ),
  },
  {
    title: 'Integrated API Reference',
    Svg: require('@site/static/img/online-reading.svg').default,
    description: (
      <>
        A good REST API is a must for any modern developer portal. This portal integrates a stylish and powerful API Reference that was not part of the original site template.
      </>
    ),
  },
  {
    title: 'Powered by Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This portal uses popular, well maintained libraries and composable Docs as Code processes to keep development effort low, avoid vendor lock in, and provide a great developer experience.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
