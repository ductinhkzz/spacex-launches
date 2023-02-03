import { Suspense } from 'react';
import { LoadingOverlay } from './LoadingOverlay';

type LoadComponentProps = {
  component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
  <Suspense fallback={<LoadingOverlay />}>
    <Component />
  </Suspense>
);

export { LoadComponent };
