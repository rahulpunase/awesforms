import Text from '../Text';

const Icon = ({ icon }: { icon: string }) => {
  return (
    <Text color="_inherit">
      <span className={icon} />
    </Text>
  );
};

export default Icon;
