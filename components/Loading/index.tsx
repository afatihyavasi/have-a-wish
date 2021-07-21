import Spinner from '@/components/Spinner';

interface ILoadingTypes {
   isLoading: boolean;
}

const Loading: React.FC<ILoadingTypes> = (props) => {
   const { isLoading, children } = props;

   if (isLoading) <Spinner />;

   return <>{children}</>;
};

export default Loading;
